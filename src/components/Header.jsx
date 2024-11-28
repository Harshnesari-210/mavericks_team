import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
function Header({ userType }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here (clear cookies, redirect to login, etc.)
    navigate("/login");
  };

  return (
    <>
      {userType === "patient" && (
        <header className="bg-blue-600 text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">Dashboard</div>

            {/* Navigation Links */}
            <nav className="flex gap-6">
              <Link to={`/${userType}`} className="hover:text-gray-300">
                Home
              </Link>
              <Link to={`/${userType}/profile`} className="hover:text-gray-300">
                Profile
              </Link>
              <Link
                to={`/${userType}/appointments`}
                className="hover:text-gray-300"
              >
                Appointments
              </Link>
              <Link
                to={`/${userType}/labreports`}
                className="hover:text-gray-300"
              >
                Lab Reports
              </Link>
              <Link to={`/${userType}/billing`} className="hover:text-gray-300">
                Billing
              </Link>
              <Link
                to={`/${userType}/treatmentanddiagnosis`}
                className="hover:text-gray-300"
              >
                Treatment & Diagnosis
              </Link>
              <Link
                to={`/${userType}/settings`}
                className="hover:text-gray-300"
              >
                Settings
              </Link>
            </nav>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </header>
      )}
      {userType === "doctor" && (
        <header className="bg-blue-600 text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">Dashboard</div>

            {/* Navigation Links */}
            <nav className="flex gap-6">
              <Link
                to={`/${userType}/dashboard`}
                className="hover:text-gray-300"
              >
                Home
              </Link>
              <Link to={`/${userType}/profile`} className="hover:text-gray-300">
                Profile
              </Link>
              <Link
                to={`/${userType}/appointments`}
                className="hover:text-gray-300"
              >
                Appointments
              </Link>
              {/* <Link to={`/${userType}-settings`} className="hover:text-gray-300">
              Settings
            </Link> */}
            </nav>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </header>
      )}
    </>
  );
}

Header.propTypes = {
  userType: PropTypes.bool.isRequired,
};

export default Header;
