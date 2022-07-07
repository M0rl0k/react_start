import React from 'react';

const ToDosApiService = () => {

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value => value.json())

};

export default ToDosApiService;