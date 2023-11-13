/* eslint-disable react/prop-types */
import Button1 from "./button1";

const ItemCard = ({ img, title, description, btnTitle }) => {
  return (
    <div>
      <div>
        <div className="card  rounded-none">
          <figure>
            <img src={img} alt="Shoes" className="w-full h-80" />
          </figure>
          <div className="card-body items-center text-center bg-[#F3F3F3] space-y-3">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <Button1 name={btnTitle}></Button1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
