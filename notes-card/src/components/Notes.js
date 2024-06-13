import { useState, useEffect } from 'react'
import Note from './Note'
import CreateNote from './CreateNote';
import "../style/Note.css"

const Notes = () => {
        const [notes, setNotes] = useState([]);
        const [inputText, setInputText] = useState('');
    return (
    <div className='notes'>
        <Note />
        {notes.map(note => (
         <Note key={note.id} />  
        ))}
        <CreateNote />
    </div>
  )
}

export default Notes;