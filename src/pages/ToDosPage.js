import React from 'react';
import TodosApiService from "../services/todos.api.service";
import {Outlet} from 'react-router-dom';

const ToDosPage = () => {
    return (
        <div>
            <TodosApiService/>

            <Outlet/>
        </div>


    );
};

export default ToDosPage;