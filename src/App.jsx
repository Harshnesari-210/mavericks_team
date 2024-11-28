import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import DashboardLayout from "./components/DashboardLayout";
import LabReport from "./components/LabReport";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthPage isSignup={false} />} />
      <Route path="/signup" element={<AuthPage isSignup={true} />} />
      <Route path="/doctor" element={<DashboardLayout userType={"doctor"} />} />
      <Route
        path="/patient"
        element={<DashboardLayout userType={"patient"} />}
      />
      <Route path="/patient" element={<DashboardLayout userType={"patient"} />}>
        <Route path="/patient/labreports" element={<LabReport />} />
      </Route>
    </Routes>
  );
}

export default App;
