import { useContext } from "react";
import { CartContext } from "../src/context/CartContext";
import Banner from "./Banner";
import { Link } from "react-router-dom";
export default function Cart() {
  const { cart } = useContext(CartContext);
  if (!cart || cart.length === 0) {
    return (
      <>
        <Banner title="Cart"></Banner>
        <div className="container text-center mt-100">
          <h2>Your Cart is Empty </h2>
          <p>Add some delicious items!</p>
        </div>
      </>
    );
  }
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
   const totalQuantity = cart.reduce((acc, item) => {
    return acc +item.quantity;
  }, 0);

  return (
    <>
      <Banner title="Cart"></Banner>
      <div className="container vv mt-100">
        <div className="row justify-content-around">
          <div className="col-lg-5">
          {cart.map((item) => (
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-3" key={item.id}>
              <div className="card food-card shadow-sm p-2 d-flex flex-row justify-content-around align-items-center">
                <div className="col-lg-5">
                  <img src={item.image} className="cartimg"></img>
                </div>
                <div className="col-lg-4">
                  <h3 className="h33">{item.name}</h3>
                  <p className="mb-1">
                    <strong>Price:</strong> {item.price}
                  </p>
                  <p className="mb-1">
                    <strong>Quantity:</strong> {item.quantity}
                  </p>
                  <p className="">
                    <strong>Total:</strong>
                    {item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
            </div>
          ))}
      </div>
      <div className="col-lg-5">
        <div className="card food-card card-bg shadow-sm p-2 d-flex flex-row justify-content-around align-items-center text-center">
                <div className="col-lg-4">
                  <h3 className="h33">Checkout</h3>
                  <h4 className="mt-20">
                    <strong>Quantity:</strong>{totalQuantity}
                  </h4>
                  <h4 className="mt-20">
                    <strong>Total Price:</strong>{totalPrice}
                  </h4>
                <Link to="/Checkout" state={totalPrice}><button className="btn btnn mt-20">Pay Now</button></Link>
                </div>
              </div>
      </div>
      </div>
      </div>
    </>
  );
}
