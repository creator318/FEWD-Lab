export default function About() {
  return (
    <div className="container pt-5">
      <h1 className="display-4 fw-bold mb-4">About Us</h1>
      <p className="lead mb-4">
        Welcome to TechTrend, your number one source for all things tech. We're dedicated to providing you the very best of gadgets, with an emphasis
        on quality, customer service, and uniqueness.
      </p>

      <header className="bg-secondary text-white py-5 rounded-5 px-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index" className="text-white text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
              <h1 className="display-4 fw-bold mb-4">Our Story</h1>
              <p className="lead mb-4">Learn about our journey, mission, and the team behind TechTrend's success.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="./images/work.jpg" className="img-fluid rounded shadow" alt="Our Mission" />
            </div>
            <div className="col-lg-6">
              <div className="badge bg-primary text-white mb-3 p-2">OUR MISSION</div>
              <h2 className="display-5 fw-bold mb-4">Bringing Innovation to Everyone</h2>
              <p className="lead mb-4">
                At TechTrend, we believe that cutting-edge technology should be accessible to everyone. Our mission is to provide high-quality tech
                products at competitive prices with exceptional customer service.
              </p>

              <div className="d-flex mb-3">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-primary bg-opacity-10 d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  >
                    <i className="bi bi-check2-circle text-primary fs-4"></i>
                  </div>
                </div>

                <div>
                  <h5>Quality Assurance</h5>
                  <p className="text-muted">All our products undergo rigorous testing to ensure they meet our high standards.</p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-primary bg-opacity-10 d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  >
                    <i className="bi bi-people text-primary fs-4"></i>
                  </div>
                </div>
                <div>
                  <h5>Customer-Centric Approach</h5>
                  <p className="text-muted">We put our customers first in everything we do, from product selection to after-sales support.</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-primary bg-opacity-10 d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  >
                    <i className="bi bi-globe text-primary fs-4"></i>
                  </div>
                </div>
                <div>
                  <h5>Global Reach</h5>
                  <p className="text-muted">We deliver to customers worldwide, bringing the latest tech to every corner of the globe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light text-dark rounded-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Our Core Values</h2>
              <p className="lead">The principles that guide everything we do</p>
              <hr className="w-25 mx-auto border-white" />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card bg-transparent border-white h-100">
                <div className="card-body text-center p-4">
                  <div className="bg-white rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-star-fill text-primary fs-1"></i>
                  </div>
                  <h4 className="card-title mb-3">Excellence</h4>
                  <p className="card-text">
                    We strive for excellence in everything we do, from product selection to customer service. We never settle for mediocrity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-transparent border-white h-100">
                <div className="card-body text-center p-4">
                  <div className="bg-white rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-shield-check text-primary fs-1"></i>
                  </div>
                  <h4 className="card-title mb-3">Integrity</h4>
                  <p className="card-text">
                    We operate with honesty, transparency, and ethical standards. We build trust through every interaction and transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-transparent border-white h-100">
                <div className="card-body text-center p-4">
                  <div className="bg-white rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-lightbulb-fill text-primary fs-1"></i>
                  </div>
                  <h4 className="card-title mb-3">Innovation</h4>
                  <p className="card-text">
                    We embrace change and continuously seek new ways to improve our products, services, and customer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 rounded-5">
                <div className="card-body text-center p-4">
                  <div className="display-4 fw-bold text-primary mb-2">50+</div>
                  <h5 className="card-title">Retail Stores</h5>
                  <p className="card-text text-muted">Across North America, Europe, and Asia</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 rounded-5">
                <div className="card-body text-center p-4">
                  <div className="display-4 fw-bold text-primary mb-2">1M+</div>
                  <h5 className="card-title">Happy Customers</h5>
                  <p className="card-text text-muted">Satisfied tech enthusiasts worldwide</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 rounded-5">
                <div className="card-body text-center p-4">
                  <div className="display-4 fw-bold text-primary mb-2">5K+</div>
                  <h5 className="card-title">Products</h5>
                  <p className="card-text text-muted">Curated selection of premium tech</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 rounded-5">
                <div className="card-body text-center p-4">
                  <div className="display-4 fw-bold text-primary mb-2">24/7</div>
                  <h5 className="card-title">Customer Support</h5>
                  <p className="card-text text-muted">Always available to assist you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light rounded-5 mb-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">What People Say About Us</h2>
              <p className="lead text-muted">Testimonials from our valued customers and partners</p>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow rounded-5">
                <div className="card-body p-0">
                  <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="p-5 text-center">
                          <i className="bi bi-quote fs-1 text-primary opacity-25 mb-3"></i>
                          <p className="lead fst-italic mb-4">
                            "TechTrend has been our go-to tech retailer for years. Their product knowledge, customer service, and after-sales support
                            are unmatched in the industry."
                          </p>
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              src="https://source.unsplash.com/random/60x60/?man"
                              className="rounded-circle me-3"
                              width="60"
                              height="60"
                              alt="Customer"
                            />
                            <div className="text-start">
                              <h5 className="mb-1">Elon Musk</h5>
                              <p className="mb-0 text-muted">CEO, Stanford Solutions Inc.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="p-5 text-center">
                          <i className="bi bi-quote fs-1 text-primary opacity-25 mb-3"></i>
                          <p className="lead fst-italic mb-4">
                            "We partnered with TechTrend to launch our latest product line, and the results have been phenomenal. Their marketing
                            expertise and global reach are second to none."
                          </p>
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              src="https://source.unsplash.com/random/60x60/?man"
                              className="rounded-circle me-3"
                              width="60"
                              height="60"
                              alt="Partner"
                            />
                            <div className="text-start">
                              <h5 className="mb-1">Jeff Bezos</h5>
                              <p className="mb-0 text-muted">CMO, Amazon</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
