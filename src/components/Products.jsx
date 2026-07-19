import SectionTitle from "./ui/SectionTitle";
import ProductCard from "./ui/ProductCard";

import { products } from "../data/products";

import "../styles/products.css";

function Products() {
  return (
    <section id="products" className="products-section">

      <div className="container">

        <SectionTitle
          title="OUR PRODUCTS"
          heading="High Performance Refractory Solutions"
          description="Manufactured for demanding high-temperature industrial applications."
        />

        <div className="row g-4">

          {products.map((product) => (

            <div
              className="col-lg-4 col-md-6"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Products;