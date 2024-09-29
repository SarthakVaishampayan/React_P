import React from "react";
import sv from "../assests/sv.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  let navbar_style = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "fixed",
    top: "5%",
    border: "0.001px solid black",
    left: "10%",
    opacity: "60%",
    height: "7vh",
    width: "80%",
    borderRadius: "25px",
    fontSize: "140%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };

  let menu = {
    justifyContent: "space-evenly",
    width: "40%",
  };
  let logo = {
    height: "35px",
    position: "relative",
    top: "2.5px",
  };
  return (
    <>
      <div className="App" style={navbar_style}>
        <div
          style={{
            position: "relative",
            left: "-90px",
          }}
          className="font flex"
        >
          <div>
            <img style={logo} src={sv} alt="SV" />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            Sarthak Vaishampayan
          </div>
        </div>
        <div style={menu} className="flex font">
          <Link></Link>
          <div>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/"
            >
              Home
            </Link>
          </div>
          
          
          <div>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/About"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/resume"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
