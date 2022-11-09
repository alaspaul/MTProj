import React from "react";



const EditRow = ({editFormData, editItem}) => {


    return(
        <tr>
                <td>
             
                    <input type="text" name="item" required="required" value={editFormData.item} onChange={editItem}/>

                  </td><td>
                    <button type="submit">Save</button>
                </td>
              
        </tr>

    )
}


export default EditRow