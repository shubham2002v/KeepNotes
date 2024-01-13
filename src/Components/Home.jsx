import React, { useState } from 'react';
import Notes from './Notes';
import Note from './Note';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [additem, setAddItem] = useState([]);

  const addnote = (note) => {
    setAddItem((prevValue) => {
      return [...prevValue, { ...note, id: uuidv4() }];
    });
  };

  const deleteNote = (id) => {
    setAddItem((prevValue) => prevValue.filter((note) => note.id !== id));
  };

  return (
    <>
      <Notes passNote={addnote} />

      {additem.map((value) => (
        <Note
          key={value.id}
          id={value.id}
          title={value.title}
          content={value.content}
          onDelete={deleteNote}
        />
      ))}
    </>
  );
}

export default Home;
