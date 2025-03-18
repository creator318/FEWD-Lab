import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  const API_KEY = "699be33038c1e362f19f80b8c8151005"; // Replace with your API key

  // List of 10 Indian cities
  const indianCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur"];

  const fetchWeather = async (city) => {
    if (!city && !selectedCity) return; // Don't fetch if no city is selected
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city || selectedCity}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top rounded-bottom-5 shadow-sm">
        <div className="container rounded-5">
          <Link className="navbar-brand fw-bold" to="/">
            <i className="bi bi-lightning-charge-fill me-2"></i>TechTrend
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/partners">
                  Partners
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              {/* Weather Dropdown and Display */}
              <div className="me-3">
                <div className="input-group">
                  <select
                    className="form-select rounded-5"
                    value={selectedCity}
                    onChange={(e) => {
                      setSelectedCity(e.target.value);
                      fetchWeather(e.target.value);
                    }}
                  >
                    <option value="">Select a city</option>
                    {indianCities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {error && (
                <div className="text-light me-3">
                  <small>{error}</small>
                </div>
              )}
              {loading && (
                <div className="text-light me-3">
                  <small>Loading...</small>
                </div>
              )}
              {weather && (
                <div className="text-light me-3">
                  <i className="bi bi-cloud-sun-fill me-1"></i>
                  {weather.main.temp}°C, {weather.weather[0].description}
                </div>
              )}
              <button className="btn btn-outline-light me-2 rounded-5" data-bs-toggle="modal" data-bs-target="#loginModal">
                <i className="bi bi-person-fill me-1"></i>Login
              </button>
              <button className="btn btn-warning rounded-5">
                <i className="bi bi-cart-fill me-1"></i>Cart <span className="badge bg-danger">3</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-5">
            <div className="modal-header bg-primary text-white rounded-top-5">
              <h5 className="modal-title" id="loginModalLabel">
                Login to Your Account
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text rounded-start-5">
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                    <input type="email" className="form-control rounded-end-5" id="email" placeholder="name@example.com" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text rounded-start-5">
                      <i className="bi bi-key-fill"></i>
                    </span>
                    <input type="password" className="form-control rounded-end-5" id="password" required />
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" for="rememberMe">
                    Remember me
                  </label>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary rounded-5">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <a href="#" className="text-decoration-none">
                  Forgot password?
                </a>
                <hr />
                <p className="mb-0">Don't have an account?</p>
                <button className="btn btn-success mt-2 rounded-5">Create New Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
