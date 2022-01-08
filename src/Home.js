import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  const products = [
    {
      name: "Potato",
      id: 1,
      price: 30,
      available: 1,
      vendor: "Himachal Pvt Ltd",
      category: "Vegtables",
    },
    {
      name: "Banana",
      id: 2,
      price: 50,
      available: 1,
      category: "Fruits",
      vendor: "Organic farms",
    },
    {
      name: "Drumsticks",
      id: 3,
      price: 20,
      available: 0,
      category: "Vegetables",
      vendor: "Mallikarjuna farms",
    },
    {
      name: "Orange",
      id: 4,
      price: 25,
      available: 1,
      vendor: "Nagpur farms",
      category: "Fruits",
    },
  ];
  return (
    <div className="home">
      <img
        className="home_image"
        alt="homepage"
        src="https://agentestudio.com/uploads/post/image/132/main_reasons_to_redesign_a_website.png"
      />
      <div className="home_row">
        {products.map((item) => {
          return <Product {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
