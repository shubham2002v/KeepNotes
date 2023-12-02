import React from 'react'

const About = () => {
  return (
    <>
    <header>
      <h1>About Me</h1>
    </header>
    <div className="container">
      <img src="data:image/jpeg;base64,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" alt="Your Name" className="profile-img" />
      <h2>Your Name</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis
        a nisl varius lacinia ac non ex. Nulla facilisi.
      </p>
    </div>
  </>
  
  )
}

export default About