import React from 'react';
import 'antd/dist/antd.css';
import {Button, Input} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

export const Form = ({onChangeTitle, titleValue, onButtonClick}) => (
    <div className='todo__form'>
        <Input type="text" placeholder='Title...' value={titleValue} onChange={e => onChangeTitle(e.target.value)}/>
        <Button type="primary" disabled={!titleValue} icon={<PlusOutlined/>} onClick={onButtonClick}>
            Add
        </Button>
    </div>
)