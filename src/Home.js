import React, { useState } from "react";

import "./Home.css";
import Product from "./Product";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "./Filter";

const Home = () => {
  const products = [
    {
      name: "Potato",
      id: 1,
      price: 30,
      available: 1,
      imgsrc:
        "https://english.mathrubhumi.com/polopoly_fs/1.2329655.1577412275!/image/image.jpg_gen/derivatives/landscape_894_577/image.jpg",
      vendor: "Himachal Pvt Ltd",
      category: "Vegetables",
    },
    {
      name: "Banana",
      id: 2,
      price: 50,
      available: 1,
      imgsrc:
        "https://www.mashed.com/img/gallery/heres-what-happens-when-you-eat-a-banana-every-day/intro-1596497583.jpg",
      category: "Fruits",
      vendor: "Organic farms",
    },
    {
      name: "Drumsticks",
      id: 3,
      price: 20,
      available: 0,
      imgsrc:
        "https://5.imimg.com/data5/EQ/LA/JW/SELLER-52718678/green-drumstick-500x500.jpg",
      category: "Vegetables",
      vendor: "Mallikarjuna farms",
    },
    {
      name: "Orange",
      id: 4,
      price: 25,
      available: 1,
      imgsrc:
        "https://5.imimg.com/data5/PA/YX/MY-3177291/fresh-orange-form-tripura-500x500.jpg",
      vendor: "Nagpur farms",
      category: "Fruits",
    },
  ];

  let uniqueCategories = new Set();
  products.map((item) => uniqueCategories.add(item.category));
  uniqueCategories = [...uniqueCategories];
  uniqueCategories.push("Display All items");
  const [selectedNumber, setSelectedNumber] = useState(undefined);

  return (
    <div className="home">
      <img
        className="home_image"
        alt="homepage"
        src="https://agentestudio.com/uploads/post/image/132/main_reasons_to_redesign_a_website.png"
      />

      <Filter
        filteredItem={(item) => setSelectedNumber(item)}
        uniqueCategories={uniqueCategories}
      />
      <div className="home_row">
        {products.map((item) => {
          return selectedNumber !== undefined &&
            selectedNumber !== "Display All items" ? (
            selectedNumber === item.category && (
              <Container fluid="md" className="p-0">
                <Row style={{ padding: "6rem", width: "50px" }}>
                  <Col style={{ width: "25%" }}>
                    <Product key={item.name} {...item} />
                  </Col>
                </Row>
              </Container>
            )
          ) : (
            <Container fluid="md" className="p-0">
              <Row style={{ padding: "5px" }}>
                <Col
                  className="grid"
                  style={{ display: "flex", float: "left" }}
                >
                  <Product {...item} />
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
