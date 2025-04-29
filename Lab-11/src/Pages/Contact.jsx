import ContactForm from "../Components/ContactForm";

export default function Contact() {
  return (
    <div>
      <header className="bg-secondary text-white py-5 mt-2 mx-5 rounded-5">
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
                    Contact Us
                  </li>
                </ol>
              </nav>
              <h1 className="display-4 fw-bold mb-4">Get in Touch</h1>
              <p className="lead mb-4">We'd love to hear from you! Reach out with questions, feedback, or support requests.</p>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card bg-primary text-white h-100 rounded-5">
                    <div className="card-body p-4 text-center">
                      <i className="bi bi-headset display-4 mb-3"></i>
                      <h4>Customer Support</h4>
                      <p className="mb-0">We're here to help with any questions about our products or services.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-success text-white h-100 rounded-5">
                    <div className="card-body p-4 text-center">
                      <i className="bi bi-shop display-4 mb-3"></i>
                      <h4>Visit Our Stores</h4>
                      <p className="mb-0">Experience our products in person at one of our retail locations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center rounded-5">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-geo-alt-fill fs-1 text-primary"></i>
                  </div>
                  <h4 className="card-title">Our Location</h4>
                  <p className="card-text">
                    123 Tech Street
                    <br />
                    Silicon Valley, CA 94043
                    <br />
                    United States
                  </p>
                  <a href="https://maps.google.com" target="_blank" className="btn btn-outline-primary mt-3 rounded-4">
                    <i className="bi bi-map me-2"></i>Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center rounded-5">
                <div className="card-body p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-telephone-fill fs-1 text-success"></i>
                  </div>
                  <h4 className="card-title">Phone Numbers</h4>
                  <p className="card-text">
                    Sales: +1 (555) 123-4567
                    <br />
                    Support: +1 (555) 987-6543
                    <br />
                    Fax: +1 (555) 456-7890
                  </p>
                  <a href="tel:+15551234567" className="btn btn-outline-success mt-3 rounded-4">
                    {" "}
                    <i className="bi bi-telephone me-2"></i>Call Us{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center rounded-5">
                <div className="card-body p-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-envelope-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="card-title">Email Us</h4>
                  <p className="card-text">
                    General: info@techtrend.com
                    <br />
                    Support: support@techtrend.com
                    <br />
                    Sales: sales@techtrend.com
                  </p>
                  <a href="mailto:info@techtrend.com" className="btn btn-outline-danger mt-3 rounded-4">
                    {" "}
                    <i className="bi bi-envelope me-2"></i>Send Email{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center rounded-5">
                <div className="card-body p-4">
                  <div className="bg-info bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-clock-fill fs-1 text-info"></i>
                  </div>
                  <h4 className="card-title">Business Hours</h4>
                  <p className="card-text">
                    Monday - Friday: 9AM - 6PM
                    <br />
                    Saturday: 10AM - 4PM
                    <br />
                    Sunday: Closed
                  </p>
                  <button className="btn btn-outline-info mt-3 rounded-4" data-bs-toggle="modal" data-bs-target="#hoursModal">
                    <i className="bi bi-info-circle me-2"></i>More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="hoursModal" tabindex="-1" aria-labelledby="hoursModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title" id="hoursModalLabel">
                Detailed Business Hours
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Weekdays</th>
                    <th>Weekend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sales</td>
                    <td>9AM - 6PM</td>
                    <td>10AM - 4PM (Sat)</td>
                  </tr>
                  <tr>
                    <td>Customer Support</td>
                    <td>8AM - 8PM</td>
                    <td>10AM - 2PM (Sat)</td>
                  </tr>
                  <tr>
                    <td>Technical Service</td>
                    <td>9AM - 5PM</td>
                    <td>Closed</td>
                  </tr>
                  <tr>
                    <td>Returns & Exchanges</td>
                    <td>9AM - 5PM</td>
                    <td>10AM - 2PM (Sat)</td>
                  </tr>
                  <tr>
                    <td>General Inquiries</td>
                    <td>9AM - 6PM</td>
                    <td>10AM - 4PM (Sat)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <ContactForm/>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h2 className="fw-bold mb-4">Our Location</h2>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="rounded-5"
                    width="100%"
                    height="480"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Silicon%20Valley%2C%20CA%2094043&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
