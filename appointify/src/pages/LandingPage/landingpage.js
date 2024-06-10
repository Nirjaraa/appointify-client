import React from "react";
import Navbar from "../../components/navbar/navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./landingpage.css";
import appointmentImage from "../../images/schedule.jpg";
import beautyServiceImage from "../../images/beauty.jpg";
import medicalServiceImage from "../../images/medical.jpg";
import maintenanceServiceImage from "../../images/maintenance.jpg";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Faster autoplay speed
  };

  return (
    <div className="landing-page">
      <Navbar />
      <div className="landing-content">
        <div className="landing-left-container">
          <div className="landing-left">
            <h1>Appointment Booking</h1>
            <p>Book appointments easily and conveniently with Appointify. Simplify your scheduling process and manage appointments effortlessly.</p>
            <Link to="/login">
              <button>Login/Signup</button>
            </Link>
          </div>
        </div>
        <div className="landing-right-container">
          <div className="landing-right">
            <img src={appointmentImage} alt="Appointment" />
          </div>
        </div>
      </div>
      <div className="services">
        <h2>Our Services</h2>
        <Slider {...settings} className="service-slider">
          <div className="service">
            <img src={beautyServiceImage} alt="Beauty" />
            <h3>Beauty</h3>
            <p>Transform your look with our beauty services.</p>
          </div>
          <div className="service">
            <img src={medicalServiceImage} alt="Medical" />
            <h3>Medical</h3>
            <p>Get the medical attention you need, when you need it.</p>
          </div>
          <div className="service">
            <img src={maintenanceServiceImage} alt="Maintenance" />
            <h3>Maintenance</h3>
            <p>Keep your body and mind in top condition with our maintenance services.</p>
          </div>
        </Slider>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//       <Navbar />
//       <div className="landing-container">
//         <div className="landing-image" style={{ backgroundImage: `url(${image})` }} />
//         <div className="landing-content">
//           <h1>Appointment Booking</h1>
//           <p>Book appointments easily and conveniently with Appointify. Simplify your scheduling process and manage appointments effortlessly.</p>
//           <Link to="/login">
//             <button>Login/Signup</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
