import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="container-fluid mt-4 footer bg-danger border border-dark border-5">
      <footer class="py-2">
        <div class="row ">
          <div class="col-sm-12 col-md-2 mb-3 text-center text-lg-start">
            <h5>Shop</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <Link to="#" class="nav-link p-0 ">
                  T-Shirts
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link to="#" class="nav-link p-0 ">
                  SweatShirts
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link to="#" class="nav-link p-0 ">
                  Hoodies
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link to="#" class="nav-link p-0 ">
                  Jackets
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link to="#" class="nav-link p-0 ">
                  Caps
                </Link>
              </li>
            </ul>
          </div>

          <div class="col-sm-12 col-md-2 mb-3 text-center text-lg-start">
            <h5>Customer Service</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <Link to="#" class="nav-link p-0 ">
                  Contact us
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link to="#" class="nav-link p-0 ">
                  About us
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link to="#" class="nav-link p-0 ">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          <div class="col-sm-12 col-md-2 mb-3 text-center text-lg-start">
            <h5>Policy</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <Link to="#" class="nav-link p-0 ">
                  Privacy Policy
                </Link>
              </li>
              <li class="nav-item mb-2">
                <Link to="#" class="nav-link p-0 ">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div class="col-md-6 col-sm-12 mb-3 justify-content-center">
            <form>
              <h5 className="text-center">Subscribe to our newsletter</h5>
              <p className="text-center">
                Monthly digest of what's new and exciting from us.
              </p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column  justify-content-center align-items-center">
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
