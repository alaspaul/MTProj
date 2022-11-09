import React from "react";


const readOnlyRow = ({list, editList}) =>{

    return (
            <tr>
                <td>
                 {list.item}
                </td>
                <td>
                  <button type="button" onClick={(event) => editList(event, list)}>edit</button>
                </td>
              </tr>
      )
}




export default readOnlyRow