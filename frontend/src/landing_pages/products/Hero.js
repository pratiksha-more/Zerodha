import React from "react";

function Hero() {
  return (
    <div className="container mb-5 border-bottom">
      <div className="row text-center mt-5 mb-5">
        <h1 className="fs-3 text-muted">Zerodha Products</h1>
        <h4 className="text-muted mt-2">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="text-muted mt-2 mb-5">
          Check out our{" "}
          <a href=" " className="text-primary text-decoration-none">
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
