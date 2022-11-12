import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { addTask } from '../redux/action';
import TodoTask from './TodoTask';

const Dashboard = () => {

    const [ inputData, setInputData ] = useState('');
    const [ error, setError ] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(state => state.reducerData.list);

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleInputFocus = () => {
        if (error) {
            setError('');
        }
    }

    const handleSubmit = () => {
        if (inputData) {
            dispatch(addTask(inputData));
            setInputData('');
        } else {
            setError('Please add task!');
        }
    }
   
    return (
        <div style={{ marginTop: '4rem' }}>
            <div style={{ width: '23%', margin: '0 auto' }}>
                <input onFocus={handleInputFocus} value={inputData} onChange={handleInputChange} style={{ padding: '5px 10px' }} type='text' />
                <button onClick={handleSubmit} style={{ marginLeft: '5px', border: 'none', padding: '6px 10px', backgroundColor: 'blue', color: 'white' }}>Create Task</button>
                <div style={{ textAlign: 'left', color: 'red' }}><span>{error}</span></div>
            </div>
            <div style={{ margin: '4rem auto', width: '98%', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TodoTask todoData={data} />
                    <TodoTask todoData={data} />
                    <TodoTask todoData={data} />
                    <TodoTask todoData={data} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;