import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row mt-5 text-center">
        <h1>Charges</h1>
        <h5 className="text-muted mt-3">List of all charges and taxes</h5>
      </div>

      <div className="row mt-5 text-center mb-5 border-bottom">
        {/* Column 1 */}
        <div className="col-md-4 mb-4">
          <img
            src="media/images/pricing0.svg"
            alt="Free equity delivery"
            style={{ width: "60%" }}
          />
          <h1 className="fs-5 mt-3">Free equity delivery</h1>
          <h5
            className="fs-6 text-muted mt-4"
            style={{ textAlign: "center", lineHeight: "1.8" }}
          >
            All equity delivery investments (NSE, BSE),
            <br />
            are absolutely free — ₹0 brokerage.
          </h5>
        </div>

        {/* Column 2 */}
        <div className="col-md-4 mb-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday and F&O trades"
            style={{ width: "60%" }}
          />
          <h1 className="fs-5 mt-3">Intraday and F&O trades</h1>
          <h5
            className="fs-6 text-muted mt-4"
            style={{ textAlign: "center", lineHeight: "1.8" }}
          >
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity. <br />
            Flat ₹20 on all option trades.
          </h5>
        </div>

        {/* Column 3 */}
        <div className="col-md-4 mb-4">
          <img
            src="media/images/pricingMF.svg"
            alt="Mutual fund investments"
            style={{ width: "60%" }}
          />
          <h1 className="fs-5 mt-3">Direct mutual funds</h1>
          <h5
            className="fs-6 text-muted mt-4"
            style={{ textAlign: "center", lineHeight: "1.8" }}
          >
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </h5>{" "}
          mb-5 border-bottom
        </div>
      </div>
    </div>
  );
}

export default Hero;
