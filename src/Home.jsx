import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shopnow from "./Shopnow";
export default function Home() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((dat) => setData(dat.categories));
  }, []);
  return (
    <>
      <div className="bgimg">
        <div className="container banner align-items-center">
          <div className="row ">
            <div className=" col-lg-12 content">
              <h5 className="text-light font-h6 text-center">Fast & Fresh Food Delivery</h5>

              <h1 className="text-light font-h1 text-center">
                Food Delivered to <br />
                Your Doorstep
              </h1>
              <div className="text-center">
              <Shopnow/>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-100">
        <div className="row justify-content-around">
          <h5 className="text-center h55">Explore Our Menu</h5>
          <h1 className="text-center h11">DELICIOUS DISHES FOR EVERY CRAVING</h1>
      {data.map((v) => (
            <div className="col-lg-4 col-md-5 col-sm-12 mt-5">
                <Link to={v.path} className="  linkkk">
              <div className="text-center">
                <img src={v.image} alt={v.key} className="img" />
                <h4 className="text-bold mt-2">{v.name}</h4>
              </div>
                </Link>
            </div>
          ))}
            </div>
            </div>
    </>
  );
}
