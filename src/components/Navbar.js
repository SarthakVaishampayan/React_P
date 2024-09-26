import React from "react";

export default function Navbar() {
  let navbar_style = {
   
    display:"flex",
    alignItems: "center",
    position: "fixed",
    top: "5%",
    border: "0.001px solid black",
    left: "10%",
    opacity: "60%",
    height: "7vh",
    width: "80%",
    borderRadius: "30px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };
  return <div className="font" style={navbar_style}>
    <div  >Sarthak Vaishampayan</div>

  </div>;

}
