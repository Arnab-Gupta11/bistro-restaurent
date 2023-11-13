import OrderOnline from "./Home/OrderOnline";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact</title>
      </Helmet>
      <h2>Contact</h2>
      <OrderOnline></OrderOnline>
    </div>
  );
};

export default Contact;
