import React, {useEffect, useState} from 'react';
import {getTodos} from "../../services/api.service";
import ToDoComponent from "./ToDoComponent";

const ToDosComponent = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        getTodos()
            .then(value => value.json())
            .then(value => setTodos([...value]));
    },[])

    return (
        <div className={'main'}>
            {todos.map((todo, index)=> <ToDoComponent todo={todo} key={index}/>)}
        </div>
    );
};

export default ToDosComponent;