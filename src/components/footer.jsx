import React from "react";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <div>
        <h1>Modify</h1>
        <p>Wear the code.</p>
        <p>Premium coding T-shirts,hoodies,apprals.</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div>
          <h3>Shop</h3>
          <ul>
            <li>T-Shirts</li>
            <li>SweatShirts</li>
            <li>Hoodies</li>
            <li>Jackets</li>
            <li>Caps</li>
          </ul>
        </div>
        <div>
          <h3>Customer Service</h3>
          <ul>
            <li>Contact us</li>
            <li>About us</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div>
          <h3>Policy</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
