import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  useEffect(() => { 
    emailjs.init("VH4LkWOEEUXHrAPFi");
  }, [])

  const sendEmail = async (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    try {
      const templateParams = {
        email,
        name,
        subject,
        message
      };
            
      const response = await emailjs.send("service_i7dg5qb", "template_2fuuqpj", templateParams, "VH4LkWOEEUXHrAPFi");
      
      console.log('Email sent successfully:', response);
      alert('Email sent successfully!');
      e.target.reset();
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailError('Failed to send confirmation email: ' + error.message);
      return false;
    }
  };


  return (
    <div className="col-lg-6">
      <h2 className="fw-bold mb-4">Send Us a Message</h2>
      <form onSubmit={sendEmail}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Your Name
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email Address
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label for="subject" className="form-label">
            Subject
          </label>
          <input type="text" className="form-control" id="subject" required />
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary rounded-4">
          Send Message
        </button>
      </form>
    </div>
  );
}
