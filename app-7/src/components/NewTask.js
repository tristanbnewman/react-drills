import React, {Component} from 'react';

const NewTask = (props) =>{
    return <div>
            <input id='input' onChange={props.updateInput}/>
            <button onClick={props.updateList}>Add task</button>
        </div>
}

export default NewTask;