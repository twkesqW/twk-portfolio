import React from 'react'
import "./contactStyles.css"
const ContactPage = () => {
  return (
    <div className='contact_page'>
        <div className='mask'></div>
        <div className='cont_content'>
          <h1>Interested in me?</h1>
          <h2>Contact me!</h2>
            <div className="input_name_sur">
                <div className="input_name">
                    <h4 className="input_text">Name and Surname</h4>
                    <input className='input_style'type="text" placeholder='Max Zavodniuk....'/>
                </div>
                
            </div>

            <div className="input_email">
              <h4 className="input_text">Email</h4>
              <input className='input_style' type="text" placeholder='abc@gmail.com'/>
            </div>

            <div className="input_message">
                <textarea className='textarea_style' rows={7}  cols={30} type="text" placeholder='Message....'/>
            </div>

            <button className='send_btn'>Send Me</button>
        </div>
    </div>
  )
}

export default ContactPage