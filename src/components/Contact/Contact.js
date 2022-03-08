import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      `${process.env.REACT_APP_SERVICE_ID}`,
      `${process.env.REACT_APP_SERVICE_TEMPLATE_ID}`,
      form.current,
      `${process.env.REACT_APP_SERVICE_USER_ID}`
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  }

  return (
    <section id="contact">
      <h2>Contactez-moi</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h5>Email</h5>
            <a href="mailto:didoune.walid@gmail.com" rel='noreferrer' target='_blank'>Envoyer un message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h5>Linkedin</h5>
            <a href='https://www.linkedin.com/in/walid-didoune/' rel='noreferrer' target='_blank'>Walid Didoune</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom complet' required />
          <input type="email" name='email' placeholder='Votre email' required />
          <textarea name='message' placeholder='Votre message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact