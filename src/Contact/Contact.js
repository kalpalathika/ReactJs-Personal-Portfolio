import React, { useRef } from "react";
import "./contact.css";
import { IoIosSend } from "react-icons/io";
import Fade from "react-reveal/Fade";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // For now, create a mailto link to kr9699@rit.edu
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const jobType = formData.get('job_type');
    const message = formData.get('message');

    const subject = `Contact Form Submission - ${jobType} Position`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AJob Type: ${jobType}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.open(`mailto:kr9699@rit.edu?subject=${encodeURIComponent(subject)}&body=${body}`, '_self');
    
    // Clear form after sending
    e.target.reset();
  };

  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade bottom disabled>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="image-class">
              <img src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            </div>
          </div>
        </Fade>

        <Fade right disabled>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Form</h5>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="contact-form">
                  <label className="form-lebel">Name</label>
                  <input type="text" name="user_name" className="form-control" required />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">E-mail</label>
                  <input type="email" name="user_email" className="form-control" required />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Job Types</label>
                  <select name="job_type" className="custom-select">
                    <option>Full-time</option>
                    <option>Contract</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Your Message</label>
                  <textarea
                    name="message"
                    maxLength="500"
                    className="form-control"
                    rows="4"
                    required
                  />
                </div>

                <div className="button-submit">
                  <button type="submit" className="send-button">
                    Send <IoIosSend size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
