import { Helmet } from "react-helmet-async";
import PageCover from "../../components/Shared/PageCover";
import banner from "../../assets/shop/banner2.jpg";
const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      <PageCover img={banner} title={"OUR SHOP"} desc={"Would you like to try a dish?"}></PageCover>
    </div>
  );
};

export default Shop;
