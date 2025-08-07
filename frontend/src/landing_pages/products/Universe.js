import React from "react";

function Universe() {
  const imageStyle = {
    height: "60px",
    objectFit: "contain",
    marginBottom: "20px",
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">The Zerodha Universe</h1>
      <p className="text-center mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row">
        <div className="col-md-4 text-center p-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            style={imageStyle}
            className="img-fluid"
          />
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 text-center p-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={imageStyle}
            className="img-fluid"
          />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-md-4 text-center p-4">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={imageStyle}
            className="img-fluid"
          />
          <p>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 text-center p-4">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={imageStyle}
            className="img-fluid"
          />
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 text-center p-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={imageStyle}
            className="img-fluid"
          />
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 text-center p-4">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={imageStyle}
            className="img-fluid"
          />
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <div className="text-center mt-4 mb-5">
        <button className="btn btn-primary fs-5 px-4 py-2">
          Sign Up for Free
        </button>
      </div>
    </div>
  );
}

export default Universe;
