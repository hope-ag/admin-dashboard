import React from "react";
import { BiSupport } from "react-icons/bi";

function Info() {
  return (
    <div className="info-section info">
      <div className="shadow acct-info">
        <h3>Information about your account</h3>
        <p className="small">Account id</p>
        <h4>137-705-807</h4>
        <p className="small">E-mail</p>
        <h4>example@123.com</h4>
      </div>
      {/* Support 
      Section
      */}
      <div className="shadow column support">
        <div className="image flex">
          <BiSupport />
        </div>
        <h2>Support</h2>
        <p>We are online</p>
        <button>Live chat</button>
      </div>
      {/* English Section */}
      <div className="shadow column contact-english">
        <div className="flex">
          <img src="/img/language/en.png" alt="english language" />
          <h2>English</h2>
        </div>
        <p>Phones</p>
        <h3>+44 20 3868 3160</h3>
        <p>E-mail</p>
        <h3>help@expertoption.com</h3>
        <p>24 hours a day, 7 days a week</p>
      </div>
      <div className="shadow contact-hindi">
        <div className="flex">
          <img src="/img/language/hi.png" alt="english language" />
          <h2>Hindi</h2>
        </div>
        <p>Phones</p>
        <h3>000 800 443 0002</h3>
        <p>E-mail</p>
        <h3>help@expertoption.com</h3>
        <h3>help@expertoption.com</h3>
        <p>10:30 – 19:30 (India time)</p>
      </div>
      {/* Inquiry Section begins here */}
      <div className="shadow column question-input">
        <h3>Any questions?</h3>
        <form className=" column">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="shadow input" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" className="shadow input" />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            className="shadow input"
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="contact"
            name="phone"
            id="phone"
            className="shadow input"
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Info;
