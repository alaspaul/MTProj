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
            <tr>
              <th>
                Grocery Bud
              </th>
            </tr>
          </thead>
          <form>
            <input type="text" name="item" required="required" placeholder="e.g. eggs">

            </input>
          </form>
          <tbody>

            {list.map((list) =>( 
              <tr>
                <td>
                 {list.item}
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
