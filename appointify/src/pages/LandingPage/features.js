import pic1 from "../../images/img3.jpg";
import pic2 from "../../images/img4.jpg";
import pic3 from "../../images/img5.jpg";
import pic4 from "../../images/img9.jpg";

import "./FeaturesStyles.css";
import FeatureData from "./FeatureData";
const Features = () => {
  return (
    <div className="features">
      <h1>Our Features</h1>
      <p>Take control of your time, book effortlessly, and embrace a stress-free life.</p>
      <FeatureData
        className="first-fea"
        heading="Book anywhere"
        text="Clients can schedule, or cancel appointments with ease, whether you're at home or on the go. Experience seamless flexibility and stay in control of your time, anytime, anywhere.Appointify offers you the flexibility and freedom to manage your appointments effortlessly, keeping you in control of your time no matter where you are."
        img1={pic1}
        img2={pic4}
      />
      <FeatureData
        className="first-fea-reverse"
        heading="User Preferences"
        text="Users specify their preferred appointment time, duration, and provider (if any).
                        Some users may prioritize specific providers based on reputation or specialization.Encourage users to create profiles. This allows them to save preferences for future bookings"
        img1={pic3}
        img2={pic2}
      />
    </div>
  );
};
export default Features;
