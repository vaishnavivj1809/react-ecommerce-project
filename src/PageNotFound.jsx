import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="container text-center py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="text-danger">Page Not Found</h2>
      <p className="text-muted">
        Sorry, the page you are looking for does not exist.
      </p>

      <button className="btn btn-dark mt-3" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}

export default PageNotFound;