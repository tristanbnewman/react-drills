import React from 'react';
import Todo from './Todo';

const List = (props) =>{
    const list = props.taskArray.map((task, index)=>{
            return <Todo key={index} task={task} />
        })

    return <div>{list}</div>
}

export default List;