import { motion } from "framer-motion";

function FeatureCard({ icon, title, description }) {
    return (

        <motion.div
            className="feature-card"
            whileHover={{
                y: -8,
                transition: { duration: 0.25 }
            }}
        >

            <div className="feature-icon">
                {icon}
            </div>

            <h4>{title}</h4>

            <p>{description}</p>

        </motion.div>

    );
}

export default FeatureCard;