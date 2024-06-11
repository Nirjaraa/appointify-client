import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import HomePage from "./pages/home/home";
import ProfessionalPage from "./pages/professional/professional";
import UserPage from "./pages/user/user";
import AppointmentPage from "./pages/user/user";
import AboutUs from "./pages/aboutUs/aboutUs";
import LandingPage from "./pages/LandingPage/landingpage";
import ForgotPassword from "./pages/login/forgotpassword";
import VerifyEmail from "./pages/login/verification";
import ResetPassword from "./pages/login/resetpassword";
import VerifyResetOTP from "./pages/login/verifyotp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/professionals" element={<ProfessionalPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-reset-otp" element={<VerifyResetOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verification" element={<VerifyEmail />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
export default App;
