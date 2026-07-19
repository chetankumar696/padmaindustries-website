import SectionTitle from "./ui/SectionTitle";
import ScrollReveal from "./ui/ScrollReveal";
import { clients } from "../data/clients";

import "../styles/clients.css";

function Clients() {
  return (
    <section id="clients" className="clients-section">

      <div className="container">

        <SectionTitle
          title="TRUSTED BY INDUSTRY LEADERS"
          heading="Serving Leading Companies Across Industries"
          description="We are proud to supply high-quality refractory solutions to leading organizations in the Steel, Refractory, Ceramic and Glass industries."
        />

        <ScrollReveal>

          <div className="clients-grid">

            {clients.map((client) => (

              <div
                className="client-card"
                key={client.name}
              >

                <img
                  src={client.logo}
                  alt={client.name}
                />

              </div>

            ))}

          </div>

        </ScrollReveal>

      </div>

    </section>
  );
}

export default Clients;