import logo from "../assets/logo/logo.png";
import { COMPANY } from "../constants/company";
import { navigation } from "../data/navigation";



import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../styles/footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="container">

        <div className="row gy-5">

          <div className="col-lg-4">

            <img
              src={logo}
              alt="Padma Industries"
              className="footer-logo"
            />

            <p className="footer-text">

              {COMPANY.tagline}
              <br />
              Since {COMPANY.established}

            </p>

          </div>

          <div className="col-lg-2">

            <h5>Quick Links</h5>

            <ul>

              {navigation.map((item) => (

                <li key={item.name}>
                  <a href={item.link}>
                    {item.name}
                  </a>
                </li>

              ))}

            </ul>

          </div>

          <div className="col-lg-3">

            <h5>Products</h5>

            <ul>

              {COMPANY.products.map((product) => (

                <li key={product}>
                  {product}
                </li>

              ))}

            </ul>

          </div>

          <div className="col-lg-3">

            <h5>Contact</h5>

            <p>
              <FaPhoneAlt />

              <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}>
                {COMPANY.phone}
              </a>
            </p>

            <p><FaEnvelope />
              <a href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
            </p>

            <p><FaMapMarkerAlt /> {COMPANY.location} </p>

          </div>

        </div>

        <hr />

        <div className="copyright">

          © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.

        </div>

      </div>

    </footer>

  );

}

export default Footer;