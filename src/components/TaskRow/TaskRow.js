import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getValidKeys } from '../../helper/taskStatusKeys';
import { removeTask } from '../../redux/action';
import ViewUpdateDialog from '../ViewUpdateDialog/ViewUpdateDialog';

const TodoTask = ({ rowData, heading, rowKey }) => {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [viewEditData, setViewEditData] = useState('');

    const handleDelete = (id) => {
        dispatch(removeTask(id));
    }

    const handleViewUpdate = (id) => {
        setOpen(true);
        let newEditData = rowData.find((value) => {
            return value.id === id;
        })
        setViewEditData(newEditData);
    }

    const validStatusKeys = getValidKeys(rowKey.key);

    return (
        <div style={{ width: '24%', backgroundColor: 'gray', borderRadius: '10px' }}>
            <div style={{ padding: '20px 10px' }}>
                <h4>{heading}</h4>
                {rowData.map((value) => (
                    <li style={{ backgroundColor: 'lightgray', display: 'flex', alignItems: 'center', margin: '10px 0', justifyContent: 'space-between', padding: '10px', borderRadius: '6px' }} key={value.id}>
                        <h5 style={{ margin: '0' }}>{value.title}</h5>
                        <div style={{ display: 'flex' }}>
                            <button onClick={() => handleDelete(value.id)}>Delete</button>
                            <button style={{ marginLeft: '5px' }} onClick={() => handleViewUpdate(value.id)}>View</button>
                        </div>
                    </li>
                ))}
            </div>
            {open && <ViewUpdateDialog viewEditData={viewEditData} open={open} setOpen={setOpen} rowKey={rowKey} validStatusKeys={validStatusKeys }/>}
        </div>
    )
}

export default TodoTask;