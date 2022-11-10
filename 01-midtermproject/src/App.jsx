import React, { useState, useEffect } from 'react';
import List from './component/List.jsx';
import Alert from './component/Alert.jsx';
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {  // if no value
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) { // if name is name is editing
      setList(
        list.map((item) => {    //sets the new list
          if (item.id === editID) {
            return { ...item, title: name }; //returns the list with the edited item
          }
          return item; //return item
        })
      );
      setName('');                  // turning values back to original forms
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');  //turning alrt into true to show a message
    } else { // if adding item to list
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]); // adding the new item to the list
      setName(''); // turning setname to original value
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg }); // show means display or no, type is type of message, msg is the message
  };
  const clearList = () => { // clear list
    showAlert(true, 'danger', 'empty list');
    setList([]); // setting the list into an empty list
  };
  const removeItem = (id) => { // removing an item
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id)); // filtering the item to be removed
  };
  const editItem = (id) => { // editing item
    const specificItem = list.find((item) => item.id === id); //finding item with the id
    setIsEditing(true); //setting editing to true for the button name change
    setEditID(id);  //id to be set
    setName(specificItem.title); // setting the newly created const to setname which then goes into the edit button or handleSubmit
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />} {/*if show is true then call Alert.jsx*/}

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}          
          />               {/*setting the inputed value into name*/}
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'} {/*if isEditing is true then the button name becomes edit if false button becomes submit */}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />  {/*passing the list, the removeItem and editItem to List.jsx*/}
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;