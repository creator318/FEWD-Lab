import React from "react";

export default function Footer() {
  return (
    <div>
      <a href="#" className="btn btn-primary btn-lg position-fixed bottom-0 end-0 m-4 rounded-circle" id="back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>

      <footer className="bg-dark text-white pt-5 pb-4 rounded-top-5">
        <div className="container rounded-5">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4 fw-bold">TechTrend</h5>
              <p className="mb-4">Your one-stop destination for premium tech products and accessories. Quality guaranteed.</p>
              <div className="d-flex gap-3 mb-4">
                <a href="#" className="text-white bg-primary p-2 rounded-circle">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white bg-info p-2 rounded-circle">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white bg-danger p-2 rounded-circle">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-white bg-primary p-2 rounded-circle">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-headset fs-4 me-2"></i>
                <div>
                  <p className="mb-0">Customer Support</p>
                  <h5 className="mb-0">1-800-TECH-HELP</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4 fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a href="index" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>Home{" "}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="about" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>About Us{" "}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="products" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>Products{" "}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="gallery" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>Gallery{" "}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="partners" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>Partners{" "}
                  </a>
                </li>
                <li>
                  <a href="contact" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>Contact Us{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4 fw-bold">Customer Service</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a href="#" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>My Account{" "}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>Order Tracking{" "}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>Wishlist{" "}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>Returns & Exchanges{" "}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>Shipping Policy{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-chevron-right me-2 text-primary"></i>FAQs{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4 fw-bold">Contact Info</h5>
              <div className="mb-3 d-flex">
                <i className="bi bi-geo-alt-fill me-3 text-primary"></i>
                <p className="mb-0">123 Tech Street, Silicon Valley, CA 94043, USA</p>
              </div>
              <div className="mb-3 d-flex">
                <i className="bi bi-telephone-fill me-3 text-primary"></i>
                <p className="mb-0">+1 (555) 123-4567</p>
              </div>
              <div className="mb-3 d-flex">
                <i className="bi bi-envelope-fill me-3 text-primary"></i>
                <p className="mb-0">info@techtrend.com</p>
              </div>
              <div className="mb-4 d-flex">
                <i className="bi bi-clock-fill me-3 text-primary"></i>
                <p className="mb-0">
                  Mon-Fri: 9AM-6PM
                  <br />
                  Sat: 10AM-4PM
                </p>
              </div>
              <div>
                <img src="https://source.unsplash.com/random/200x60/?payment-methods" className="img-fluid rounded" alt="Payment Methods" />
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">&copy; 2025 TechTrend. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="#" className="text-white text-decoration-none me-3">
                Privacy Policy
              </a>
              <a href="#" className="text-white text-decoration-none me-3">
                Terms of Service
              </a>
              <a href="#" className="text-white text-decoration-none">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
