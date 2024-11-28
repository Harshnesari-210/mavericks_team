import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

function DashboardLayout({ userType }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header userType={userType} />

      {/* Dynamic Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <Outlet />
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
}

DashboardLayout.propTypes = {
  userType: PropTypes.string.isRequired, // Changed to string since userType will be "doctor" or "patient"
};

export default DashboardLayout;
