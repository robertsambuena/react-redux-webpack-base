import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todo-app/todo.js';
import Header from './common/header.js';
import Footer from './common/footer.js';
import 'main.scss';


ReactDOM.render(
    <Header />
    <TodoApp list={['nicela']}/>
    <Sidebar />
    ,document.getElementById('main')
;
