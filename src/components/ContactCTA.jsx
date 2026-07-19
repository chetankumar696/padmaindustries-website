import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";

import Button from "./ui/Button";
import ScrollReveal from "./ui/ScrollReveal";
import { COMPANY } from "../constants/company";
import "../styles/contact-cta.css";

import "../styles/contact-cta.css";

function ContactCTA() {
  return (
    <section id="contact" className="contact-cta">

      <div className="container">

        <ScrollReveal>

          <div className="cta-card">

            <h2>
              Need High Performance
              <br />
              Refractory Solutions?
            </h2>

            <p>
              Let's discuss your project and recommend the
              right refractory solution for your application.
            </p>

            <div className="cta-buttons">

              <Button href="#contact">
                Request Quote
              </Button>

            </div>

            <div className="cta-contact">

              <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}>

                <FaPhoneAlt />

                <span>{COMPANY.phone}</span>

              </a>

              <a href={`mailto:${COMPANY.email}`}>

                <FaEnvelope />

                <span>{COMPANY.email}</span>

              </a>

              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >

                <FaWhatsapp />

                <span>WhatsApp</span>

              </a>

            </div>

          </div>

        </ScrollReveal>

      </div>

    </section>
  );
}

export default ContactCTA;