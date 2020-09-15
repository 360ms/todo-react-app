import React from 'react';
import {Button, Checkbox} from "antd";
import {DeleteOutlined} from '@ant-design/icons';

export const TodoList = ({todos, onDelete, onChangeCheckbox}) => (
    <ul className='todo__list'>
        {
            todos && todos.map(item => (
                <li key={item.id} className='todo__item'>
                    <Checkbox onChange={onChangeCheckbox.bind(this, item.id)} checked={item.completed}/>
                    {item.title}
                    <Button type="danger" onClick={onDelete.bind(this, item.id)} icon={<DeleteOutlined/>}/>
                </li>
            ))
        }
    </ul>
);