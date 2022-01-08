import React from "react";
import "./Home.css";
import Product from "./Product";
import { Container, Row, Col } from "react-bootstrap";

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
      category: "Vegtables",
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
  return (
    <div className="home">
      <img
        className="home_image"
        alt="homepage"
        src="https://agentestudio.com/uploads/post/image/132/main_reasons_to_redesign_a_website.png"
      />
      <div className="home_row">
        {products.map((item) => {
          return (
            <Container fluid="md" ClassName="p-0">
              <Row style={{ padding: "6rem 0" }}>
                <Col>
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
