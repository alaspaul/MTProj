import { useState } from 'react'

import {nanoid} from 'nanoid'
import './App.css'
import Data from './Grocery-Data.json'




function App() {

  
const[list, setList] = useState(Data);
const[addFormData, setAddFormData] = useState({
  item:''
});

const [editItemId, setEditItemId] = useState(null);


const addItem =(event) => {
  event.preventDefault();

  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.value;

  const newFormData = { ...addFormData};

  newFormData[fieldName] = fieldValue;

  setAddFormData(newFormData);
}


  const addList = (event) => {
    event.preventDefault();

    const newList ={
      id: nanoid(),
      item: addFormData.item
    }


    const newLists = [...list, newList];
    setList(newLists);
  }
 
    const editList = (event, list) =>{
      event.preventDefault();

      setEditItemId(list.id);
    }
  

  return (
    <main>
      <div className='App-container'>
    
        <table>
          <thead>
            <tr>
              <th>
                Grocery Bud
                <form onSubmit={addList}>
            <input type="text" name="item" required="required" placeholder="e.g. eggs" onChange={addItem} />

           <button type="submit">Add</button>
          </form>
              </th>
            </tr>
          </thead>
          
          <tbody>

            {list.map((list) =>( 
              <tr>
                <td>
                 {list.item}
                </td>
                <td>
                  <button type="button" onClick={(event)=> editList(event, list)}>edit</button>
                </td>
              </tr>
                ))}
           

          </tbody>




        </table>
        
        






        </div>  

    </main>
  )
}

export default App
