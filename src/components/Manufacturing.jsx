import "../styles/manufacturing.css";

const steps = [
  {
    title: "Raw Materials",
    description: "Carefully selected raw materials are inspected before production.",
    image: "../assets/images/process/raw-materials.jpg",
  },
  {
    title: "Mixing & Ball Mill",
    description: "Precise mixing ensures consistent quality and composition.",
    image: "../assets/images/process/ball-mill.jpg",
  },
  {
    title: "Hydraulic Pressing",
    description: "High-pressure presses form accurate and durable bricks.",
    image: "../assets/images/process/press.jpg",
  },
  {
    title: "Tunnel Kiln Firing",
    description: "Controlled firing ensures superior strength and durability.",
    image: "../assets/images/process/kiln.jpg",
  },
  {
    title: "Laboratory Testing",
    description: "Every batch undergoes rigorous quality testing.",
    image: "../assets/images/process/laboratory.jpg",
  },
  {
    title: "Packing & Dispatch",
    description: "Products are inspected, packed and dispatched safely.",
    image: "../assets/images/process/dispatch.jpg",
  },
];

function Manufacturing() {
  return (
    <section className="manufacturing-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h5 className="text-warning fw-bold">
            MANUFACTURING PROCESS
          </h5>

          <h2 className="text-white">
            From Raw Material to Finished Product
          </h2>

          <p className="text-light">
            Every refractory product is manufactured under strict quality control.
          </p>
        </div>

        <div className="row">
          {steps.map((step, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="process-card">
                <div className="step-number">
                  {index + 1}
                </div>

                <h4>{step.title}</h4>

                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Manufacturing;