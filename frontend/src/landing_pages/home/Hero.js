import React from "react";

// Hero.js
export function Hero() {
  return (
    <div className="container">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Images"
          className="mb-5"
        />

        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up for Free
        </button>
      </div>
    </div>
  );
}
