import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import HomePage from "./pages/home/home";
import ProfessionalPage from "./pages/professional/professional";
import UserPage from "./pages/user/user";
import AppointmentPage from "./pages/user/user";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/user" element={<UserPage />} />
				<Route path="/appointments" element={<AppointmentPage />} />
				<Route path="/professionals" element={<ProfessionalPage />} />
			</Routes>
		</div>
	);
}
export default App;
