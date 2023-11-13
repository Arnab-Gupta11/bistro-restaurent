/* eslint-disable react/prop-types */
const MenuCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="flex items-center">
        <figure>
          <img style={{ borderRadius: "0px 200px 200px 200px" }} className=" w-[138px] h-[104px]" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between gap-7">
            <div>
              <h2 className="card-title text-[#151515] text-xl font-cinzel">{name} ------------------</h2>
              <p className=" text-[#737373] font-inter">{recipe}</p>
            </div>
            <h4 className=" text-xl font-inter text-goldenYelow">${price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
