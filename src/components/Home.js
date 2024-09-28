import React from "react";
import pp3 from "../assests/pp3.png";

export default function Home() {
  let home_content_style = {
    display: "flex",
    alignItems: "center",
    //  border: "1px solid black",
    position: "relative",
    top: "20vh",
    height: "70vh",
    justifyContent: "space-around",
  };
  let img_home = {
    height: "60vh",
    position: "relative",
    right: "25vh",
  };

  return (
    <>
      <div style={home_content_style}>
        <div
          style={{
            height: "100%",
            width: "55%",
            display: "grid",
            gridTemplateRows: "25% 7% 10% 10% 10% 5% 10% 20%",
            gridTemplateColumns: "25% auto",
          }}
        >
          <div
            className="font"
            style={{
              fontSize: "x-large",
              gridRowStart: "2",
              gridRowEnd: "3",
              gridColumnStart: "2",
            }}
          >
            Hi! I'm Sarthak
          </div>
          <div
            className="font"
            style={{
              gridRowStart: "3",
              gridRowEnd: "6",
              gridColumnStart: "2",
              fontSize: "7vh",
            }}
          >
            I am a Web Developer and I enjoy designing websites
          </div>
          <div
            className="font"
            style={{
              gridRowStart: "7",
              gridRowEnd: "8",
              gridColumnStart: "2",
              // fontSize: "7vh",
            }}
          >
            <button className="font" style={{ fontSize: "small", height: "60%", width: "20%", backgroundColor: "#fff019", borderWidth: "0px", borderRadius: "5px" }}>Get in Touch</button>
          </div>
        </div>
        <div>
          <img style={img_home} src={pp3} alt="" />
        </div>
      </div>
    </>
  );
}
