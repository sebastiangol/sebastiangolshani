import Styles from '../styles/Contact.module.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const [success, showSuccess] = useState(false);
  const [submitButton, showSubmitButton] = useState(true);

  const sendEmail = e => {
    emailjs
      .sendForm(
        'service_fvn7u3q',
        'template_9izj1bp',
        '#contactForm',
        'user_xWW71JKEjRlPMcv5hNL7k'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    showSubmitButton(false);
    showSuccess(true);
  };

  return (
    <div className={Styles.contact}>
      <h1>Contact Me</h1>
      <div className={Styles.contact__body}>
        <div className={Styles.contact__email}>
          <MailOutlineIcon className={Styles.contact__emailIcon} />
          <h3>sebastiangolshani@yahoo.co.uk</h3>
        </div>
        <div className={Styles.contact__or}>
          <h2>OR</h2>
        </div>
        <form
          className={Styles.contact__form}
          id="contactForm"
          onSubmit={handleSubmit(sendEmail)}
        >
          <input
            className={Styles.contact__formEmail}
            placeholder="Your email"
            type="text"
            name="email"
            {...register('email', {
              required: { value: 'true', message: 'Email is required!' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'This is not a valid email address!'
              }
            })}
          />
          <p className={Styles.contact__formError}>{errors?.email?.message}</p>
          <input
            className={Styles.contact__formName}
            placeholder="Your name"
            type="text"
            name="name"
            {...register('name', {
              required: { value: 'true', message: 'Name is required!' },
              maxLength: {
                value: 60,
                message: "Surely your name isn't that long, right?"
              }
            })}
          />
          <p className={Styles.contact__formError}>{errors?.name?.message}</p>
          <textarea
            className={Styles.contact__formMessage}
            placeholder="Message"
            type="text"
            name="message"
            {...register('message', {
              required: { value: 'true', message: 'Message is required!' },
              minLength: { value: 10, message: 'Your message is too short!' }
            })}
          />
          <p className={Styles.contact__formError}>
            {errors?.message?.message}
          </p>
          {submitButton ? (
            <button className={Styles.contact__formButton} type="submit">
              Send Message
            </button>
          ) : null}
          {success ? (
            <p className={Styles.contact__formSuccess}>
              Your message has been sent! I will get back to you soon.
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default Contact;
