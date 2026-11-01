import React, { useState } from "react";
import products from "./ProductData";
import ProductCard from "./ProductCard";

function Products() {
  const [category, setCategory] = useState("All");

  const filteredProducts = category === "All"? products: products.filter((product) => product.category === category);

  return (
    <div className="container py-5">
      <h2 className="text-center m-auto">Our Products</h2>

      <div className="text-center mb-4">
        <button className="btn btn-primary m-2" onClick={() => setCategory("All")}>All</button>
        <button className="btn btn-primary m-2" onClick={() => setCategory("Clothing")}>Clothing</button>
        <button className="btn btn-primary m-2" onClick={() => setCategory("Footwear")}>Footwear</button>
        <button className="btn btn-primary m-2" onClick={() => setCategory("Accessories")}>Accessories</button>
        <button className="btn btn-primary m-2" onClick={() => setCategory("Electronics")}>Electronics</button>
      </div>

      <div className="row justify-content-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-4 col-lg-3 mb-4 " key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) :null
        }
      </div>
    </div>
  );
}

export default Products;
