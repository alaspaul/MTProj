import { useState } from 'react'

import './App.css'





function App() {
  const[items, setItems] = useState([]);
  const[grocery, setgrocery] = useState("Groceries");

  const addItemtoList = () => {
    if(!items.find((item) => item.name === grocery)){
      setItems([...items, {id: items.length, name:grocery}]);
    }else{
      alert('item is already in the list');
    }
  }

  const removeItemfromList = (name) => {
    setItems((current) =>
      current.filter((items) => items.name !== name)
    );
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
          <ul className='list'>{items.map((item) => (<li key={item.id}>{item.name}
            
            <button className='editButton'>Edit</button>

            <button className='removeButton' onClick={() => removeItemfromList(item.name)}>remove</button> 
            
          </li>))}</ul>
        </div>
        
        
        
        
        
        
        
        </div>
    </main>
  )
}

export default App
