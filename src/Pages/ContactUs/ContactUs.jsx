import React from "react";
import Header from "../../Components/Header/Header";
import "./Contact.css";
import { assets } from "../../assets/assets";

const ContactUs = () => {
  return (
    <div>
      <Header
        bannerImage={assets.Contactbanner}
        heading="Get in Touch with Us"
        description="We are here to assist you with any inquiries or concerns. Reach out to us for reservations, support, or any information you need. Your comfort is our priority."
      />
      <div>
        <h1 className="Heading">Contact Us</h1>
      </div>
      <div>
        <div className="contact-page">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <strong>Address:</strong> Thamel Boutique Hotel, Bhagwati Marg,
              Thamel, 44600 Kathmandu, Nepal
            </p>
            <p>
              <strong>Phone:</strong> +94 771234567
            </p>
            <p>
              <strong>Email:</strong> APC@thamelboutiquehotels.com
            </p>
            <div className="map">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.18771109004!2d-122.41941508467817!3d37.7749292797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2d74c8f17d%3A0x5a029e405c660b25!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1637331927092!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
