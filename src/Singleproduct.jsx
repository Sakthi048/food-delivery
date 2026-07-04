import React from 'react'

export default function Singleproduct() {
  return (
     <div className="container py-5">
      <div className="row align-items-center g-5">

        <div className="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
            className="img-fluid rounded-4 shadow"
            alt="Pizza"
          />
        </div>

        <div className="col-lg-6">
          <span className="badge product-badge mb-3">
            Best Seller
          </span>

          <h2 className="fw-bold">Cheese Burst Pizza</h2>

          <div className="d-flex align-items-center mb-3">
            <span className="fw-semibold">4.8</span>
            <span className="text-muted ms-2">(245 Reviews)</span>
          </div>

          <h3 className="price mb-3">₹249</h3>

          <p className="text-secondary">
            Freshly baked pizza loaded with mozzarella cheese,
            vegetables and premium toppings.
          </p>

          <div className="d-flex align-items-center gap-3 my-4">

            <div className="qty-box">
              <button>
              </button>

              <span>1</span>

              <button>
              </button>
            </div>

            <button className="btn add-cart-btn">
              Add to Cart
            </button>

          </div>

          <div className="delivery-box mt-4">
             Delivery in 25-30 mins
          </div>

        </div>

      </div>
    </div>
  )
}
