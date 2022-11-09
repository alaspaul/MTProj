import { useState, fragment } from 'react';

import {nanoid} from 'nanoid';
import './App.css';
import Data from './Grocery-Data.json';
import ReadOnlyRow from './component/ReadOnlyRow.jsx';
import EditRow from './component/EditRow.jsx';


function App() {

  
const[list, setList] = useState(Data);
const[addFormData, setAddFormData] = useState({
  item:''
});

const [editFormData, setEditFormData] = useState({
  item:''
});

const [editItemId, setEditItemId] = useState(null);


const addItem =(event) => {
  event.preventDefault();

  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;

  const newFormData = { ...addFormData};

  newFormData[fieldName] = fieldValue;

  setAddFormData(newFormData);
}



const editItem = (event) => {
  event.preventDefault();

  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;

  const newFormData = { ...editFormData};

  newFormData[fieldName] = fieldValue;

  setEditFormData(newFormData);


}



  const addFormSubmit = (event) => {
    event.preventDefault();

    const newList ={
      id: nanoid(),
      item: addFormData.item
    }


    const newLists = [...list, newList];
    setList(newLists);
  }
 
  const editFormSubmit = (event) =>{
    event.preventDefault();

    const editedList ={
      id: editItemId,
      item: editFormData.item
    }


    const newLists = [...list];

    const index = list.findIndex((list) => list.id === editItemId);

    newLists[index] = editedList;

    setList(newLists);
    setEditItemId(null);
  } 


    const editList = (event, list) =>{
      event.preventDefault();

      setEditItemId(list.id);



      const formValues = {
        item: list.item
      }


      setEditFormData(formValues);
    }
  

  const cancelEdit = () => {
    setEditItemId(null);
  }


  const deleteItem = (listId) => {
    const newLists = [...list];

    const index = list.findIndex((list)=> list.id === listId);

    newLists.splice(index, 1);
    setList(newLists);
  }

  return (
    <main>


      <div className='App-container'>

      <h1>Grocery Bud</h1>
                <form onSubmit={addFormSubmit}>
            <input type="text" name="item" required="required" placeholder="e.g. eggs" onChange={addItem} />
           <button type="submit">Add</button>
           </form>


    <form onSubmit={editFormSubmit}>
        <table>
          
          
          
          <tbody className='tbody'>

            {list.map((list) =>( 
              <fragment className="frags"> 
                
                {editItemId === list.id ? 
                (<EditRow 
                editFormData = {editFormData} 
                editItem = {editItem} 
                cancelEdit = {cancelEdit}/>
                ):
                ( <ReadOnlyRow 
                list = {list} 
                editList = {editList} 
                deleteItem = {deleteItem} /> )}

              </fragment>
             
                ))}
           

          </tbody>




        </table>
        </form>
        






        </div>  

    </main>
  )
}

export default App
