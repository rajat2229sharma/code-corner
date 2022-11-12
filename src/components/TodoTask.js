import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../redux/action';
import ViewUpdateDialog from './ViewUpdateDialog';

const TodoTask = ({ todoData }) => {

    const dispatch = useDispatch();
    const [ open, setOpen ] = useState(false);
    const [ viewEditData, setViewEditData ] = useState('');

    const handleDelete = (id) => {
        dispatch(removeTask(id));
    }

    const handleViewUpdate = (id) => {
        setOpen(true);
        let newEditData = todoData.find((value) => {
            return value.id === id;
        })
        setViewEditData(newEditData);
    }

    return (
        <div style={{ width: '24%', backgroundColor: 'gray', borderRadius: '10px' }}>
            <div style={{ padding: '20px 10px' }}>
                <h4>TO DO</h4>
                {todoData.map((value) => (
                    <li style={{ backgroundColor: 'lightgray', display: 'flex', alignItems: 'center', margin: '10px 0', justifyContent: 'space-between', padding: '10px', borderRadius: '6px' }} key={value.id}>
                        <h5 style={{ margin: '0' }}>{value.data}</h5>
                        <div style={{ display: 'flex' }}>
                            <button onClick={() => handleDelete(value.id)}>Delete</button>
                            <button style={{ marginLeft: '5px' }} onClick={() => handleViewUpdate(value.id)}>View</button>
                        </div>
                    </li>
                ))}
            </div>
            {open && <ViewUpdateDialog viewEditData={viewEditData} open={open} setOpen={setOpen} />}
        </div>
    )
}

export default TodoTask;