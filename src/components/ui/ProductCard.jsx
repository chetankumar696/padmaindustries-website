import { motion } from "framer-motion";
import Button from "./Button";

function ProductCard({ product }) {

    return (

        <motion.div

            className="product-card"

            whileHover={{ y: -10 }}

            transition={{ duration: .3 }}

        >

            <div className="product-image">

                <img
                    src={product.image}
                    alt={product.title}
                />

                <span className="product-badge">

                    {product.grade}

                </span>

            </div>

            <div className="product-body">

                <h4>{product.title}</h4>

                <p>{product.description}</p>

                <div className="product-buttons">

                    <Button href="#contact">

                        Request Quote

                    </Button>

                </div>

            </div>

        </motion.div>

    );

}

export default ProductCard;