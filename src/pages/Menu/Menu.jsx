import pageCover from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import SectionTitle from "../../components/Shared/SectionTitle";
import PageCover from "../../components/Shared/PageCover";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  const [menu] = useMenu();
  //   console.log(menu);
  const offered = menu?.filter((data) => data.category === "offered");
  const dessert = menu?.filter((data) => data.category === "dessert");
  const pizza = menu?.filter((data) => data.category === "pizza");
  const salad = menu?.filter((data) => data.category === "salad");
  const soup = menu?.filter((data) => data.category === "soup");
  console.log(offered);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <PageCover img={pageCover} title={"OUR MENU"} desc={"Would you like to try a dish?"}></PageCover>

      <div>
        <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
      </div>
      {/* order section */}
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        img={dessertBg}
        title="DESSERTS"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        items={dessert}
      ></MenuCategory>
      <MenuCategory
        img={dessertBg}
        title="soup"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        items={soup}
      ></MenuCategory>
      <MenuCategory
        img={dessertBg}
        title="pizza"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        items={pizza}
      ></MenuCategory>
      <MenuCategory
        img={dessertBg}
        title="salad"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        items={salad}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
