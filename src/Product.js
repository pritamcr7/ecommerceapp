import React from "react";

const Product = ({ name, id, price, available, vendor, category }) => {
  return (
    <div className="product">
      <div className="product_category">{category}</div>
      <div className="product-info">
        <p>
          {id} - {name}
        </p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        {available > 0 ? (
          <div className="product_available">
            <p>Total Available Products - {available}</p>
          </div>
        ) : (
          <div className="product_notavailable">Not Available</div>
        )}
      </div>
    </div>
  );
};

export default Product;
