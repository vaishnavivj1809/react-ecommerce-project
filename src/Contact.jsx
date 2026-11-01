import React from "react";

function Contact() {
  return (
    <div className="container py-5">

      <div className="text-center mb-4">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">
          Get in touch with us. We would love to hear from you.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
