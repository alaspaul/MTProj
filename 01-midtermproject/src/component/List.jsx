import React from 'react'

const List = (itemList) => {
    return
    <main>
        <div className="itemList">
            <h2>hello</h2>
            {itemList.map((item)=>{
                const{id,title} = item;
                return <article key={id} className="groceryItem">
                    <p className='title'>{title}</p>
                    <div className="buttons">
                        <button type="button" className='editBut'>edit</button>
                        <button type="button" className='delBut'>delete</button>
                    </div>
                </article>
            })}

            </div>    
         
    </main>
 

}


export default List
