export default function Gallery() {
  return (
    <div className="container pt-5">
      <h1 className="display-4 fw-bold mb-4">Gallery</h1>
      <p className="lead mb-4">Take a look at our latest products and events. We love to share our journey with you.</p>

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
                    Gallery
                  </li>
                </ol>
              </nav>
              <h1 className="display-4 fw-bold mb-4">Product Gallery</h1>
              <p className="lead mb-4">Explore our products through high-quality images and videos.</p>
            </div>
            <div className="col-lg-6">
              <img src="https://source.unsplash.com/random/600x400/?tech-gallery" className="img-fluid rounded shadow-lg" alt="Gallery" />
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-pills justify-content-center mb-4" id="galleryTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active mx-1 rounded-4"
                    id="all-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#all"
                    type="button"
                    role="tab"
                    aria-controls="all"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link mx-1 rounded-4"
                    id="smartphones-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#smartphones"
                    type="button"
                    role="tab"
                    aria-controls="smartphones"
                    aria-selected="false"
                  >
                    Smartphones
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link mx-1 rounded-4"
                    id="laptops-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#laptops"
                    type="button"
                    role="tab"
                    aria-controls="laptops"
                    aria-selected="false"
                  >
                    Laptops
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link mx-1 rounded-4"
                    id="audio-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#audio"
                    type="button"
                    role="tab"
                    aria-controls="audio"
                    aria-selected="false"
                  >
                    Audio
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link mx-1 rounded-4"
                    id="wearables-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#wearables"
                    type="button"
                    role="tab"
                    aria-controls="wearables"
                    aria-selected="false"
                  >
                    Wearables
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link mx-1 rounded-4"
                    id="accessories-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#accessories"
                    type="button"
                    role="tab"
                    aria-controls="accessories"
                    aria-selected="false"
                  >
                    Accessories
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="tab-content" id="galleryTabContent">
            <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?smartphone" className="card-img-top" alt="Smartphone" />
                    <div className="card-body">
                      <h5 className="card-title">Latest Smartphones</h5>
                      <p className="card-text">Explore our collection of cutting-edge smartphones with advanced features.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal1">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?laptop" className="card-img-top" alt="Laptop" />
                    <div className="card-body">
                      <h5 className="card-title">Premium Laptops</h5>
                      <p className="card-text">Powerful computing solutions for work, gaming, and creative professionals.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal2">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?headphones" className="card-img-top" alt="Headphones" />
                    <div className="card-body">
                      <h5 className="card-title">Audio Solutions</h5>
                      <p className="card-text">Immersive sound experiences with our premium headphones and speakers.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal3">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?smartwatch" className="card-img-top" alt="Smartwatch" />
                    <div className="card-body">
                      <h5 className="card-title">Wearable Tech</h5>
                      <p className="card-text">Stay connected and track your fitness with our smartwatches and trackers.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal4">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?camera" className="card-img-top" alt="Camera" />
                    <div className="card-body">
                      <h5 className="card-title">Photography Gear</h5>
                      <p className="card-text">Capture life's moments with our selection of cameras and accessories.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal5">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?gaming" className="card-img-top" alt="Gaming" />
                    <div className="card-body">
                      <h5 className="card-title">Gaming Equipment</h5>
                      <p className="card-text">Level up your gaming experience with our consoles and accessories.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal6">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?tablet" className="card-img-top" alt="Tablet" />
                    <div className="card-body">
                      <h5 className="card-title">Tablets & E-Readers</h5>
                      <p className="card-text">Portable computing and reading solutions for work and leisure.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal7">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?drone" className="card-img-top" alt="Drone" />
                    <div className="card-body">
                      <h5 className="card-title">Drones & Robotics</h5>
                      <p className="card-text">Explore the skies and automate tasks with our drones and robots.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal8">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?printer" className="card-img-top" alt="Printer" />
                    <div className="card-body">
                      <h5 className="card-title">Printers & Scanners</h5>
                      <p className="card-text">High-quality printing and scanning solutions for home and office use.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal9">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="smartphones" role="tabpanel" aria-labelledby="smartphones-tab">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?smartphone" className="card-img-top" alt="Smartphone" />
                    <div className="card-body">
                      <h5 className="card-title">Latest Smartphones</h5>
                      <p className="card-text">Explore our collection of cutting-edge smartphones with advanced features.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal1">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="laptops" role="tabpanel" aria-labelledby="laptops-tab">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?laptop" className="card-img-top" alt="Laptop" />
                    <div className="card-body">
                      <h5 className="card-title">Premium Laptops</h5>
                      <p className="card-text">Powerful computing solutions for work, gaming, and creative professionals.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal2">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="audio" role="tabpanel" aria-labelledby="audio-tab">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?headphones" className="card-img-top" alt="Headphones" />
                    <div className="card-body">
                      <h5 className="card-title">Audio Solutions</h5>
                      <p className="card-text">Immersive sound experiences with our premium headphones and speakers.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal3">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="wearables" role="tabpanel" aria-labelledby="wearables-tab">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?smartwatch" className="card-img-top" alt="Smartwatch" />
                    <div className="card-body">
                      <h5 className="card-title">Wearable Tech</h5>
                      <p className="card-text">Stay connected and track your fitness with our smartwatches and trackers.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal4">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="accessories" role="tabpanel" aria-labelledby="accessories-tab">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img src="https://source.unsplash.com/random/600x400/?camera" className="card-img-top" alt="Camera" />
                    <div className="card-body">
                      <h5 className="card-title">Photography Gear</h5>
                      <p className="card-text">Capture life's moments with our selection of cameras and accessories.</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-sm btn-primary rounded-4" data-bs-toggle="modal" data-bs-target="#galleryModal5">
                        <i className="bi bi-zoom-in me-2"></i>View Larger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="galleryModal1" tabindex="-1" aria-labelledby="galleryModal1Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="galleryModal1Label">
                Latest Smartphones
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="https://source.unsplash.com/random/600x400/?smartphone" className="img-fluid" alt="Smartphone" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="galleryModal2" tabindex="-1" aria-labelledby="galleryModal2Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="galleryModal2Label">
                Premium Laptops
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="https://source.unsplash.com/random/600x400/?laptop" className="img-fluid" alt="Laptop" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="galleryModal3" tabindex="-1" aria-labelledby="galleryModal3Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="galleryModal3Label">
                Audio Solutions
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="https://source.unsplash.com/random/600x400/?headphones" className="img-fluid" alt="Headphones" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="galleryModal4" tabindex="-1" aria-labelledby="galleryModal4Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="galleryModal4Label">
                Wearable Tech
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="https://source.unsplash.com/random/600x400/?smartwatch" className="img-fluid" alt="Smartwatch" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="galleryModal5" tabindex="-1" aria-labelledby="galleryModal5Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="galleryModal5Label">
                Photography Gear
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="https://source.unsplash.com/random/600x400/?camera" className="img-fluid" alt="Camera" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="galleryModal6" tabindex="-1" aria-labelledby="galleryModal6Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="galleryModal6Label">
                Gaming Equipment
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="https://source.unsplash.com/random/600x400/?gaming" className="img-fluid" alt="Gaming" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="galleryModal7" tabindex="-1" aria-labelledby="galleryModal7Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="galleryModal7Label">
                Tablets & E-Readers
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="https://source.unsplash.com/random/600x400/?tablet" className="img-fluid" alt="Tablet" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="galleryModal8" tabindex="-1" aria-labelledby="galleryModal8Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="galleryModal8Label">
                Drones & Robotics
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="https://source.unsplash.com/random/600x400/?drone" className="img-fluid" alt="Drone" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="galleryModal9" tabindex="-1" aria-labelledby="galleryModal9Label" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="galleryModal9Label">
                Printers & Scanners
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="https://source.unsplash.com/random/600x400/?printer" className="img-fluid" alt="Printer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
