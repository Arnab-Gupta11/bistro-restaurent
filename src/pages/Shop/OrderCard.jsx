/* eslint-disable react/prop-types */
import ItemCard from "../../components/ItemCard";

const OrderCard = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {items?.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
