import factory from "../assets/images/factory/aerial-view.png";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import "../styles/about.css";
import ScrollReveal from "./ui/ScrollReveal";
import {
    FaIndustry,
    FaAward,
    FaBoxes,
    FaFlask,
    FaFire,
    FaCubes
} from "react-icons/fa";

function About() {
    return (
        <section id="about" className="about-section">
            <ScrollReveal>
                <div className="container">

                    <SectionTitle
                        title="ABOUT PADMA INDUSTRIES"
                        heading="Engineered Refractory Solutions Since 1986"
                        description="Leading manufacturer of high-quality refractory products for Steel, Cement, Foundry, Ceramic and Glass industries."
                    />

                    <div className="row align-items-center">

                        <div className="col-lg-6">

                            <div className="about-image">

                                <img
                                    src={factory}
                                    className="img-fluid"
                                    alt="Padma Industries Factory"
                                />

                            </div>

                        </div>

                        <div className="col-lg-6 about-content">

                            <h3 className="fw-bold mb-3">
                                Leading Manufacturer of High Alumina Refractory Products
                            </h3>

                            <p>
                                Established in <strong>1986</strong>, Padma Industries
                                (Ceramics) is an <strong>ISO 9001 Certified</strong>
                                manufacturer of High Alumina Bricks,
                                Fire Clay Bricks, Special Shapes,
                                Castables, Mortars and Insulation Bricks.
                            </p>

                            <p>
                                We proudly serve Steel, Cement,
                                Foundry, Ceramic and Glass industries
                                with premium refractory solutions
                                engineered for high-temperature applications.
                            </p>

                            <div className="row about-features">

                                <div className="col-md-6 mb-3">
                                    <div className="about-feature">
                                        <span>
                                            <FaIndustry />
                                        </span>
                                        <div>
                                            <strong>40+ Years</strong><br />
                                            Manufacturing Experience
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="about-feature">
                                        <span>
                                             <FaAward />
                                        </span>
                                        <div>
                                            <strong>ISO 9001</strong><br />
                                            Certified Company
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="about-feature">
                                        <span>
                                            <FaBoxes />
                                        </span>
                                        <div>
                                            <strong>1200 MT</strong><br />
                                            Monthly Capacity
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="about-feature">
                                        <span>
                                            <FaFlask />
                                        </span>
                                        <div>
                                            <strong>Laboratory</strong><br />
                                            In-house Testing
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="about-feature">
                                        <span>
                                            <FaFire />
                                        </span>
                                        <div>
                                            <strong>Tunnel Kiln</strong><br />
                                            Modern Technology
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="about-feature">
                                        <span>
                                            <FaCubes />
                                        </span>
                                        <div>
                                            <strong>Special Shapes</strong><br />
                                            Custom Manufacturing
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-4">
                                <Button href="#contact">
                                    Learn More About Us
                                </Button>
                            </div>

                        </div>

                    </div>

                </div>
            </ScrollReveal>
        </section>
    );
}

export default About;