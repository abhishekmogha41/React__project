import React, { useState } from 'react'
import Todolist from './Todolist'

const Todo = () =>{

    const [inputlist,setinputlist]=useState();
    const [iteam,setiteam] = useState([]);
    const iteamEvent = (event) => {
        setinputlist(event.target.value);
    }

    const listofiteams = () =>{
        setiteam((olditems) => {
            return [...olditems, inputlist];
        });
        setinputlist('');
    }
    const delectiteams =(id) =>{
        console.log('del');
        setiteam((olditems) =>{
            return olditems.filter((arrElem,index)=>{
                    return index!== id;
            })
        });
    }
return(
    <>
    <div className='container'>
        <div className='center_div' align="center">
        <br/>
            <h1 > Todo List</h1>
            <br/>
            <input type='text' placeholder="Enter your tasks" value={inputlist} onChange={iteamEvent}/>
            <button onClick={listofiteams}><i className="fa fa-plus"></i></button>
            <ol>
                {
                    iteam.map((iteamval,index)=>{
                       return <Todolist key={index} id={index} text={iteamval} onSelect={delectiteams}/>;
                    })
                }
            </ol>
        </div>
    </div>
    </>
);
}

export default Todo;