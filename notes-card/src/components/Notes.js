import { useState, useEffect } from 'react'
import Note from './Note'
import CreateNote from './CreateNote';
import "../style/Note.css"
import { v4 as uuid } from 'uuid'

const Notes = () => {
        const [notes, setNotes] = useState([]);
        const [inputText, setInputText] = useState('');
        const [loading, setLoading] = useState(true);


    //get text and store in InputText
    const handleText = (e) => {
        setInputText(e.target.value)
    }

    //add new note
    const addNote = () => {
        //如果需要在更新State时参考之前的State
        //可以在调用setState时传入一个回调函数，这个回调函数接受之前的State作为参数，返回新的State 
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text: inputText
            },
        ]);
        //clear textarea after add note
        setInputText('');
    };

    const deleteNote = (id) => {
        const filteredNotes = notes.filter(note => note.id !== id);
        setNotes(filteredNotes);
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('Notes'));
        if (Array.isArray(data) && data.length > 0) {
            setNotes(data);
        }
        setLoading(false);
    },[]);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem('Notes', JSON.stringify(notes));
        }
    }, [notes, loading]);

    return (
    <div className='notes'>
        {notes.length > 0 && notes.map(note => (
         <Note 
            key={note.id} 
            id={note.id}
            text={note.text}
            deleteNote={deleteNote}
        />  
        ))}
        <CreateNote 
            handleText={handleText} 
            addNote={addNote} 
            inputText={inputText}
        />
    </div>
  );
};

export default Notes;