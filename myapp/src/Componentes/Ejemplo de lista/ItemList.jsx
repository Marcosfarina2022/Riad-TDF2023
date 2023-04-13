import React from 'react';
const ItemList = (props) =>{
return(

    <div>
        <li>
            <h3>{props.title}</h3>
            <h3>{props.description}</h3>
        </li>
    </div>
)

}
export default ItemList;