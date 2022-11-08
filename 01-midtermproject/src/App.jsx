import { useState } from 'react'

import './App.css'

function addToList(){

}



function App() {
  const[items, setItems] = useState([]);
  const[grocery, setgrocery] = useState("items");
  const addItemtoList = () => {
    if(!items.find((item) => item.name === grocery)){
      setItems([...items, {id: items.length, name:grocery}]);
    }else{
      alert('item is already in the list');
    }
  }

  return (
    <main>
      <div className='Body'>
        <div className='Header'>  
          <h1>Grocery Bud</h1>
        </div>
        <div className='input'>
          <input type ="text" value = {grocery} onChange={(event) => setgrocery(event.target.value)
          }></input>
          <button onClick={() => addItemtoList()}>Add</button>
        </div>
        <div className='table'>
          <ul>{items.map((item) => (<li key={item.id}>{item.name}<button>Edit</button><button>remove</button></li>))}</ul>
        </div>
        
        
        
        
        
        
        
        </div>
    </main>
  )
}

export default App
