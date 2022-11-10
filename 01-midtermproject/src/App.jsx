import React, {useState, useEffect} from "react";
import Alert from './Alert.jsx'
import List from './List.jsx'


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
    console.log('submit');
  }

  return <main className="Main">
      <form className="listForm" onSubmit={buttonSubmit}>
        {alert.display && <Alert />} {/* if display is true then it prints an alert */}
        <h3>Grocery Bud</h3>
        <div className="formInput">
            <input type="text"/>
            <button type="submit" className="submitBut">{isEditable ? 'Edit' : 'Submit'}</button>
        </div>
      </form>
      <div className="listContainer">
          <List />
          <button className="clearBut">Clear</button>
      </div>


  </main>




}



export default App