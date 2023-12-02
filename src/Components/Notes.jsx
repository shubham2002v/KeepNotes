import React, { useState } from 'react'
import './Notes.css'

const Notes = () => {
  const [note,setNote]=useState({
    title:'',
    content:''
  })
  const InputEvent=(event)=>{
     const {name,value}=event.target;
     setNote((prevalue)=>{
        return {
          ...prevalue,
          [name]:value,
        } 
     })
  }
  console.log(note)
  return (
<>
 <div className='main_notes'>
    <form>
        <input 
        type='text' 
        placeholder='Title' 
        autoComplete='off ' 
        value={note.title} 
        name='title' onChange={InputEvent}/>
        <textarea 
        rows="" 
        column="" 
        placeholder='Write a note' 
        value={note.content} 
        name='content' 
        onChange={InputEvent}></textarea>

        <button>Add Notes</button>
    </form>
 </div>
</>
  )
}

export default Notes