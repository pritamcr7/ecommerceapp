import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ name, id, price, available, imgsrc, vendor, category }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          <p className="product_title">
            {id} - {name}
          </p>
          <p className="product_price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <p className="product_vendor">{vendor}</p>
          {available > 0 ? (
            <div className="product_available">
              <p>Total Available Products - {available}</p>
            </div>
          ) : (
            <div className="product_notavailable">Out Of Stock</div>
          )}
        </Card.Text>
        {available === 0 ? (
          <Button variant="primary" disabled>
            Purchase
          </Button>
        ) : (
          <Button variant="primary">Purchase</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
