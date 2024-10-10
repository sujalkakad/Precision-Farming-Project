import React ,{ Component } from 'react'
import "./Contact.css"

function Contact() {    


  return (
    <div className='contactsection'>      
        <div className='title'>
            <h1>Contact Us</h1>
        </div>

        <div className="Main">
            <form action='https://formspree.io/f/xkgnwekr' method="POST" className='ContactForm'>
                <div>
                    {/* <label>Name: </label> */}
                    <input type='text' placeholder="User Name" autoComplete='off' required/>
                </div>

                <div>
                    {/* <label>Email:</label> */}
                    <input name="email" type="email" placeholder="Email" autoComplete='off' required/>
                </div>

                <div>
                    {/* <label>Phone:</label> */}
                    <input name="phone" placeholder="Phone No." maxLength="10" pattern='[0-9]{10}' autoComplete='off' type="tel" required/>
                </div>

                <div>
                    {/* <label>Message:</label> */}
                    <textarea name="Message" placeholder='Message' cols="30" rows="5" autoComplete='off'/>
                </div>


                <input type='submit' value="send" className="btn btn-primary"/>

            </form>
        </div>

    </div>
  )
}

export default Contact
