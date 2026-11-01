import React from "react";

function About() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted">
          Know more about our store and what makes us special.
        </p>
      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card h-100 p-3 shadow-sm">
            <h3>Our Story</h3>
            <p>
              Our journey started with a simple idea of making
              quality products accessible to everyone.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 p-3 shadow-sm">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide quality products,
              affordable prices and a great shopping experience.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 p-3 shadow-sm">
            <h3>Why Choose Us</h3>
            <p>
              We focus on customer satisfaction, product quality
              and reliable service.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
