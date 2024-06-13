import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const CreateNote = () => {
  return (
    <div className='note'>
        <textarea cols={10}
            rows={5}
            placeholder='Type....'
            maxLength={100}
        ></textarea>
        <div className='note__footer'>
            <span className='label'>100 left</span>
            <button className='note__save'>Save</button>
        </div>
        <LinearProgress
            className='char_progress'
            variant='determinate'  
            value={50} 
        />
    </div>
  )
}

export default CreateNote;