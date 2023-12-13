// Home.jsx
import React, { useState } from 'react';
import Notes from './Notes';
import Note from './Note';

const Home = () => {
  const [additem, setAddItem] = useState([]);

  const addnote = (note) => {
    setAddItem((prevValue) => {
      return [...prevValue, note];
    });
  };

  return (
    <>
      <Notes passNote={addnote} />

      {additem.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
          />
        );
      })}
    </>
  );
}

export default Home;
