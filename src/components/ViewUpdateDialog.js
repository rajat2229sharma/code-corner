import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { updateTask } from '../redux/action';

const ViewUpdateDialog = ({ open, setOpen, viewEditData }) => {

  const [ editData, setEditData ] = useState(viewEditData.data);
  const [ error, setError ] = useState('');

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateChnage = (e) => {
    setEditData(e.target.value);
  }

  const handleInputFocus = () => {
        if (error) {
            setError('');
        }
    }

  const handleUpdateSubmit = (id) => {
    if (editData) {
        dispatch(updateTask(id, editData))
        setOpen(false);
    } else {
        setError('Please add task!');
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>View and Update</DialogTitle>
        <DialogContent>
          <TextField
            value={editData}
            onChange={handleUpdateChnage}
            autoFocus
            onFocus={handleInputFocus}
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
          />
          <div style={{ textAlign: 'left', color: 'red' }}><span>{error}</span></div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleUpdateSubmit(viewEditData.id)}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ViewUpdateDialog;