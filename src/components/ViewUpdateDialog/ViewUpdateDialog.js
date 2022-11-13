import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { updateTask } from '../../redux/action';
import { InputLabel, MenuItem, Select } from '@mui/material';

const ViewUpdateDialog = ({ open, setOpen, viewEditData, validStatusKeys }) => {

  const [ taskData, setEditData ] = useState({
    id: viewEditData.id,
    status: viewEditData.status || '',
    title: viewEditData.title || '',
  });

  const [ error, setError ] = useState('');
  const [ commentData, setCommentData ] = useState([]);
  const [ comment, setComment ] = useState('');

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateChnage = (e, key) => {
    setEditData({ ...taskData , [key]: e.target.value });
  }

  const handleAddComment = (commentVal) => {
    if(commentVal){
      setComment(commentVal);
    }
  }

  const handleAddCommentButton = () => {
    setCommentData([...commentData, comment]);
    setComment('')
  }

  const handleInputFocus = () => {
        if (error) {
            setError('');
        }
    }

  const handleUpdateSubmit = (id) => {
    if (taskData.id) {
      dispatch(updateTask(taskData))
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
            value={taskData.title}
            onChange={(e)=>handleUpdateChnage(e,'title')}
            autoFocus
            onFocus={handleInputFocus}
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <div style={{ textAlign: 'left', color: 'red' }}><span>{error}</span></div>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={taskData.status}
            label="Status"
            onChange={(e) => handleUpdateChnage(e,'status')}
          >
            {
              validStatusKeys.map((item, index) => <MenuItem key={index} value={item.value}>{item.name}</MenuItem>)
            }
          </Select>
        <div>
          <h4>Comment</h4>
          <input type="text" value={comment} onChange={(e)=>handleAddComment(e.target.value)}  />
          <button onClick={handleAddCommentButton}>Add Comment</button>
            {commentData?.length < 1 ? <p>No Comments</p> : (
            <div>
                {commentData?.map((item)=>(
                  <div key={item}>
                    <p>{item}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
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