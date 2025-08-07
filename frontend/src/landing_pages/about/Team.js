import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-3 text-center">People</h1>
      </div>

      <div
        className="row p-5 mt-5 mb-5 text-center text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <div className="col-6 p-5">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Photo"
            style={{ borderRadius: "100%", width: "50%", objectFit: "cover" }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-3 text-start">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" className="text-decoration-none mx-2">
              Homepage
            </a>{" "}
            /
            <a href="#" className="text-decoration-none mx-2">
              TradingQnA
            </a>{" "}
            /
            <a href="#" className="text-decoration-none mx-2">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
