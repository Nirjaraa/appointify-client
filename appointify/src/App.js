import "./index.css";
import { Route, Routes } from "react-router-dom";
import Log from "./pages/login/login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Log />} />
			</Routes>
		</div>
	);
}
export default App;
