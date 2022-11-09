import React from "react";



const EditRow = ({editFormData, editItem, cancelEdit}) => {


    return(
        <tr>
                <td>
             
                    <input type="text" name="item" required="required" value={editFormData.item} onChange={editItem}/>

                  </td>
                  <td>
                    <button type="submit">Save</button>
                </td>
                <td>
                    <button type="submit" onClick={cancelEdit}>cancel</button>
                </td>
              
        </tr>

    )
}


export default EditRow