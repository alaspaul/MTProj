import React, {useState, useEffect} from "react";
import Alert from './component/Alert.jsx'
import List from './component/List.jsx'


function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [isEditable, setIsEditable] = useState(false); 
  const [editItemId, setEditItemId] = useState(null);
  const [alert, setAlert] = useState({
      display:false,
      message:'',
      color:''
  });

  const buttonSubmit = (event) => {
    event.preventDefault();
    if(!item){
      // display alert
    }
    else if(item && isEditable){
      // deal with edit
    }
    else{
      // show alert
      const newItem = {id: new Date().getTime().toString(), 
        title:item};

        setList([ ...List, newItem]);
        setItem('');

    }
  }

  return <div className="mainContainer">
      <form className="listForm" onSubmit={buttonSubmit}>
        {alert.display && <Alert />} {/* if display is true then it prints an alert */}
        <h3>Grocery Bud</h3>
        <div className="formInput">
            <input type="text" className="itemText" placeholder="e.g. eggs" value={item} onChange={(e)=> setItem(e.target.value)}/>
            <button type="submit" className="submitBut">{isEditable ? 'Edit' : 'Submit'}</button>
        </div>
      </form>
      <div className="listContainer">
         <List itemList={list}/>
          <button className="clearBut">Clear</button>
      </div>


  </div>




}



export default App