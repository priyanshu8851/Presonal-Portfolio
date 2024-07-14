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
            <form action="https://getform.io/f/bwngqmza" method='POST'>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <input type="email" placeholder='Enter Your Email' name='email' />
                <textarea type="text" placeholder='Enter your message' class="message" name='message' />
                <button type='submit'>Send Message</button>
            </form>
        </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
