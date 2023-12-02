import React from 'react'
import './Style/Contact.css'

const Contact = () => {
  return (
    <>

<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Us</title>
  <link rel="stylesheet" href="styles.css" />
  <div className="contact-form">
    <h1>Contact Us</h1>
    <form action="submit_form.php" method="post">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required="" />
      <label htmlFor="contact">Contact Number:</label>
      <input type="text" id="contact" name="contact" required="" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required="" />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required=""
        defaultValue={""}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</>

    
  </>
  
  
  )
}

export default Contact