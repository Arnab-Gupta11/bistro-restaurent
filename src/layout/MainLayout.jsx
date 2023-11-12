import Navbar from "../components/Shared/Navbar";
import Sidebar from "../components/Shared/Sidebar";

/* eslint-disable react/prop-types */
const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Navbar></Navbar>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
