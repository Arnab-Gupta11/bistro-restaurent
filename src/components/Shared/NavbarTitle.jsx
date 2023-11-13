import logo from "../../assets/logo.png";
const NavbarTitle = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="" className="w-14" />
      <div className="flex flex-col font-cinze text-xl font-bold">
        <h2>BISTRO BOSS</h2>
        <h2>RESTAURENT</h2>
      </div>
    </div>
  );
};

export default NavbarTitle;
