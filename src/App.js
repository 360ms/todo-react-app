import React, {useEffect, useState} from 'react'
import './index.css'
import {Form} from "./components/Form";
import {TodoList} from "./components/TodoList";
import {message} from 'antd';
import {EditOutlined} from '@ant-design/icons';

const App = () => {
    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        setTodo(JSON.parse(localStorage.getItem('todo')))
    }, []);

    const addTodo = () => {
        if (localStorage.getItem('todo') === null) {
            const todoArr = [];
            todoArr.push({
                id: Math.random() + new Date().getTime(),
                title,
                completed: false
            });
            localStorage.setItem('todo', JSON.stringify(todoArr));
        } else {
            const todoArr = JSON.parse(localStorage.getItem('todo'));
            todoArr.push({
                id: Math.random() + new Date().getTime(),
                title,
                completed: false
            });
            localStorage.setItem('todo', JSON.stringify(todoArr));
        }

        message.success({
            content: 'Note added',
            style: {
                position: 'absolute',
                top: '20px',
                right: '20px'
            }
        });

        setTodo(JSON.parse(localStorage.getItem('todo')));
        setTitle('');
    };

    const onDelete = id => {
        const todoArr = JSON.parse(localStorage.getItem('todo'));
        const result = todoArr.filter(item => item.id !== id);
        setTodo(result);
        localStorage.setItem('todo', JSON.stringify(result));
        message.success({
            content: 'Deleted',
            style: {
                position: 'absolute',
                top: '20px',
                right: '20px'
            }
        });
    };

    const onChangeCheckbox = id => {
        const todoArr = JSON.parse(localStorage.getItem('todo'));
        todoArr.map(item => item.id === id ? item.completed = !item.completed : item.completed);
        setTodo(todoArr);
        localStorage.setItem('todo', JSON.stringify(todoArr));
    };

    return (
        <div className='todo'>
            <h1>Todo App &nbsp;<EditOutlined/></h1>

            <Form onChangeTitle={setTitle} titleValue={title} onButtonClick={addTodo}/>
            <TodoList todos={todo} onDelete={onDelete} onChangeCheckbox={onChangeCheckbox}/>
        </div>
    )
}

export default App
