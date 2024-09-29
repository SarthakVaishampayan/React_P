import React from "react";
import pp3 from "../assests/pp3.png";

export default function About() {
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
    position: "fixed",
    right: "25vh",
  };
  return (
    <>
      <div style={home_content_style}>
        <div
          className="scrollable-div"
          style={{
            borderRadius: "60px",
            overflowY: "scroll",
            overflowX: "hidden",
            position: " relative",
            top: "4%",
            padding:"20px",
            // right: "10%",
            height: "120%",
            width: "85%",
            display: "grid",
            gridTemplateRows: " 35% 35% 35% 35% 35% 35% 35% 35% 35% 35% 35% 35% 5%",
            gridTemplateColumns: "48% 4% 48%",

            // border: " 2px solid black ",
          }}
        >
          <div className="font" style={{ gridRowStart: "1", gridRowEnd: "13",gridColumnStart: "2", gridColumnEnd: "3",display: "flex",justifyContent: "center" }}>
            <div style={{border: " 2px solid black ",width: "10% ",height:"100%",backgroundColor:"black",borderRadius: "50px"}}>

            </div>
           
          </div>
          <div className="font" style={{margin:"10px",borderRadius:"20px", gridRowStart: "1", gridRowEnd: "2",gridColumnStart: "1", gridColumnEnd: "2", border: " 2px solid black ", width:"60%",position:"relative",left:"35%" }}>
           
          </div>

          <div className="font" style={{ margin:"10px",borderRadius:"20px",gridRowStart: "2", gridRowEnd: "3",gridColumnStart: "3", gridColumnEnd: "4", border: " 2px solid black ", }}>
           
          </div>  
          <div className="font" style={{ margin:"10px",borderRadius:"20px",gridRowStart: "3", gridRowEnd: "4",gridColumnStart: "1", gridColumnEnd: "2", border: " 2px solid black ", }}>
           
          </div>

          <div className="font" style={{ margin:"10px",borderRadius:"20px",gridRowStart: "4", gridRowEnd: "5",gridColumnStart: "3", gridColumnEnd: "4", border: " 2px solid black ", }}>
           
          </div>  
          <div className="font" style={{ margin:"10px",borderRadius:"20px",gridRowStart: "5", gridRowEnd: "6",gridColumnStart: "1", gridColumnEnd: "2", border: " 2px solid black ", }}>
           
          </div>

          <div className="font" style={{ margin:"10px",borderRadius:"20px",gridRowStart: "6", gridRowEnd: "7",gridColumnStart: "3", gridColumnEnd: "4", border: " 2px solid black ", }}>
           
          </div>  
          <div className="font" style={{ margin:"10px",borderRadius:"20px",gridRowStart: "7", gridRowEnd: "8",gridColumnStart: "1", gridColumnEnd: "2", border: " 2px solid black ", }}>
           
          </div>

          <div className="font" style={{ margin:"10px",borderRadius:"20px",gridRowStart: "8", gridRowEnd: "9",gridColumnStart: "3", gridColumnEnd: "4", border: " 2px solid black ", }}>
           
          </div>  
          <div className="font" style={{ margin:"10px",borderRadius:"20px",gridRowStart: "9", gridRowEnd: "10",gridColumnStart: "1", gridColumnEnd: "2", border: " 2px solid black ", }}>
           
          </div>

          <div className="font" style={{ margin:"10px",borderRadius:"20px",gridRowStart: "10", gridRowEnd: "11",gridColumnStart: "3", gridColumnEnd: "4", border: " 2px solid black ", }}>
           
          </div>  
          <div className="font" style={{ margin:"10px",borderRadius:"20px",gridRowStart: "11", gridRowEnd: "12",gridColumnStart: "1", gridColumnEnd: "2", border: " 2px solid black ", }}>
           
          </div>

          <div className="font" style={{ margin:"10px",borderRadius:"20px",gridRowStart: "12", gridRowEnd: "13",gridColumnStart: "3", gridColumnEnd: "4", border: " 2px solid black ", }}>
           
          </div>  
          
        </div>

        
      </div>
    </>
    // <div>Resume</div>
  );
}
