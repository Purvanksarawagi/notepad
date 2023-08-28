import React from 'react';
import './index.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const Note = (props) => {
  const deleteNote = () =>{
    props.deleteItem(props.id);
  }

  return (
    <>
      <div className='note'>
      <h1>{props.title}</h1>
      <br />
      <p>{props.content}</p>
      <button onClick={deleteNote}>
      <DeleteOutlineIcon className='delete_icon' />
      
      </button>
      </div>
    </>
  )
} 
export default Note;
