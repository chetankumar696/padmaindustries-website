import { useState } from "react";

import { processSteps } from "../data/process";
import SectionTitle from "./ui/SectionTitle";
import ScrollReveal from "./ui/ScrollReveal";

import "../styles/process.css";

function Process() {
  const [active, setActive] = useState(processSteps[0]);

  const ActiveIcon = active.icon;

  return (
    <section id="process" className="process-section">

      <div className="container">

        <SectionTitle
          title="OUR MANUFACTURING PROCESS"
          heading="From Raw Materials to Finished Refractories"
          description="Every brick is manufactured through a carefully controlled process to ensure quality, strength and reliability."
        />

        <ScrollReveal>

          <div className="timeline">

            {processSteps.map((step) => {

              const Icon = step.icon;

              return (

                <button
                  key={step.id}
                  className={`timeline-step ${
                    active.id === step.id ? "active" : ""
                  }`}
                  onClick={() => setActive(step)}
                >

                  <Icon />

                  <span>{step.title}</span>

                </button>

              );

            })}

          </div>

          <div className="process-display">

            <div className="process-icon">

              <ActiveIcon />

            </div>

            <h3>{active.title}</h3>

            <p>{active.description}</p>

          </div>

        </ScrollReveal>

      </div>

    </section>
  );
}

export default Process;