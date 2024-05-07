import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import StarRating from "./StarRating";


const Products = (products) => {
  const { addToCart } = useContext(CartContext);
  const items = products.products;
  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    addToCart(item);
    navigate("/cart");
  };

  return (
    <div>
      <header className="bg-dark text-white">
        <div className="container">
          <div className="header-content ">
            <h1>Product</h1>
          <Link to={"Cart"}><button className="btn-cart"> Cart</button></Link>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
            {items.map((item, index) => (
          <div className="col-md-6 mx-auto  p-5 rounded">
              <div
                className="product-box row   p-3  rounded"
                key={index}
              >
                <div className="col-md-4 d-flex justify-content-center">
                  <img
                    className="img-thumbnail"
                    src={item.thumbnail}
                    alt=""
                  />
                </div>
                <div className="col-md-8">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <StarRating
                   rating={item.rating} /> {/* Star Rating Component */}
                  <h6>₹{item.price}</h6>
                  <button
                    onClick={() => handleBuyNow(item)}
                    className="btn btn-info text-white"
                  >
                    Buy Now
                  </button>
                </div>
           
              </div>
          </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
