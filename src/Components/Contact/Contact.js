import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <div className='Contact'>
            <div className="ContactImage">
                <img src="https://o.remove.bg/downloads/98cafb56-6f6f-483b-80db-bf1377889038/9307.png_300-removebg-preview.png" alt="" />
            </div>
            <div className="ContactForm">
                <h1>CONTACT US NOW </h1>
                <p className='question_query'>Ask a question</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus perferendis cupiditate similique excepturi laborum assumenda.</p>
                <form action="" className='FormControl'>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='EmailID' /><br />
                    <textarea name="message" cols="40" rows="10"></textarea>
                    <br />
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact