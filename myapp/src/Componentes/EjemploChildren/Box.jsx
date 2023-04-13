import React from 'react';
const Box = (props) =>{
return(
    <div>
         <h3>{props.title}</h3>
         <div>{props.children}</div>
    </div>
)

}
export default Box;