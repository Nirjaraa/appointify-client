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
import CategoryPage from "./pages/category/category";
import ProfilePage from "./pages/profile/profile";
import SearchResultPage from "./pages/searchResult/searchResult";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/professionals" element={<ProfessionalPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-reset-otp" element={<VerifyResetOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verification" element={<VerifyEmail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/search-results" element={<SearchResultPage />} />
      </Routes>
    </div>
  );
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/search-results" element={<SearchResultPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/professionals" element={<ProfessionalPage />} />
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
