import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import ChefRecomendation from "./ChefRecomendation";
// import OrderOnline from "./OrderOnline";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <ChefRecomendation></ChefRecomendation>
    </div>
  );
};

export default Home;
