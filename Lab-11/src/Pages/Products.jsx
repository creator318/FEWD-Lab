import React from "react";

export default function Products() {
  return (
    <div className="container pt-5">
      <h1 className="display-4 fw-bold mb-4">Our Products</h1>
      <p className="lead mb-4">Explore our wide range of tech products, from the latest smartphones to high-performance laptops and accessories.</p>

      <header className="bg-secondary text-white py-5 rounded-5">
        <div className="container">
          <div className="row align-items-center px-3">
            <div className="col-lg-6">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    Products
                  </li>
                </ol>
              </nav>
              <h1 className="display-4 fw-bold mb-4">Our Products</h1>
              <p className="lead mb-4">Discover our extensive collection of premium tech products and accessories.</p>
              <div className="d-flex gap-2">
                <a href="#featured-products" className="btn btn-primary rounded-5">
                  {" "}
                  <i className="bi bi-star-fill me-2"></i>Featured Products{" "}
                </a>
                <a href="#new-arrivals" className="btn btn-outline-light rounded-5">
                  {" "}
                  <i className="bi bi-lightning-fill me-2"></i>New Arrivals{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="card bg-primary text-white rounded-4">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="card-title mb-0">Special Offer</h3>
                    <span className="badge bg-warning text-dark p-2">Limited Time</span>
                  </div>
                  <h4>Buy 2 Get 1 Free</h4>
                  <p>
                    On selected accessories and peripherals. Use code <strong>TECH3PACK</strong> at checkout.
                  </p>
                  <div className="d-grid">
                    <button className="btn btn-warning rounded-5">
                      <i className="bi bi-tag-fill me-2"></i>Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 bg-light">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-3">
              <select className="form-select">
                <option selected>All Categories</option>
                <option>Smartphones</option>
                <option>Laptops</option>
                <option>Audio</option>
                <option>Wearables</option>
                <option>Cameras</option>
                <option>Gaming</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option selected>Sort By</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Popularity</option>
                <option>Rating</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option selected>Price Range</option>
                <option>Under ₹100</option>
                <option>₹100 - ₹500</option>
                <option>₹500 - ₹1000</option>
                <option>₹1000 - ₹2000</option>
                <option>₹2000+</option>
              </select>
            </div>
            <div className="col-md-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search products..." />
                <button className="btn btn-primary rounded-5">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary p-2">
                  Smartphones <i className="bi bi-x"></i>
                </span>
                <span className="badge bg-primary p-2">
                  Wireless <i className="bi bi-x"></i>
                </span>
                <span className="badge bg-primary p-2">
                  New Arrivals <i className="bi bi-x"></i>
                </span>
                <a href="#" className="text-decoration-none ms-2">
                  Clear All
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-products" className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Featured Products</h2>
              <p className="lead text-muted">Our most popular items handpicked for you</p>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm rounded-5 hover-shadow">
                <div className="badge bg-danger position-absolute top-0 end-0 m-2">HOT</div>
                <img src="./images/phone.avif" className="card-img-top" alt="Smartphone" />
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
                <img src="./images/laptop.jpg" className="card-img-top" alt="Laptop" />
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
                <img src="./images/headphones.jpeg" className="card-img-top" alt="Headphones" />
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
                <img src="./images/watch.webp" className="card-img-top" alt="Smartwatch" />
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
            <a href="/products" className="btn btn-outline-primary btn-lg rounded-5">
              <i className="bi bi-grid-3x3-gap me-2"></i>View All Products
            </a>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="display-5 fw-bold mb-3">Product Comparison</h2>
              <p className="lead text-muted">Compare features of our top-selling products</p>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="table-responsive rounded-4">
                <table className="table table-striped table-hover border">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">Features</th>
                      <th scope="col">UltraPhone Pro</th>
                      <th scope="col">UltraPhone Lite</th>
                      <th scope="col">UltraPhone Mini</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Display</th>
                      <td>6.7" OLED</td>
                      <td>6.4" AMOLED</td>
                      <td>5.8" LCD</td>
                    </tr>
                    <tr>
                      <th scope="row">Processor</th>
                      <td>Octa-core 3.0GHz</td>
                      <td>Octa-core 2.5GHz</td>
                      <td>Quad-core 2.0GHz</td>
                    </tr>
                    <tr>
                      <th scope="row">RAM</th>
                      <td>12GB</td>
                      <td>8GB</td>
                      <td>6GB</td>
                    </tr>
                    <tr>
                      <th scope="row">Storage</th>
                      <td>256GB/512GB</td>
                      <td>128GB/256GB</td>
                      <td>64GB/128GB</td>
                    </tr>
                    <tr>
                      <th scope="row">Camera</th>
                      <td>108MP Triple</td>
                      <td>64MP Triple</td>
                      <td>48MP Dual</td>
                    </tr>
                    <tr>
                      <th scope="row">Battery</th>
                      <td>5000mAh</td>
                      <td>4500mAh</td>
                      <td>3800mAh</td>
                    </tr>
                    <tr>
                      <th scope="row">Fast Charging</th>
                      <td>
                        <i className="bi bi-check-circle-fill text-success"></i> 65W
                      </td>
                      <td>
                        <i className="bi bi-check-circle-fill text-success"></i> 33W
                      </td>
                      <td>
                        <i className="bi bi-check-circle-fill text-success"></i> 18W
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Water Resistant</th>
                      <td>
                        <i className="bi bi-check-circle-fill text-success"></i> IP68
                      </td>
                      <td>
                        <i className="bi bi-check-circle-fill text-success"></i> IP67
                      </td>
                      <td>
                        <i className="bi bi-x-circle-fill text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">5G Support</th>
                      <td>
                        <i className="bi bi-check-circle-fill text-success"></i>
                      </td>
                      <td>
                        <i className="bi bi-check-circle-fill text-success"></i>
                      </td>
                      <td>
                        <i className="bi bi-x-circle-fill text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Price</th>
                      <td>₹899</td>
                      <td>₹699</td>
                      <td>₹499</td>
                    </tr>
                    <tr>
                      <th scope="row">Action</th>
                      <td>
                        <button className="btn btn-sm btn-primary rounded-5">Add to Cart</button>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-primary rounded-5">Add to Cart</button>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-primary rounded-5">Add to Cart</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="new-arrivals" className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="display-5 fw-bold mb-3">New Arrivals</h2>
              <p className="lead text-muted">The latest additions to our product lineup</p>
              <hr />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm rounded-5">
                <div className="badge bg-danger position-absolute top-0 end-0 m-2">NEW</div>
                <div className="text-center p-4" style={{ height: "200px" }}>
                  <img src="./images/tab.webp" className="img-fluid" alt="Tablet" style={{ maxHeight: "100%", objectFit: "contain" }} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Samsung S24</h5>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text text-muted mb-0">Professional Tablet</p>
                    <div>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star text-warning"></i>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 mb-3">₹649</p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>11" Liquid Retina Display
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>Ultra-fast Processor
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>All-day Battery Life
                    </li>
                    <li>
                      <i className="bi bi-check2 text-success me-2"></i>Stylus Compatible
                    </li>
                  </ul>
                  <div className="d-grid mt-auto">
                    <button className="btn btn-primary rounded-5">
                      <i className="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm rounded-5">
                <div className="badge bg-danger position-absolute top-0 end-0 m-2">NEW</div>
                <div className="text-center p-4" style={{ height: "200px" }}>
                  <img src="./images/airbuds.webp" className="img-fluid" alt="Wireless Earbuds" style={{ maxHeight: "100%", objectFit: "contain" }} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">AirBuds Pro</h5>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text text-muted mb-0">Wireless Earbuds</p>
                    <div>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-half text-warning"></i>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 mb-3">₹149</p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>Active Noise Cancellation
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>30-Hour Battery Life
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>Water & Sweat Resistant
                    </li>
                    <li>
                      <i className="bi bi-check2 text-success me-2"></i>Touch Controls
                    </li>
                  </ul>
                  <div className="d-grid mt-auto">
                    <button className="btn btn-primary rounded-5">
                      <i className="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm rounded-5">
                <div className="badge bg-danger position-absolute top-0 end-0 m-2">NEW</div>
                <div className="text-center p-4" style={{ height: "200px" }}>
                  <img src="./images/speakers.jpg" className="img-fluid" alt="Smart Speaker" style={{ maxHeight: "100%", objectFit: "contain" }} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">EchoSphere</h5>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text text-muted mb-0">Smart Speaker</p>
                    <div>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star text-warning"></i>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 mb-3">₹129</p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>360° Premium Sound
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>Voice Assistant Built-in
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>Smart Home Controls
                    </li>
                    <li>
                      <i className="bi bi-check2 text-success me-2"></i>Multi-room Audio Support
                    </li>
                  </ul>
                  <div className="d-grid mt-auto">
                    <button className="btn btn-primary rounded-5">
                      <i className="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="display-5 fw-bold mb-3">Product Categories</h2>
              <p className="lead text-muted">Browse our extensive collection by category</p>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="productCategories">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="bi bi-phone me-2 text-primary"></i>Smartphones & Mobile Devices
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#productCategories">
                    <div className="accordion-body">
                      <div className="row g-3">
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Flagship Phones
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Mid-range Phones
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Budget Phones
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Foldable Phones
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Android Devices
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                iOS Devices
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Tablets
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                E-Readers
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Phone Accessories
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Screen Protectors
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Cases & Covers
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Power Banks
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <i className="bi bi-laptop me-2 text-success"></i>Computers & Laptops
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#productCategories">
                    <div className="accordion-body">
                      <div className="row g-3">
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Gaming Laptops
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Ultrabooks
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                2-in-1 Laptops
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Business Laptops
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Desktop PCs
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                All-in-One PCs
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Mini PCs
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                PC Components
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Monitors
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Keyboards & Mice
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Laptop Bags
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Docking Stations
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i className="bi bi-headphones me-2 text-danger"></i>Audio & Headphones
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#productCategories">
                    <div className="accordion-body">
                      <div className="row g-3">
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Wireless Earbuds
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Over-ear Headphones
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Noise-Cancelling
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Sports Headphones
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Bluetooth Speakers
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Smart Speakers
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Soundbars
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Home Theater Systems
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Microphones
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                DJ Equipment
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Audio Accessories
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Headphone Amplifiers
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <i className="bi bi-smartwatch me-2 text-info"></i>Wearable Technology
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#productCategories">
                    <div className="accordion-body">
                      <div className="row g-3">
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Smartwatches
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Fitness Trackers
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Sport Watches
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Hybrid Watches
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Smart Glasses
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                VR Headsets
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                AR Devices
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Smart Rings
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Watch Bands
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Charging Docks
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Screen Protectors
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Wearable Accessories
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <i className="bi bi-camera me-2 text-warning"></i>Cameras & Photography
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#productCategories">
                    <div className="accordion-body">
                      <div className="row g-3">
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                DSLR Cameras
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Mirrorless Cameras
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Point & Shoot
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Instant Cameras
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Action Cameras
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Drones
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Security Cameras
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Camera Lenses
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="list-unstyled">
                            <li>
                              <a href="#" className="text-decoration-none">
                                Tripods & Stands
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Camera Bags
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Memory Cards
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-decoration-none">
                                Photo Printers
                              </a>
                            </li>
                          </ul>
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

      <section className="py-4">
        <div className="container">
          <nav aria-label="Page navigation rounded-5">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link rounded-start-4" href="#" tabindex="-1" aria-disabled="true">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link rounded-end-4" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="py-5 bg-primary text-white mb-5 rounded-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-3">Stay Updated</h2>
              <p className="lead mb-0">Subscribe to our newsletter for exclusive deals, new product announcements, and tech tips.</p>
            </div>
            <div className="col-lg-6">
              <form className="row g-3">
                <div className="col-md-8">
                  <input type="email" className="form-control form-control-lg rounded-5" placeholder="Your email address" required />
                </div>
                <div className="col-md-4">
                  <button type="submit" className="btn btn-warning btn-lg w-100 rounded-5">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
