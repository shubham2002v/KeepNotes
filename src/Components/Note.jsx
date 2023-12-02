import React, { Fragment } from 'react';
import './Style/Note.css'// Import the CSS file
const Note = () => {
  return (
   <Fragment>
    <div className='note'>
        <h1>Title</h1><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, debitis voluptate similique hic vel voluptatum praesentium quae odio impedit harum quibusdam eum dignissimos ab dolorum eligendi magni adipisci iure reprehenderit? </p>
        <button>Delete</button>
    </div>
   </Fragment>
  );
}

export default Note;
