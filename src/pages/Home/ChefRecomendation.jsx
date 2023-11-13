import SectionTitle from "../../components/Shared/SectionTitle";
import item1 from "../../assets/home/slide1.jpg";
import Button1 from "../../components/button1";
import ItemCard from "../../components/ItemCard";

const ChefRecomendation = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"---Should Try---"}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ItemCard
            img={item1}
            title={"Caeser Salad"}
            description={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
            btnTitle={"ADD TO CART"}
          ></ItemCard>
          <ItemCard
            img={item1}
            title={"Caeser Salad"}
            description={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
            btnTitle={"ADD TO CART"}
          ></ItemCard>
          <ItemCard
            img={item1}
            title={"Caeser Salad"}
            description={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
            btnTitle={"ADD TO CART"}
          ></ItemCard>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomendation;
