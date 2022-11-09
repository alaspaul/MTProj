import { useState } from 'react'

import './App.css'
import Data from './Grocery-Data.json'




function App() {

  
const[list, setList] = useState(Data);
 
  

  return (
    <main>
      <div className='App-container'>
        <table>
          <thead>
              <th>
                Grocery Bud
              </th>



          </thead>
          <tbody>
            {list.map((list) =>( <td>
                 {list.item}
                </td>
                ))}
           

          </tbody>




        </table>
        
        






        </div>  

    </main>
  )
}

export default App
