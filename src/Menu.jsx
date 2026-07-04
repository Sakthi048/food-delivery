import React, { useEffect, useState, useContext } from "react";
import Banner from "./Banner";
import { CartContext } from "../src/context/CartContext.jsx";

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [menu, setMenu] = useState([]);

  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => {
  setCategories(data.categories);

  const localProducts =
    JSON.parse(localStorage.getItem("products")) || [];

  setMenu([
    ...data.products,
    ...localProducts
  ]);
});
  }, []);

  return (
    <>
      <Banner title="Menu" />

      <div className="container mt-100">
        {categories.map((category) => (
          <div key={category.id} className="mb-5 row d-flex justify-content-center heading-box">
            <h2 className="mb-4 h11 mt-100 col-3">
              {category.name}
            </h2>

            <div className="row g-4">
              {menu
                .filter((item) => item.category === category.value)
                .map((item) => {
                  const cartItem = cart.find((c) => c.id === item.id);

                  return (
                    <div
                      className="col-lg-3 col-md-4 col-sm-6"
                      key={item.id}
                    >
                      <div className="food-card h-100">
                        <img
                          src={item.image}
                          className="food-img"
                          alt={item.name}
                        />

                        <div className="p-3 dd">
                          <h5>{item.name}</h5>

                          <p className="food-desc">
                            {item.description}
                          </p>

                          <h4 className="price">
                            {item.price}
                          </h4>

                          <button
                            className="btn btnn w-100"
                            onClick={() => addToCart(item)}
                          >
                            {cartItem
                              ? `Added (${cartItem.quantity})`
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}