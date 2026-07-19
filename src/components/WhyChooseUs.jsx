import SectionTitle from "./ui/SectionTitle";
import FeatureCard from "./ui/FeatureCard";

import {
    FaIndustry,
    FaAward,
    FaFlask,
    FaFire,
    FaTruck,
    FaCogs
} from "react-icons/fa";

import "../styles/whychoose.css";

function WhyChooseUs() {

    const features = [

        {
            icon: <FaIndustry />,
            title: "40+ Years",
            description: "Manufacturing excellence since 1986."
        },

        {
            icon: <FaAward />,
            title: "ISO 9001",
            description: "Certified quality management system."
        },

        {
            icon: <FaFlask />,
            title: "Advanced Laboratory",
            description: "Complete physical and chemical testing."
        },

        {
            icon: <FaFire />,
            title: "Tunnel Kiln",
            description: "Modern firing technology for consistent quality."
        },

        {
            icon: <FaTruck />,
            title: "Timely Delivery",
            description: "Reliable production planning and dispatch."
        },

        {
            icon: <FaCogs />,
            title: "Custom Engineering",
            description: "Special refractory shapes manufactured to drawing."
        }

    ];

    return (

        <section id="why-us" className="why-section">

            <div className="container">

                <SectionTitle
                    title="WHY CHOOSE US"
                    heading="Why Industries Trust Padma Industries"
                    description="Delivering reliable refractory solutions backed by decades of manufacturing experience."
                />

                <div className="row g-4">

                    {features.map((feature) => (

                        <div
                            className="col-lg-4 col-md-6"
                            key={feature.title}
                        >

                            <FeatureCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default WhyChooseUs;