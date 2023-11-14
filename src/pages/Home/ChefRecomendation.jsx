import item1 from "../../assets/home/slide1.jpg";
import SectionTitle from "../../components/Shared/SectionTitle";
import ChefRecomendCard from "./ChefRecomendCard";

const ChefRecomendation = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"---Should Try---"}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ChefRecomendCard image={item1} name={"Caeser Salad"} recipe={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}></ChefRecomendCard>
          <ChefRecomendCard image={item1} name={"Caeser Salad"} recipe={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}></ChefRecomendCard>
          <ChefRecomendCard image={item1} name={"Caeser Salad"} recipe={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}></ChefRecomendCard>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomendation;
