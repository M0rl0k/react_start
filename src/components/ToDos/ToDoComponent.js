import React from 'react';

const ToDoComponent = ({todo}) => {
    return (
        <div className={'element'}>
            {`ID: ${todo.id} Title: ${todo.title} Status: ${todo.completed.toString()}`}
        </div>
    );
};

export default ToDoComponent;