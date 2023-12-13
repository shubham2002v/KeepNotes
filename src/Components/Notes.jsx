// Notes.jsx
import React, { useState } from 'react';
import './Style/Notes.css';

const Notes = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }

  const AddEvent = () => {
    props.passNote(note);
    setNote({
      title: '',
      content: ''
    });
  }

  return (
    <>
      <div className='main_notes'>
        <form>
          <input
            type='text'
            placeholder='Title'
            autoComplete='off '
            value={note.title}
            name='title'
            onChange={InputEvent}
          />
          <textarea
            rows=""
            column=""
            placeholder='Write a note...'
            value={note.content}
            name='content'
            onChange={InputEvent}
          ></textarea>
          <button type="button" onClick={AddEvent}>Add Notes</button>
        </form>
      </div>
    </>
  );
}

export default Notes;
