import React, { useState } from "react";

export default function Adminlogged() {
  const [data, setData] = useState({
    name: "",
    id: "",
    price: "",
    desc: "",
    cat: "",
    img: "",
  });
  const [err, setErr] = useState({
    name: false,
    id: false,
    price: false,
    desc: false,
    cat: false,
    img: false,
  });
  function getImage(e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setData((prev) => ({
        ...prev,
        img: reader.result,
      }));
    };
    console.log(data.img);
    reader.readAsDataURL(file);
  }
  function getinput(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  console.log(data);
  function check(e) {
    const error = {
      name: false,
      id: false,
      price: false,
      desc: false,
      cat: false,
      img: false,
    };
    if (!data.name.trim()) error.name = true;
    if (!data.id.trim()) error.id = true;
    if (!data.price.trim()) error.price = true;
    if (!data.desc.trim()) error.desc = true;
    if (!data.cat.trim()) error.cat = true;
    if (!data.img) error.img = true;
    setErr(error);

    if (
      error.name ||
      error.id ||
      error.price ||
      error.desc ||
      error.cat ||
      error.img
    ) {
      return;
    }
    const product = {
  id: Number(data.id),
  name: data.name,
  category: data.cat,
  price: Number(data.price),
  description: data.desc,
  image: data.img,
};

console.log(product);
const oldProducts =
  JSON.parse(localStorage.getItem("products")) || [];

oldProducts.push(product);

localStorage.setItem(
  "products",
  JSON.stringify(oldProducts)
);

alert("Product Added Successfully");
  }
  return (
    <>
      <div className="container mt-100">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card food-card">
              <div className="card-body">
                <h3 className="h33 text-center mb-30">ADD PRODUCT</h3>
                <div className="mt-3 row justify-content-center">
                  <label for="name" className="col-2">
                    Food name
                  </label>
                  :
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="col-6 ms-3"
                    onChange={getinput}
                    required
                  ></input>
                  {err.name && (
                    <p className="red-alert text-center">
                      * Enter the Product Name
                    </p>
                  )}
                </div>
                <div className="mt-3 row justify-content-center">
                  <label for="id" className="col-2">
                    id
                  </label>
                  :
                  <input
                    type="text"
                    id="id"
                    name="id"
                    className="col-6 ms-3"
                    onChange={getinput}
                  ></input>
                  {err.id && (
                    <p className="red-alert text-center">
                      * Enter the Product Id
                    </p>
                  )}
                </div>
                <div className="mt-3 row justify-content-center">
                  <label for="price" className="col-2">
                    price
                  </label>
                  :
                  <input
                    type="price"
                    id="price"
                    name="price"
                    className="col-6 ms-3"
                    onChange={getinput}
                  ></input>
                  {err.price && (
                    <p className="red-alert text-center">
                      * Enter the Product price
                    </p>
                  )}
                </div>
                <div className="mt-3 row justify-content-center">
                  <label for="desc" className="col-2">
                    Description
                  </label>
                  :
                  <input
                    type="text"
                    id="desc"
                    name="desc"
                    className="col-6 ms-3"
                    onChange={getinput}
                  ></input>
                  {err.desc && (
                    <p className="red-alert text-center">
                      * Enter the Product description
                    </p>
                  )}
                </div>
                <div className="mt-3 row justify-content-center">
                  <label for="cat" className="col-2">
                    Categories
                  </label>
                  :
                 <select name="cat" onChange={getinput} className="col-6 ms-3">
  <option value="">Select Category</option>
  <option value="tiffin">Tiffin</option>
  <option value="meals">Meals</option>
  <option value="snacks">Snacks</option>
  <option value="juice">Juices</option>
  <option value="biriyani">Biriyani</option>
  <option value="dessert">Desserts</option>
</select>
                  {err.cat && (
                    <p className="red-alert text-center">
                      * Enter the Product caategories
                    </p>
                  )}
                </div>
                <div className="mt-3 row justify-content-center">
                  <label for="img" className="col-2">
                    Image
                  </label>
                  :
                  <input
                    type="file"
                    id="img"
                    name="img"
                    className="col-6 ms-3"
                    onChange={getImage}
                  ></input>
                  {err.img && (
                    <p className="red-alert text-center">
                      * Select the Product image
                    </p>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btnn mt-4"
                    onClick={check}
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
