import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderCard from "./OrderCard";

const OrderTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  //   console.log(menu);
  const soup = menu?.filter((data) => data.category === "soup");
  const dessert = menu?.filter((data) => data.category === "dessert");
  const pizza = menu?.filter((data) => data.category === "pizza");
  const salad = menu?.filter((data) => data.category === "salad");
  const drinks = menu?.filter((data) => data.category === "drinks");
  return (
    <div className="max-w-screen-xl mx-auto">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <OrderCard items={salad}></OrderCard>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderCard items={pizza}></OrderCard>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderCard items={soup}></OrderCard>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderCard items={dessert}></OrderCard>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderCard items={drinks}></OrderCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderTab;
