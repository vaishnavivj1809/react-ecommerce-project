import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              Welcome to Our Store
            </h1>

            <p className="lead mt-3">
              Discover amazing products at affordable prices.
              Shop your favourite products with us.
            </p>

            <button
              className="btn btn-primary mt-3 px-4"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <img
              src="https://img.freepik.com/free-photo/online-fashion-shopping-with-computer_23-2150400628.jpg"
              alt="Shopping Store"
              className="img-fluid rounded"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
