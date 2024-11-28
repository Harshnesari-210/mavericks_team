import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import DashboardLayout from "./components/DashboardLayout";
import LabReport from "./components/LabReport";
import Profile from "./components/Profile";
import Appointments from "./components/Appointments";
import Billing from "./components/Billing";
import Treatmentanddiagnosis from "./components/Treatmentanddiagnosis";
import Settings from "./components/Settings";
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
        <Route path="/patient/profile" element={<Profile />} />
        <Route path="/patient/appointments" element={<Appointments />} />
        <Route path="/patient/billing" element={<Billing />} />
        <Route
          path="/patient/treatmentanddiagnosis"
          element={<Treatmentanddiagnosis />}
        />
        <Route path="/patient/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
