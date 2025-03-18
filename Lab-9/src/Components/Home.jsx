import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header className="bg-secondary text-white py-5 rounded-5">
        <div className="container rounded-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Latest Tech for Modern Life</h1>
              <p className="lead mb-4">
                Discover cutting-edge gadgets and accessories that enhance your digital lifestyle. Premium quality at competitive prices.
              </p>
              <div className="d-flex gap-2">
                <a href="products" className="btn btn-primary btn-lg rounded-4">
                  {" "}
                  <i className="bi bi-bag-fill me-2"></i>Shop Now{" "}
                </a>
                <a href="#featured" className="btn btn-outline-light btn-lg rounded-4">
                  {" "}
                  <i className="bi bi-star-fill me-2"></i>Featured Products{" "}
                </a>
              </div>
              <div className="mt-4">
                <span className="badge bg-success rounded-pill p-2 me-2">Free Shipping</span>
                <span className="badge bg-info rounded-pill p-2 me-2">30-Day Returns</span>
                <span className="badge bg-warning rounded-pill p-2">24/7 Support</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div id="heroCarousel" className="carousel slide carousel-fade shadow-lg rounded-5 bg-light" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner rounded-5">
                  <div className="carousel-item active">
                    <img src="images/phone.avif" className="d-block w-50 mx-auto rounded-5" alt="Latest bs" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Latest Smartphones</h5>
                      <p>Mobile technology at your fingertips</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="images/laptop.jpg" className="d-block w-50 mx-auto rounded-5" alt="Premium Laptops" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Premium Laptops</h5>
                      <p>Powerful computing for work and play</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="images/headphones.jpeg" className="d-block w-50 mx-auto rounded-5" alt="Audio Accessories" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Audio Accessories</h5>
                      <p>Immersive sound experience for audiophiles</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="alert alert-warning alert-dismissible fade show mb-0 rounded-5" role="alert">
        <div className="container d-flex justify-content-between align-items-center rounded-5">
          <div>
            <i className="bi bi-lightning-fill me-2"></i>
            <strong>Flash Sale!</strong> Get up to 50% off on selected items.{" "}
            <a href="products" className="alert-link">
              Shop now
            </a>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>

      <section id="featured" className="py-5 rounded-5">
        <div className="container rounded-5">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Featured Products</h2>
              <p className="lead text-muted">Our most popular items handpicked for you</p>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm hover-shadow rounded-5">
                <div className="badge bg-danger position-absolute top-0 end-0 m-2">HOT</div>
                <img src="./images/phone.avif" className="card-img-top rounded-5" alt="Smartphone" />
                <div className="card-body">
                  <h5 className="card-title">IPhone 14 Pro</h5>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text text-muted mb-0">Flagship Smartphone</p>
                    <div>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-half text-warning"></i>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 mb-3">
                    ₹899 <span className="text-decoration-line-through text-muted fs-6">₹999</span>
                  </p>
                  <div className="progress mb-3" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="small text-danger mb-3">Only 7 left in stock!</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary rounded-5">
                      <i className="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                    <button className="btn btn-outline-secondary rounded-5">
                      <i className="bi bi-heart me-2"></i>Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm rounded-5">
                <div className="badge bg-success position-absolute top-0 end-0 m-2">NEW</div>
                <img src="./images/laptop.jpg" className="card-img-top rounded-5" alt="Laptop" />
                <div className="card-body">
                  <h5 className="card-title">MacBook Air</h5>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text text-muted mb-0">Ultralight Laptop</p>
                    <div>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star text-warning"></i>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 mb-3">₹1,299</p>
                  <div className="progress mb-3" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="small text-success mb-3">In stock</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary rounded-5">
                      <i className="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                    <button className="btn btn-outline-secondary rounded-5">
                      <i className="bi bi-heart me-2"></i>Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm rounded-5">
                <div className="badge bg-primary position-absolute top-0 end-0 m-2">POPULAR</div>
                <img src="./images/headphones.jpeg" className="card-img-top rounded-5" alt="Headphones" />
                <div className="card-body">
                  <h5 className="card-title">Boat Bass Pro</h5>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text text-muted mb-0">Wireless Headphones</p>
                    <div>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 mb-3">
                    ₹249 <span className="text-decoration-line-through text-muted fs-6">₹299</span>
                  </p>
                  <div className="progress mb-3" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="small text-warning mb-3">Limited stock available</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary rounded-5">
                      <i className="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                    <button className="btn btn-outline-secondary rounded-5">
                      <i className="bi bi-heart me-2"></i>Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm rounded-5">
                <div className="badge bg-info position-absolute top-0 end-0 m-2">TRENDING</div>
                <img src="./images/watch.webp" className="card-img-top rounded-5" alt="Smartwatch" />
                <div className="card-body">
                  <h5 className="card-title">Titan Smart Watch</h5>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text text-muted mb-0">Fitness Smartwatch</p>
                    <div>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-half text-warning"></i>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 mb-3">₹179</p>
                  <div className="progress mb-3" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="small text-info mb-3">Selling fast!</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary rounded-5">
                      <i className="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                    <button className="btn btn-outline-secondary rounded-5">
                      <i className="bi bi-heart me-2"></i>Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="products" className="btn btn-outline-primary btn-lg rounded-4">
              {" "}
              <i className="bi bi-grid-3x3-gap me-2"></i>View All Products{" "}
            </a>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light rounded-5">
        <div className="container rounded-5">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Shop by Category</h2>
              <p className="lead text-muted">Browse our extensive collection of tech products</p>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-6 col-md-4 col-lg-2">
              <div className="card text-center h-100 border-0 shadow-sm rounded-5">
                <div className="card-body">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-phone fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">Smartphones</h5>
                  <p className="card-text small text-muted">Latest models from top brands</p>
                  <a href="products" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <div className="card text-center h-100 border-0 shadow-sm rounded-5">
                <div className="card-body">
                  <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-laptop fs-1 text-success"></i>
                  </div>
                  <h5 className="card-title">Laptops</h5>
                  <p className="card-text small text-muted">For work and entertainment</p>
                  <a href="products" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <div className="card text-center h-100 border-0 shadow-sm rounded-5">
                <div className="card-body">
                  <div className="bg-danger bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-headphones fs-1 text-danger"></i>
                  </div>
                  <h5 className="card-title">Audio</h5>
                  <p className="card-text small text-muted">Headphones & speakers</p>
                  <a href="products" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <div className="card text-center h-100 border-0 shadow-sm rounded-5">
                <div className="card-body">
                  <div className="bg-info bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-smartwatch fs-1 text-info"></i>
                  </div>
                  <h5 className="card-title">Wearables</h5>
                  <p className="card-text small text-muted">Smartwatches & fitness trackers</p>
                  <a href="products" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <div className="card text-center h-100 border-0 shadow-sm rounded-5">
                <div className="card-body">
                  <div className="bg-warning bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-camera fs-1 text-warning"></i>
                  </div>
                  <h5 className="card-title">Cameras</h5>
                  <p className="card-text small text-muted">Digital & action cameras</p>
                  <a href="products" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <div className="card text-center h-100 border-0 shadow-sm rounded-5">
                <div className="card-body">
                  <div className="bg-secondary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-controller fs-1 text-secondary"></i>
                  </div>
                  <h5 className="card-title">Gaming</h5>
                  <p className="card-text small text-muted">Consoles & accessories</p>
                  <a href="products" className="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-secondary text-white rounded-5">
        <div className="container rounded-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-3">Special Offers</h2>
              <p className="lead mb-4">Subscribe to our newsletter and get exclusive deals delivered to your inbox.</p>

              <form className="row g-3">
                <div className="col-md-8">
                  <div className="input-group rounded-4">
                    <span className="input-group-text bg-white rounded-start-5">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input type="email" className="form-control rounded-end-5" placeholder="Your email address" required />
                  </div>
                </div>
                <div className="col-md-4">
                  <button type="submit" className="btn btn-warning w-100 rounded-5">
                    Subscribe
                  </button>
                </div>
              </form>

              <div className="mt-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded-circle p-2 me-3">
                    <i className="bi bi-percent text-white"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Exclusive Discounts</h5>
                    <p className="mb-0 text-light">Up to 30% off for subscribers</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success rounded-circle p-2 me-3">
                    <i className="bi bi-gift text-white"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Free Gifts</h5>
                    <p className="mb-0 text-light">With selected purchases</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-info rounded-circle p-2 me-3">
                    <i className="bi bi-truck text-white"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Priority Shipping</h5>
                    <p className="mb-0 text-light">Get your orders faster</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card bg-primary text-white rounded-5">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="card-title mb-0">Deal of the Day</h3>
                    <span className="badge bg-warning text-dark p-2">24% OFF</span>
                  </div>
                  <h4>Premium Wireless Earbuds</h4>
                  <p>Experience crystal-clear sound with active noise cancellation and 30-hour battery life.</p>

                  <div className="d-flex align-items-center mb-3">
                    <h2 className="mb-0 me-2">₹89.99</h2>
                    <span className="text-decoration-line-through">₹119.99</span>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <span>Available: 45%</span>
                      <span>Sold: 27/50</span>
                    </div>
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "45%" }}
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <button className="btn btn-warning flex-grow-1 rounded-5">
                      <i className="bi bi-cart-fill me-2"></i>Add to Cart
                    </button>
                    <button className="btn btn-outline-light rounded-5">
                      <i className="bi bi-eye-fill"></i>
                    </button>
                  </div>

                  <div className="mt-3 d-flex justify-content-center">
                    <div className="text-center">
                      <div id="countdown" className="d-flex gap-2">
                        <div className="bg-dark p-2 rounded">
                          <h4 className="mb-0">12</h4>
                          <small>Hours</small>
                        </div>
                        <div className="bg-dark p-2 rounded">
                          <h4 className="mb-0">45</h4>
                          <small>Minutes</small>
                        </div>
                        <div className="bg-dark p-2 rounded">
                          <h4 className="mb-0">30</h4>
                          <small>Seconds</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 rounded-5">
        <div className="container rounded-5">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">What Our Customers Say</h2>
              <p className="lead text-muted">Trusted by thousands of satisfied customers worldwide</p>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div id="testimonialCarousel" className="carousel slide rounded-5" data-bs-ride="carousel">
                <div className="carousel-inner rounded-5">
                  <div className="carousel-item active">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-5 text-center">
                        <img
                          src="https://source.unsplash.com/random/100x100/?portrait"
                          className="rounded-circle mb-3"
                          width="80"
                          height="80"
                          alt="Customer"
                        />
                        <div className="mb-3">
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                        </div>
                        <p className="lead fst-italic mb-4">
                          "The UltraPhone Pro exceeded all my expectations. The camera quality is outstanding and battery life is incredible.
                          TechTrend delivered it faster than expected too!"
                        </p>
                        <h5 className="mb-1">Sarah Johnson</h5>
                        <p className="text-muted mb-0">Marketing Executive</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-5 text-center">
                        <img
                          src="https://source.unsplash.com/random/100x100/?man"
                          className="rounded-circle mb-3"
                          width="80"
                          height="80"
                          alt="Customer"
                        />
                        <div className="mb-3">
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-half text-warning"></i>
                        </div>
                        <p className="lead fst-italic mb-4">
                          "I've been shopping with TechTrend for years and they never disappoint. Their customer service is top-notch and the products
                          are always as described."
                        </p>
                        <h5 className="mb-1">Michael Chen</h5>
                        <p className="text-muted mb-0">Software Developer</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-5 text-center">
                        <img
                          src="https://source.unsplash.com/random/100x100/?woman"
                          className="rounded-circle mb-3"
                          width="80"
                          height="80"
                          alt="Customer"
                        />
                        <div className="mb-3">
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                        </div>
                        <p className="lead fst-italic mb-4">
                          "The PowerBook Air is a game-changer for my workflow. It's lightweight yet powerful, and the battery lasts all day.
                          Definitely worth every penny!"
                        </p>
                        <h5 className="mb-1">Emily Rodriguez</h5>
                        <p className="text-muted mb-0">Graphic Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button className="btn btn-primary mx-2 rounded-4" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                    <i className="bi bi-arrow-left"></i>
                  </button>
                  <button className="btn btn-primary mx-2 rounded-4" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light rounded-5">
        <div className="container rounded-5">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Trusted Brands</h2>
              <p className="lead text-muted">We partner with the world's leading tech manufacturers</p>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row align-items-center justify-content-center g-4">
            <div className="col-4 col-md-2 text-center">
              <div className="bg-white p-3 rounded-5 shadow-sm">
                <img src="./images/gs.png" className="img-fluid rounded-5" alt="Brand Logo" />
              </div>
            </div>
            <div className="col-4 col-md-2 text-center">
              <div className="bg-white p-3 rounded-5 shadow-sm">
                <img src="./images/google.png" className="img-fluid" alt="Brand Logo" />
              </div>
            </div>
            <div className="col-4 col-md-2 text-center">
              <div className="bg-white p-3 rounded-5 shadow-sm">
                <img src="./images/microsoft.webp" className="img-fluid" alt="Brand Logo" />
              </div>
            </div>
            <div className="col-4 col-md-2 text-center">
              <div className="bg-white p-3 rounded-5 shadow-sm">
                <img src="./images/kmit.jpg" className="img-fluid" alt="Brand Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
