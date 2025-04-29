import React from "react";

export default function Partners() {
  return (
    <div className="container pt-5">
      <h1 className="display-4 fw-bold mb-4">Our Partners</h1>
      <p className="lead mb-4">We are proud to collaborate with some of the most innovative companies in the tech industry.</p>
      <header className="bg-secondary text-white py-5 rounded-5">
        <div className="container">
          <div className="row align-items-center px-3">
            <div className="col-lg-6">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index" className="text-white text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    Partners
                  </li>
                </ol>
              </nav>
              <h1 className="display-4 fw-bold mb-4">Our Partners</h1>
              <p className="lead mb-4">Discover the brands and businesses that collaborate with TechTrend to bring you the best tech products.</p>
              <a href="#become-partner" className="btn btn-primary btn-lg rounded-5">
                {" "}
                <i className="bi bi-handshake-fill me-2"></i>Become a Partner{" "}
              </a>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <img
                src="https://source.unsplash.com/random/600x400/?business-meeting"
                className="img-fluid rounded-5 rounded shadow-lg"
                alt="Partnership"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Featured Partners</h2>
              <p className="lead text-muted">We collaborate with the world's leading tech brands</p>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3 rounded-5">
              <div className="card h-100 border-0 shadow-sm rounded-5 text-center rounded-5">
                <div className="card-body p-4 rounded-5">
                  <img src="https://source.unsplash.com/random/150x80/?apple" className="img-fluid rounded-5 mb-3" alt="Partner Logo" />
                  <h4 className="card-title">TechGiant</h4>
                  <p className="card-text text-muted">Global leader in smartphones, computers, and wearables.</p>
                  <div className="mt-3">
                    <span className="badge bg-primary p-2 mb-2">Premium Partner</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pb-4 rounded-5">
                  <a href="#" className="btn btn-outline-primary rounded-5">
                    View Products
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 rounded-5">
              <div className="card h-100 border-0 shadow-sm rounded-5 text-center rounded-5">
                <div className="card-body p-4 rounded-5">
                  <img src="https://source.unsplash.com/random/150x80/?samsung" className="img-fluid rounded-5 mb-3" alt="Partner Logo" />
                  <h4 className="card-title">InnovateTech</h4>
                  <p className="card-text text-muted">Innovative electronics and smart home solutions.</p>
                  <div className="mt-3">
                    <span className="badge bg-primary p-2 mb-2">Premium Partner</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pb-4 rounded-5">
                  <a href="#" className="btn btn-outline-primary rounded-5">
                    View Products
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 rounded-5">
              <div className="card h-100 border-0 shadow-sm rounded-5 text-center rounded-5">
                <div className="card-body p-4 rounded-5">
                  <img src="https://source.unsplash.com/random/150x80/?sony" className="img-fluid rounded-5 mb-3" alt="Partner Logo" />
                  <h4 className="card-title">SoundMaster</h4>
                  <p className="card-text text-muted">Premium audio equipment and entertainment systems.</p>
                  <div className="mt-3">
                    <span className="badge bg-success p-2 mb-2">Gold Partner</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pb-4 rounded-5">
                  <a href="#" className="btn btn-outline-primary rounded-5">
                    View Products
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 rounded-5">
              <div className="card h-100 border-0 shadow-sm rounded-5 text-center rounded-5">
                <div className="card-body p-4 rounded-5">
                  <img src="https://source.unsplash.com/random/150x80/?microsoft" className="img-fluid rounded-5 mb-3" alt="Partner Logo" />
                  <h4 className="card-title">DigitalEdge</h4>
                  <p className="card-text text-muted">Software solutions and productivity tools for businesses.</p>
                  <div className="mt-3">
                    <span className="badge bg-success p-2 mb-2">Gold Partner</span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pb-4 rounded-5">
                  <a href="#" className="btn btn-outline-primary rounded-5">
                    View Products
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <h3 className="mb-4">More Trusted Partners</h3>
              <div className="row align-items-center justify-content-center g-4">
                <div className="col-4 col-md-2 text-center">
                  <div className="bg-white p-3 rounded-5 shadow-sm">
                    <img src="https://source.unsplash.com/random/150x80/?intel" className="img-fluid rounded-5" alt="Partner Logo" />
                  </div>
                </div>
                <div className="col-4 col-md-2 text-center">
                  <div className="bg-white p-3 rounded-5 shadow-sm">
                    <img src="https://source.unsplash.com/random/150x80/?nvidia" className="img-fluid rounded-5" alt="Partner Logo" />
                  </div>
                </div>
                <div className="col-4 col-md-2 text-center">
                  <div className="bg-white p-3 rounded-5 shadow-sm">
                    <img src="https://source.unsplash.com/random/150x80/?logitech" className="img-fluid rounded-5" alt="Partner Logo" />
                  </div>
                </div>
                <div className="col-4 col-md-2 text-center">
                  <div className="bg-white p-3 rounded-5 shadow-sm">
                    <img src="https://source.unsplash.com/random/150x80/?asus" className="img-fluid rounded-5" alt="Partner Logo" />
                  </div>
                </div>
                <div className="col-4 col-md-2 text-center">
                  <div className="bg-white p-3 rounded-5 shadow-sm">
                    <img src="https://source.unsplash.com/random/150x80/?dell" className="img-fluid rounded-5" alt="Partner Logo" />
                  </div>
                </div>
                <div className="col-4 col-md-2 text-center">
                  <div className="bg-white p-3 rounded-5 shadow-sm">
                    <img src="https://source.unsplash.com/random/150x80/?hp" className="img-fluid rounded-5" alt="Partner Logo" />
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
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Partnership Benefits</h2>
              <p className="lead text-muted">Why leading brands choose to partner with TechTrend</p>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-5">
                <div className="card-body p-4 rounded-5">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-graph-up-arrow fs-1 text-primary"></i>
                  </div>
                  <h4 className="card-title">Expanded Market Reach</h4>
                  <p className="card-text">Access to our global customer base of over 1 million tech enthusiasts across 50+ countries.</p>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Global distribution network
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Multi-channel marketing
                    </li>
                    <li>
                      <i className="bi bi-check2-circle text-success me-2"></i>Targeted customer segments
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-5">
                <div className="card-body p-4 rounded-5">
                  <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-megaphone fs-1 text-success"></i>
                  </div>
                  <h4 className="card-title">Brand Visibility</h4>
                  <p className="card-text">Enhanced exposure through our marketing channels, events, and promotional campaigns.</p>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Featured product placement
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Co-branded marketing materials
                    </li>
                    <li>
                      <i className="bi bi-check2-circle text-success me-2"></i>Social media promotion
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-5">
                <div className="card-body p-4 rounded-5">
                  <div className="bg-danger bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-bar-chart-line fs-1 text-danger"></i>
                  </div>
                  <h4 className="card-title">Sales Growth</h4>
                  <p className="card-text">Increased revenue opportunities through our established sales channels and customer base.</p>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Dedicated sales team
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Special promotions
                    </li>
                    <li>
                      <i className="bi bi-check2-circle text-success me-2"></i>Bundle opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-5">
                <div className="card-body p-4 rounded-5">
                  <div className="bg-info bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-people fs-1 text-info"></i>
                  </div>
                  <h4 className="card-title">Customer Insights</h4>
                  <p className="card-text">Access to valuable market data and customer feedback to improve your products.</p>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Market research reports
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Customer behavior analysis
                    </li>
                    <li>
                      <i className="bi bi-check2-circle text-success me-2"></i>Product feedback collection
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-5">
                <div className="card-body p-4 rounded-5">
                  <div className="bg-warning bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-gear fs-1 text-warning"></i>
                  </div>
                  <h4 className="card-title">Operational Support</h4>
                  <p className="card-text">Streamlined logistics, inventory management, and customer service solutions.</p>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Warehousing solutions
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Order fulfillment
                    </li>
                    <li>
                      <i className="bi bi-check2-circle text-success me-2"></i>After-sales support
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-5">
                <div className="card-body p-4 rounded-5">
                  <div className="bg-secondary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-stars fs-1 text-secondary"></i>
                  </div>
                  <h4 className="card-title">Exclusive Events</h4>
                  <p className="card-text">Participation in industry events, product launches, and networking opportunities.</p>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Tech showcases
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>Partner conferences
                    </li>
                    <li>
                      <i className="bi bi-check2-circle text-success me-2"></i>Networking sessions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Partnership Levels</h2>
              <p className="lead text-muted">Choose the partnership tier that best suits your business needs</p>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-5">
                <div className="card-header bg-secondary text-white text-center py-3">
                  <h3 className="mb-0">Silver Partner</h3>
                </div>
                <div className="card-body p-4 rounded-5">
                  <div className="text-center mb-4">
                    <span className="display-5 fw-bold">₹2,500</span>
                    <span className="text-muted">/year</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Basic product listing
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Standard marketing support
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Quarterly performance reports
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Email support
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-x-circle-fill text-danger me-2"></i>Featured product placement
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-x-circle-fill text-danger me-2"></i>Co-branded marketing
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-x-circle-fill text-danger me-2"></i>Event participation
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-x-circle-fill text-danger me-2"></i>Dedicated account manager
                    </li>
                  </ul>
                  <div className="d-grid rounded-5">
                    <a href="#become-partner" className="btn btn-outline-primary rounded-5">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-header bg-success text-white text-center py-3">
                  <h3 className="mb-0">Gold Partner</h3>
                  <span className="badge bg-warning text-dark mt-2">Most Popular</span>
                </div>
                <div className="card-body p-4 rounded-5">
                  <div className="text-center mb-4">
                    <span className="display-5 fw-bold">₹5,000</span>
                    <span className="text-muted">/year</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Enhanced product listing
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Advanced marketing support
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Monthly performance reports
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Priority email & phone support
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Featured product placement
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Co-branded marketing
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-x-circle-fill text-danger me-2"></i>Event participation
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-x-circle-fill text-danger me-2"></i>Dedicated account manager
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="#become-partner" className="btn btn-success rounded-5">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-5">
                <div className="card-header bg-primary text-white text-center py-3">
                  <h3 className="mb-0">Premium Partner</h3>
                </div>
                <div className="card-body p-4 rounded-5">
                  <div className="text-center mb-4">
                    <span className="display-5 fw-bold">₹10,000</span>
                    <span className="text-muted">/year</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Premium product listing
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Comprehensive marketing support
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Weekly performance reports
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>24/7 priority support
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Featured product placement
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Co-branded marketing
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Event participation
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>Dedicated account manager
                    </li>
                  </ul>
                  <div className="d-grid rounded-5">
                    <a href="#become-partner" className="btn btn-outline-primary rounded-5">
                      Apply Now
                    </a>
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
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Partner Testimonials</h2>
              <p className="lead text-muted">What our partners say about working with TechTrend</p>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-5 text-center">
                        <img
                          src="https://source.unsplash.com/random/100x100/?ceo"
                          className="rounded-circle mb-3"
                          width="80"
                          height="80"
                          alt="Partner"
                        />
                        <div className="mb-3">
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                        </div>
                        <p className="lead fst-italic mb-4">
                          "Partnering with TechTrend has been a game-changer for our business. Their global reach and marketing expertise have
                          significantly increased our brand visibility and sales."
                        </p>
                        <h5 className="mb-1">Michael Chen</h5>
                        <p className="text-muted mb-0">CEO, InnovateTech</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-5 text-center">
                        <img
                          src="https://source.unsplash.com/random/100x100/?executive"
                          className="rounded-circle mb-3"
                          width="80"
                          height="80"
                          alt="Partner"
                        />
                        <div className="mb-3">
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                        </div>
                        <p className="lead fst-italic mb-4">
                          "The operational support and customer insights provided by TechTrend have been invaluable. Their team truly understands our
                          products and helps us connect with the right customers."
                        </p>
                        <h5 className="mb-1">Sarah Johnson</h5>
                        <p className="text-muted mb-0">VP of Sales, SoundMaster</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-5 text-center">
                        <img
                          src="https://source.unsplash.com/random/100x100/?director"
                          className="rounded-circle mb-3"
                          width="80"
                          height="80"
                          alt="Partner"
                        />
                        <div className="mb-3">
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-half text-warning"></i>
                        </div>
                        <p className="lead fst-italic mb-4">
                          "As a smaller tech manufacturer, partnering with TechTrend has given us access to markets we couldn't reach on our own.
                          Their team is professional, responsive, and truly invested in our success."
                        </p>
                        <h5 className="mb-1">David Rodriguez</h5>
                        <p className="text-muted mb-0">Director of Business Development, NextGen Accessories</p>
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
      <section id="become-partner" className="py-5 bg-primary text-white rounded-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Become a Partner</h2>
              <p className="lead">Join our network of trusted tech brands and grow your business</p>
              <hr className="w-25 mx-auto border-white" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow rounded-5">
                <div className="card-body p-4 rounded-5">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label for="companyName" className="form-label">
                          Company Name
                        </label>
                        <input type="text" className="form-control" id="companyName" required />
                      </div>
                      <div className="col-md-6">
                        <label for="website" className="form-label">
                          Company Website
                        </label>
                        <input type="url" className="form-control" id="website" required />
                      </div>
                      <div className="col-md-6">
                        <label for="contactName" className="form-label">
                          Contact Person
                        </label>
                        <input type="text" className="form-control" id="contactName" required />
                      </div>
                      <div className="col-md-6">
                        <label for="position" className="form-label">
                          Position/Title
                        </label>
                        <input type="text" className="form-control" id="position" required />
                      </div>
                      <div className="col-md-6">
                        <label for="email" className="form-label">
                          Email Address
                        </label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                      <div className="col-md-6">
                        <label for="phone" className="form-label">
                          Phone Number
                        </label>
                        <input type="tel" className="form-control" id="phone" required />
                      </div>
                      <div className="col-12">
                        <label for="productCategory" className="form-label">
                          Product Category
                        </label>
                        <select className="form-select" id="productCategory" required>
                          <option value="" selected disabled>
                            Select a category
                          </option>
                          <option>Smartphones & Mobile Devices</option>
                          <option>Computers & Laptops</option>
                          <option>Audio & Headphones</option>
                          <option>Wearable Technology</option>
                          <option>Cameras & Photography</option>
                          <option>Gaming Equipment</option>
                          <option>Smart Home Devices</option>
                          <option>Accessories & Peripherals</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label for="partnershipLevel" className="form-label">
                          Preferred Partnership Level
                        </label>
                        <select className="form-select" id="partnershipLevel" required>
                          <option value="" selected disabled>
                            Select a level
                          </option>
                          <option>Silver Partner</option>
                          <option>Gold Partner</option>
                          <option>Premium Partner</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label for="message" className="form-label">
                          Additional Information
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows="4"
                          placeholder="Tell us about your products and partnership goals"
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="terms" required />
                          <label className="form-check-label" for="terms">
                            I agree to the{" "}
                            <a href="#" className="text-primary">
                              Terms and Conditions
                            </a>{" "}
                            and
                            <a href="#" className="text-primary">
                              Privacy Policy
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary btn-lg px-5 rounded-5">
                          Submit Application
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
              <p className="lead text-muted">Common questions about our partnership program</p>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto rounded-4">
              <div className="accordion rounded-4" id="partnershipFAQ">
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
                      What are the requirements to become a TechTrend partner?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#partnershipFAQ">
                    <div className="accordion-body">
                      <p>
                        To become a TechTrend partner, your company should have established products in the tech industry with a focus on quality and
                        innovation. We look for partners who share our commitment to customer satisfaction and have a good reputation in the market.
                        The specific requirements vary by partnership level, but all partners must complete our application process and pass our
                        product quality assessment.
                      </p>
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
                      How long does the application process take?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#partnershipFAQ">
                    <div className="accordion-body">
                      <p>
                        The application process typically takes 2-4 weeks from submission to approval. This includes initial review, product
                        assessment, and partnership agreement negotiation. For Premium Partnership applications, the process may take longer due to
                        the more comprehensive evaluation process. We'll keep you updated throughout each stage of the application process.
                      </p>
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
                      Can I upgrade my partnership level later?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#partnershipFAQ">
                    <div className="accordion-body">
                      <p>
                        Yes, you can upgrade your partnership level at any time during your partnership term. Many partners start at the Silver level
                        and upgrade as they see the benefits of the program. Upgrades take effect immediately, and we'll prorate the difference in
                        partnership fees. To upgrade, simply contact your account manager or our partnership team.
                      </p>
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
                      What marketing support does TechTrend provide to partners?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#partnershipFAQ">
                    <div className="accordion-body">
                      <p>
                        Our marketing support varies by partnership level but includes product listings on our website and retail locations, inclusion
                        in email campaigns, social media promotion, and co-branded marketing materials. Gold and Premium partners receive additional
                        benefits such as featured product placement, dedicated email campaigns, and participation in our tech showcase events. Our
                        marketing team works closely with partners to create customized promotional strategies.
                      </p>
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
                      How are partnership fees structured?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#partnershipFAQ">
                    <div className="accordion-body">
                      <p>
                        Partnership fees are structured as annual payments, with options for quarterly installments for Gold and Premium partners. The
                        fees cover the administrative costs of the program, marketing support, and access to our customer base. In addition to the
                        base partnership fee, we operate on a revenue-sharing model for product sales, with partners receiving competitive commission
                        rates based on their partnership level.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="lead">Still have questions about our partnership program?</p>
              <a href="contact" className="btn btn-primary">
                {" "}
                <i className="bi bi-chat-dots-fill me-2"></i>Contact Our Partnership Team{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
