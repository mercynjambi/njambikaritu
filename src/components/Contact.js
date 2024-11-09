import React from 'react';
import msg_icon from './assets/msg-icon.png';
import mail_icon from './assets/mail-icon.png';
import phone_icon from './assets/phone-icon.png';
import './Contact.css';
import location_icon from './assets/location-icon.png';
import white_arrow from './assets/white-arrow.png';

const Contacts = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "25ffcc3f-deb2-4a6b-a8d6-0ab77071c070");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <h2 className="contact-h2">Reach  <span>Out</span></h2> {/* Added h2 above all content */}
      
      <div className="contact"> {/* Main contact section */}
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="message-icon" />
          </h3>
          <p>
            Feel free to reach out through our contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service through
            our charity.
          </p>
          <ul>
            <li>
            <i class='bx bx-envelope'></i>
              njambim695@gmail.com
            </li>
            <li>
            <i class='bx bxs-phone-call'></i>
              (+254)792748289
            </li>
            <li>
            <i class='bx bx-location-plus'></i>
              Nairobi, Kenya
            </li>
          </ul>
        </div>

        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <br />
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <br />
            <label>Phone Number</label>
            <br />
            <input type="tel" name="phone" placeholder="Enter Your Phone Number" required />
            <br />
            <label>Write Your Message Here</label>
            <textarea name="message" rows="5" required placeholder="Enter Your Message Here"></textarea>
            <button type="submit" className="btn ">
              Submit now <img src={white_arrow} alt="arrow" />
            </button>           
            <span>{result}</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
