import React from 'react'

const Todolist = (props) => {
    // const delectiteams =() =>{
    //     console.log('deleted');
    // }
    return (
    <>
    <div className='todo_style'>
    <i  className="fa fa-times"

        onClick={()=>{
            props.onSelect(props.id);
        } }
        
    />
     <li> {props.text}</li>
    </div>
    </>
    )
}

export default Todolist;