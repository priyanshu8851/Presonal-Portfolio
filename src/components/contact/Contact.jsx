import React from 'react'
import "./contact.css"
const Contact = () => {
    const contact_head="<Contact/>";
  return (
    <>
      <div className="contact main" id="contactsec">
        <div className="container">
        <div className="heading">
            <h2>{contact_head}</h2>
            <span></span>
        </div>
        <div className="contact_form">
            <form action="">
                <input type="text" placeholder='Enter Your Name' />
                <input type="email" placeholder='Enter Your Email'  />
                <input type="text" placeholder='Enter your message' class="message" />
            </form>
        </div>
        </div>
      </div>
    </>
  )
}

export default Contact
