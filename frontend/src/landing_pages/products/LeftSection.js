import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className=" container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>

        <div className="col-6 mt-5">
          <h1 className="fs-4">{productName}</h1>
          <p>{productDescription}</p>

          <div className="mb-2">
            <a href={tryDemo} className="text-decoration-none">
              TryDemo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              className="text-decoration-none"
              style={{ marginLeft: "40px" }}
            >
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div>
            <a href={googlePlay}>
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="media\images\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
