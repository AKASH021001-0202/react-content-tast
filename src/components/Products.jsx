import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Products = (products) => {
  const { addToCart } = useContext(CartContext);
  const items = products.products;
  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    // alert("Click")
    addToCart(item);
    // Redirect to /cart page
    navigate("/cart");
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto  p-5 rounded">
            {items.map((item, index) => (
              <div
                className="product-box row my-3  p-3 bg-light rounded"
                key={index}
              >
                <div className="col-md-3 d-flex justify-content-center">
                  <img className="img-thumbnail" src={item.thumbnail} alt="" />
                </div>
                <div className="col-md-9">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <h5>{item.rating}/5</h5>
                  <h6>₹{item.price}</h6>
                  <button
                    onClick={() => handleBuyNow(item)}
                    className="btn btn-info text-white"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
