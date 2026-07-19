import { motion } from "framer-motion";

function LabCard({ test }) {

    return (

        <motion.div
            className="lab-card"
            whileHover={{ y:-8 }}
        >

            <img
                src={test.image}
                alt={test.title}
            />

            <div className="lab-body">

                <h4>{test.title}</h4>

                <p>{test.description}</p>

            </div>

        </motion.div>

    );

}

export default LabCard;