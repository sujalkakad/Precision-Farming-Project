import React ,{ Component } from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div>      
        <div className='title'>
            <h1>Contact Us</h1>
        </div>

        <div className="Main">
            <form className='ContactForm'>
                <div>
                    <label>Name: </label>
                    <input for="name" type='text'/>
                </div>

                <div>
                    <label>Email:</label>
                    <input for="email" type="email"/>
                </div>

                <div>
                    <label>Phone:</label>
                    <input for="phone" type="number"/>
                </div>

                <div>
                    <label>Message:</label>
                    <input for="message" type="text"/>
                </div>

            </form>
        </div>

    </div>
  )
}

export default Contact
