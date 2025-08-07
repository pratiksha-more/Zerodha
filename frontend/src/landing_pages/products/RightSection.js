import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6 mt-5">
          <h1 className="fs-4">{productName}</h1>
          <p>{productDescription}</p>

          <div className="mb-2">
            <a
              href={learnMore}
              className="text-decoration-none"
              style={{ marginLeft: "40px" }}
            >
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="col-6">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
