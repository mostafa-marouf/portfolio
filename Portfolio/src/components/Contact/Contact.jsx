import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


export default function Contact() {

  const notify = () => toast.success('Message successfully sent.');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q4n1eqb', 'template_xeru05r', e.target, {
        publicKey: 'nS4OCy0PfQOZ_umah',
      })
      .then(
        () => {
          notify()
          e.target.reset()
          console.log('SUCSESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };
  return <>
    <section className=' contact container section' id='contact'>
      <h2 className="section__title">Get In Touch</h2>
      <div className='contact__container grid'>
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>
        <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                name="name"
                type="text"
                className="contact__form-input"
                placeholder='insert your name'
              />
            </div>

            <div className="contact__form-div">
              <input
                name="email"
                type="email"
                className="contact__form-input"
                placeholder='insert your email'
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              name='subject'
              type="text"
              className="contact__form-input"
              placeholder='insert your supject'
            />
          </div>
          <div className="contact__form-div Contact__form-area">
            <textarea
              name="message"
              className='contact__form-input'
              id=""
              cols="30"
              rows="10"
              placeholder='write your message'
            ></textarea>
          </div>
          <button type='submit'  className='btn'>Send Message</button>
          <Toaster />
        </form>
      </div>
    </section>
  </>
}
