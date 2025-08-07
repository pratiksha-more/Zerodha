import React from "react";

function Pricing() {
  return (
    <div className="container mb-10 mt-10">
      <div className="row mb-5">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p>
            Ne pioneered the concept of discount broking and price Eransparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href=" " className="text-primary text-decoration-none mx-5">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-2 border">
              <h1>₹0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>

            <div className="col p-2 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
