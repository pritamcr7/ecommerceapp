import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ name, id, price, available, imgsrc, vendor, category }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card
      className="box"
      style={{
        width: "25rem",
        display: "block",
      }}
    >
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
            <p>Total Available Products - {available}</p>
          ) : (
            <p className="product_notavailable">Out Of Stock</p>
          )}
        </Card.Text>
        {available === 0 ? (
          <Button variant="primary" disabled>
            Purchase
          </Button>
        ) : (
          <>
            <Button variant="primary" onClick={handleShow}>
              Purchase
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Do You want to Buy {name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Vendor - {vendor}</p>
                <p>Price - ₹{price}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
