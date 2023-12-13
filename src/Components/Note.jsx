// Note.jsx
import React, { Fragment } from 'react';
import './Style/Note.css'; // Import the CSS file

const Note = (props) => {
  return (
    <Fragment>
      <div className='note'>
        <h1>{props.title}</h1><br/>
           <div className="notecontact">
           <p>{props.content}</p>
           </div>
        <button>Delete</button>
      </div>
    </Fragment>
  );
}

export default Note;
