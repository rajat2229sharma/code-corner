import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { addTask } from '../redux/action';
import TaskRow from '../components/TaskRow/TaskRow';
import taskStatusKeys from '../helper/taskStatusKeys';

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

    const { done, progress, review, todo } = taskStatusKeys;

    const getRowData = (taskKey) => data.filter(item=>item.status === taskKey.key);

    return (
        <div style={{ marginTop: '4rem' }}>
            <div style={{ width: '23%', margin: '0 auto' }}>
                <input onFocus={handleInputFocus} value={inputData} onChange={handleInputChange} style={{ padding: '5px 10px' }} type='text' />
                <button onClick={handleSubmit} style={{ marginLeft: '5px', border: 'none', padding: '8px 10px', borderRadius: '4px', fontWeight: 'bold', backgroundColor: 'gray', color: 'black' }}>Create Task</button>
                <div style={{ textAlign: 'left', color: 'red' }}><span>{error}</span></div>
            </div>
            <div style={{ margin: '4rem auto', width: '98%', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TaskRow rowData={getRowData(todo)} heading="TO DO" rowKey={todo}  />
                    <TaskRow rowData={getRowData(progress)} heading="IN PROGRESS" rowKey={progress} />
                    <TaskRow rowData={getRowData(review)} heading="IN REVIEW" rowKey={review} />
                    <TaskRow rowData={getRowData(done)} heading="DONE" rowKey={done} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;