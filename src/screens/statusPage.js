import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function StatusPage() {
  return (
    <div>
      <div className="navbaaar">
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div>
          <p className="text-center fs-1">
            404 Page Not Found.
            <br />
            OR
          </p>
          <p className="text-center fs-1">Backend Under Progress</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StatusPage;
