import React from 'react'

function MenuItem(props) {
  return (
  
    <div className='menuItem' > 
      <div style={{ background:`url(${props.image})`, backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'}}>
    {/* <div style={{ background:`url(${props.image})`, backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'}} className='imgcont'>  */}
      </div>
     {/* <div className='pizzaimg' > <img src={props.image} alt={props.name}/></div> */}
     
        <h3>{props.name}</h3>
        <h2>${props.price}</h2>
        </div>
        
   
 
  )
}

export default MenuItem