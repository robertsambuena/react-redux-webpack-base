import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todo-app/todo.js';
import './main.scss';


ReactDOM.render(
    <TodoApp list={['nicela']}/>
    ,document.getElementById('main')
);
