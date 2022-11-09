import React from "react";


const readOnlyRow = ({list, editList, deleteItem}) =>{

    return (
            <tr>
                <td>
                 {list.item}
                </td>
                <td>
                <button type="button" onClick={(event) => editList(event, list)}>edit</button>
                <button type="button" onClick={() => deleteItem(list.id)}>delete</button>
                </td>
               
              </tr>
      )
}




export default readOnlyRow