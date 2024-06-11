import React from "react";
import "./aboutUs.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const AboutUs = () => {
  return (
    <div className="Page">
      <Navbar />
      <div className="MainContainer">
        <header className="Header">
          <h1>About Us</h1>
        </header>
        <div className="Content">
          <div className="About">
            <h2>Who We Are</h2>
            <p>
              At Appointify, we are dedicated to providing a seamless and efficient platform for managing appointments between professionals and clients. Our mission is to simplify the
              process of booking appointments and enhance the overall experience for both parties.
            </p>
          </div>
          <div className="Guidelines">
            <h2>Guidelines</h2>
            <ul>
              <li>In the "Home" section, users can view appointments they've booked and those they've been booked for, as well as appointment history.</li>
              <li>In the "Professionals" section, users can access categories of professionals, view their profiles, and book appointments.</li>
              <li>In the "Profile" section, users can view their profile details and log out.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
