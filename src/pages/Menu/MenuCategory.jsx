/* eslint-disable react/prop-types */
import MenuCard from "../../components/Shared/MenuCard";
import Button1 from "../../components/button1";
import SectionCover from "./SectionCover";

const MenuCategory = ({ img, title, desc, items }) => {
  return (
    <div className="">
      <div className="my-10">{title && <SectionCover img={img} title={title} desc={desc}></SectionCover>}</div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {items?.map((item) => (
            <MenuCard key={item._id} item={item}></MenuCard>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button1 name={"ORDER YOUR FAVOURITE FOOD"}></Button1>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
