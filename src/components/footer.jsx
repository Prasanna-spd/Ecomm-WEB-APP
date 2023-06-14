import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="footer container-fluid mt-4  ">
      <footer class="py-2">
        <div class="row ">
          <div class="col-6 col-md-2 mb-3 ">
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

          <div class="col-6 col-md-2 mb-3">
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

          <div class="col-6 col-md-2 mb-3">
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

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
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

        <div class="d-flex flex-column flex-sm-row justify-content-between">
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
