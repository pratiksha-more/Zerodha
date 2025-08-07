import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#f8f9fa23" }}>
      <div className="container border-top mt-5">
        <div className="row mb-5 mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="logo"
            />

            <p>
              © 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>

          <div className="col" style={{ textDecoration: "none" }}>
            <p>Account</p>

            <a href="/open-demat-account" className="footer-link">
              Open demat account
            </a>
            <br />
            <a href="/minor-demat-account" className="footer-link">
              Minor demat account
            </a>
            <br />
            <a href="/nri-demat-account" className="footer-link">
              NRI demat account
            </a>
            <br />
            <a href="/commodity" className="footer-link">
              Commodity
            </a>
            <br />
            <a href="/dematerialisation" className="footer-link">
              Dematerialisation
            </a>
            <br />
            <a href="/fund-transfer" className="footer-link">
              Fund transfer
            </a>
            <br />
            <a href="/mtf" className="footer-link">
              MTF
            </a>
            <br />
            <a href="/referral-program" className="footer-link">
              Referral program
            </a>
          </div>

          <div className="col">
            <p>Support</p>

            <a href="/contact-us" className="footer-link">
              Contact us
            </a>
            <br />
            <a href="/support-portal" className="footer-link">
              Support portal
            </a>
            <br />
            <a href="/how-to-file-complaint" className="footer-link">
              How to file a complaint?
            </a>
            <br />
            <a href="/complaint-status" className="footer-link">
              Status of your complaints
            </a>
            <br />
            <a href="/bulletin" className="footer-link">
              Bulletin
            </a>
            <br />
            <a href="/circular" className="footer-link">
              Circular
            </a>
            <br />
            <a href="/z-connect-blog" className="footer-link">
              Z-Connect blog
            </a>
            <br />
            <a href="/downloads" className="footer-link">
              Downloads
            </a>
          </div>

          <div className="col">
            <p>Company</p>

            <a href="/about" className="footer-link">
              About
            </a>
            <br />
            <a href="/philosophy" className="footer-link">
              Philosophy
            </a>
            <br />
            <a href="/press-media" className="footer-link">
              Press & media
            </a>
            <br />
            <a href="/careers" className="footer-link">
              Careers
            </a>
            <br />
            <a href="/csr" className="footer-link">
              Zerodha Cares (CSR)
            </a>
            <br />
            <a href="/zerodha-tech" className="footer-link">
              Zerodha.tech
            </a>
            <br />
            <a href="/open-source" className="footer-link">
              Open source
            </a>
          </div>

          <div className="col">
            <p>Quick links</p>

            <a href="/upcoming-ipos" className="footer-link">
              Upcoming IPOs
            </a>
            <br />
            <a href="/brokerage-charges" className="footer-link">
              Brokerage charges
            </a>
            <br />
            <a href="/market-holidays" className="footer-link">
              Market holidays
            </a>
            <br />
            <a href="/economic-calendar" className="footer-link">
              Economic calendar
            </a>
            <br />
            <a href="/calculators" className="footer-link">
              Calculators
            </a>
            <br />
            <a href="/markets" className="footer-link">
              Markets
            </a>
            <br />
            <a href="/sectors" className="footer-link">
              Sectors
            </a>
          </div>
        </div>

        <div className="mt-5 text-muted " style={{ fontStyle: "14px" }}>
          {/* ...rest of your content... */}
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          {/* ...other paragraphs... */}
        </div>

        <div className="container flex-row">
          <a
            href="https://www.nseindia.com/"
            className="text-decoration-none text-muted mb-1 pe-3"
          >
            NSE
          </a>
          <a
            href="https://www.bseindia.com/"
            className="text-decoration-none text-muted mb-1 pe-3"
          >
            BSE
          </a>
          <a
            href="https://www.mcxindia.com/"
            className="text-decoration-none text-muted mb-1 pe-3"
          >
            MCX
          </a>
          <a
            href="/terms-and-conditions"
            className="text-decoration-none text-muted mb-1 pe-3"
          >
            Terms & conditions
          </a>
          <a
            href="/policies-and-procedures"
            className="text-decoration-none text-muted mb-1 pe-3"
          >
            Policies & procedures
          </a>
          <a
            href="/privacy-policy"
            className="text-decoration-none text-muted mb-1 pe-3"
          >
            Privacy policy
          </a>
          <a
            href="/disclosure"
            className="text-decoration-none text-muted mb-1 pe-3"
          >
            Disclosure
          </a>
          <a
            href="/investors-attention"
            className="text-decoration-none text-muted mb-1 pe-3"
          >
            For investor's attention
          </a>
          <a
            href="/investor-charter"
            className="text-decoration-none text-muted pe-3"
          >
            Investor charter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
