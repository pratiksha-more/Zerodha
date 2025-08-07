import React from "react";

function Education() {
  return (
    <div className="container mt-10 my-5">
      <div className="row mt-5">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="education Images"
            className="mb-5"
            style={{ width: "90%" }}
          />
        </div>

        <div className="col-6 mt-5">
          <h1 className="mb-3 fs-2">Free and Market Education</h1>
          <p>
            Ne pioneered the concept of discount broking and price Eransparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href=" " className="text-primary text-decoration-none mx-5">
            Versity<i className="fa-solid fa-arrow-right"></i>
          </a>

          <p>
            Ne pioneered the concept of discount broking and price Eransparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href=" " className="text-primary text-decoration-none mx-5">
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
