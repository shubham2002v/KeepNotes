// Note.jsx
import React, { Fragment } from 'react';
import './Style/Note.css';

const Note = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <Fragment>
      <div className='note'>
        <h1>{props.title}</h1><br/>
        <div className="notecontact">
          <p>{props.content}</p>
        </div>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
      </div>
    </Fragment>
  );
}

export default Note;
