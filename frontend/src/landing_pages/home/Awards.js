import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media\images\largestBroker.svg"
            alt="largest Broker Images"
            className="mb-5"
          />
        </div>

        <div className="col-6 p-5 mt-3">
          <h1>Largest Stock broker in India</h1>
          <p>
            2+ million Zerodha clients constribute to over 15% all retail oredr
            volumes in india daily by trading and investing in:{" "}
          </p>
          <div className="row mt-4">
            <div className="col-6">
              <ul>
                <li>Future and Option</li>
                <li>Commodity Derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stock & IOS</li>
                <li>Direct mutual Funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img
            src="media\images\pressLogos.png"
            alt="Press Logo Images"
            className="mb-5"
            style={{ width: "80%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
