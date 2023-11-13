import { NavLink } from "react-router-dom";
import NavbarTitle from "./NavbarTitle";

const Navbar = () => {
  return (
    <div className="w-full  bg-opacity-60 fixed bg-black z-10 text-white">
      <div className=" max-w-screen-xl navbar  mx-auto flex justify-between items-center py-6">
        <div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <NavbarTitle></NavbarTitle>
          </div>
        </div>

        <div className="flex-none hidden lg:block">
          <ul className="flex gap-5 items-center">
            {/* Navbar menu content here */}
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}>
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}
            >
              Contact us
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/our-menu"
              className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}
            >
              Our menu
            </NavLink>
            <NavLink
              to="/our-shop"
              className={({ isActive }) => (isActive ? "text-yellow-300 uppercase font-bold" : "text-white uppercase font-bold")}
            >
              Our Shop
            </NavLink>
            <button className="text-white uppercase font-bold hover:bg-yellow-300 hover:px-4 hover:py-2 hover:rounded-md ">Sign Out</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
