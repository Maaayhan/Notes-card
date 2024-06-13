import React from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Note = () => {
  return (
    <div className='note'>
        <div className='note__body'>
            Note
        </div>
        <div className='note__footer' style={{ justifyContent: "flex-end"}}>
            <DeleteForeverOutlinedIcon className='note__delete'/>
        </div>
    </div>
  )
}

export default Note;