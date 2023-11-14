/* eslint-disable react/prop-types */

import Button1 from "../../components/button1";

const ChefRecomendCard = ({ image, name, recipe }) => {
  //   const { , price } = item;
  return (
    <div>
      <div>
        <div className="card  rounded-none">
          <figure>
            <img src={image} alt="Shoes" className="w-full h-80" />
          </figure>
          <div className="card-body items-center text-center bg-[#F3F3F3] space-y-3">
            <h2 className="card-name">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
              <Button1 name={"ADD TO CART"}></Button1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomendCard;
