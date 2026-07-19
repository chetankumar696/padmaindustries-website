import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import {
    FaIndustry,
    FaWarehouse,
    FaHandshake,
    FaAward
} from "react-icons/fa";

import "../styles/stats-counter.css";

function StatsCounter() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    const stats = [

        {
            icon: FaIndustry,
            value: 40,
            suffix: "+",
            label: "Years Experience"
        },

        {
            icon: FaWarehouse,
            value: 1200,
            suffix: " MT",
            label: "Monthly Capacity"
        },

        {
            icon: FaHandshake,
            value: 8,
            suffix: "+",
            label: "Major Clients"
        },

        {
            icon: FaAward,
            value: 9001,
            prefix: "ISO ",
            label: "Certified"
        }

    ];

    return (

        <section className="stats-counter">

            <div className="container">

                <div
                    ref={ref}
                    className="row"
                >

                    {stats.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                className="col-lg-3 col-md-6 mb-4"
                                key={item.label}
                            >

                                <div className="counter-card">

                                    <Icon className="counter-icon" />

                                    <h2>

                                        {item.prefix || ""}
                                        {item.value}
                                        {item.suffix || ""}

                                    </h2>

                                    <p>{item.label}</p>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default StatsCounter;