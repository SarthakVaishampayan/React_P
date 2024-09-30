import React from "react";
import pp3 from "../assests/pp3.png";

export default function About() {
  let home_content_style = {
    display: "flex",
    alignItems: "center",
    //  border: "1px solid black",
    position: "relative",
    top: "16vh",
    height: "70vh",
    justifyContent: "space-around",
  };
  let img_home = {
    height: "60vh",
    position: "fixed",
    right: "25vh",
  };
  function expandL(e) {
    console.log(e.target);

    // let divExpand = document.getElementById("expand");
    if (e.target.classList.contains("expandClassL")) {
      e.target.classList.remove("expandClassL");
      e.target.classList.add("minimizeClassL");
    } else if (e.target.classList.contains("font")) {
      e.target.classList.add("expandClassL");
      e.target.classList.remove("minimizeClassL");
    }
  }
  function expandR(e) {
    console.log(e.target);

    // let divExpand = document.getElementById("expand");
    if (e.target.classList.contains("expandClassR")) {
      e.target.classList.remove("expandClassR");
      e.target.classList.add("minimizeClassR");
    } else if (e.target.classList.contains("font")) {
      e.target.classList.add("expandClassR");
      e.target.classList.remove("minimizeClassR");
    }
  }
  function minimize(e) {
    if (e.target.classList.contains("expandClassR")) {
      e.target.classList.remove("expandClassR");
      e.target.classList.add("minimizeClassR");
    }
  }

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
            top: "10%",
            padding: "20px",
            // right: "10%",
            height: "120%",
            width: "85%",
            display: "grid",
            gridTemplateRows:
              " 35% 35% 35% 35% 35% 35% 35% 35% ",
            gridTemplateColumns: "48% 4% 48%",

            // border: " 2px solid black ",
          }}
        >
          <div
            className="font"
            style={{
              gridRowStart: "1",
              gridRowEnd: "13",
              gridColumnStart: "2",
              gridColumnEnd: "3",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <div style={{height:"100%",width: "100%"}}></div> */}
            <div
              style={{
                border: " 2px solid black ",
                width: "5% ",
                height: "100%",
                backgroundColor: "black",
                borderRadius: "50px",
              }}
            ></div>
          </div>
          <div
            className="font  magnify-div"
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "1",
              gridRowEnd: "2",
              gridColumnStart: "1",
              gridColumnEnd: "2",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "35%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                gridRowStart: "2",
                gridRowEnd: "3",
                gridColumnStart: "1",
                gridColumnEnd: "2",
              }}
            >
              Velocity
            </p>
            <p
              style={{
                fontSize: "1rem",
                gridRowStart: "3",
                gridRowEnd: "4",
                gridColumnStart: "1",
                gridColumnEnd: "2",
              }}
            >
              Event Coordinator{" "}
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                gridRowStart: "4",
                gridRowEnd: "5",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
            >
              Velocity was an exciting RC racing event, bringing together
              enthusiasts for high-speed action and competitive
              remote-controlled racing.
              <br />
              As the convener of Velocity, I efficiently managed logistics,
              ensuring seamless operations and fostering collaboration among all
              stakeholders.{" "}
            </p>
          </div>
          <div
            className="font"
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "1",
              gridRowEnd: "1",
              gridColumnStart: "3",
              gridColumnEnd: "4",
              // border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "1%",
              display: "flex",
              alignItems:"center",
              fontSize:"1.5rem",
              
              backgroundColor: "white",
            }}
          >23rd February 2023</div>

          <div
            className="font magnify-div  "
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "2",
              gridRowEnd: "3",
              gridColumnStart: "3",
              gridColumnEnd: "4",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "1%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                gridRowStart: "2",
                gridRowEnd: "3",
                gridColumnStart: "1",
                gridColumnEnd: "4",
              }}
            >
              ACM India Chapter Summit
            </p>
            <p
              style={{
                fontSize: "1rem",
                gridRowStart: "3",
                gridRowEnd: "4",
                gridColumnStart: "1",
                gridColumnEnd: "2",
              }}
            >
              Student Coordinator
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                gridRowStart: "4",
                gridRowEnd: "5",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
            >
              The ACM India Chapter Summit'23 was a premier gathering of tech
              innovators and leaders, spotlighting advancements in computing and
              sparking visionary discussions on future technologies.
              <br />
              As the Student Coordinator for the ACM India Chapter Summit'23, I
              led event execution, ensuring smooth coordination between
              production and operations, optimizing workflows to deliver a
              high-impact experience.
            </p>
          </div>
          <div
            className="font"
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "2",
              gridRowEnd: "3",
              gridColumnStart: "1",
              gridColumnEnd: "2",
              // border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "35%",
              display: "flex",
              alignItems:"center",
              justifyContent:"flex-end",
              fontSize:"1.5rem",
              
              backgroundColor: "white",
            }}
          >21-22 December 2023</div>
          <div
            className="font magnify-div "
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "3",
              gridRowEnd: "4",
              gridColumnStart: "1",
              gridColumnEnd: "2",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "35%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                gridRowStart: "2",
                gridRowEnd: "3",
                gridColumnStart: "1",
                gridColumnEnd: "4",
              }}
            >
              ISDS'23
            </p>
            <p
              style={{
                fontSize: "1rem",
                gridRowStart: "3",
                gridRowEnd: "4",
                gridColumnStart: "1",
                gridColumnEnd: "2",
              }}
            >
              Student Coordinator
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                gridRowStart: "4",
                gridRowEnd: "5",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
            >
              ISDS ISDS'23 united global experts in Data Science, featuring
              cutting-edge discussions and transformative insights shaping the
              future of AI and analytics.
              <br />
              As Student Coordinator for ISDS 2023, I managed event production
              and technical coordination, delivering a seamless and impactful
              experience.
            </p>
          </div>
          <div
            className="font"
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "3",
              gridRowEnd: "4",
              gridColumnStart: "3",
              gridColumnEnd: "4",
              // border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "1%",
              display: "flex",
              alignItems:"center",
              fontSize:"1.5rem",
              
              backgroundColor: "white",
            }}
          >8-9 November 2023</div>

          <div
            className="font magnify-div "
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "4",
              gridRowEnd: "5",
              gridColumnStart: "3",
              gridColumnEnd: "4",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "1%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                gridRowStart: "2",
                gridRowEnd: "3",
                gridColumnStart: "1",
                gridColumnEnd: "4",
              }}
            >
              TEDxMUJ'23
            </p>
            <p
              style={{
                fontSize: "1rem",
                gridRowStart: "3",
                gridRowEnd: "4",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
            >
              Core Committee Productions & Operations
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                gridRowStart: "4",
                gridRowEnd: "5",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
            >
              TEDx X MUJ brought together visionary speakers, igniting
              innovative ideas and fostering creativity to inspire impactful
              change in the community.
              <br />
              As the CC - Productions X Operations for TEDx X MUJ, I led the
              seamless coordination of event logistics and production. I ensured
              a flawless experience by streamlining operations and managing
              critical workflows, delivering an engaging and impactful event.
            </p>
          </div>
          <div
            className="font"
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "4",
              gridRowEnd: "5",
              gridColumnStart: "1",
              gridColumnEnd: "2",
              // border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "35%",
              display: "flex",
              alignItems:"center",
              justifyContent:"flex-end",
              fontSize:"1.5rem",
              
              backgroundColor: "white",
            }}
          >28th October 2023</div>
          <div
            className="font magnify-div "
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "5",
              gridRowEnd: "6",
              gridColumnStart: "1",
              gridColumnEnd: "2",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "35%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                gridRowStart: "2",
                gridRowEnd: "3",
                gridColumnStart: "1",
                gridColumnEnd: "4",
              }}
            >
              Elicit'23
            </p>
            <p
              style={{
                fontSize: "1rem",
                gridRowStart: "3",
                gridRowEnd: "4",
                gridColumnStart: "1",
                gridColumnEnd: "2",
              }}
            >
              Core Committee Operations
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                gridRowStart: "4",
                gridRowEnd: "5",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
            >
              Elicit, the flagship techno-cultural fest of the MUJ ACM Chapter,
              fused technology and culture, showcasing innovation and dynamic
              performances to inspire creativity and collaboration.
              <br />
              As the CC - Operations for Elicit, I managed logistics and
              coordinated resources for seamless event execution, enhancing
              participant engagement and collaboration.
            </p>
          </div>
          <div
            className="font"
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "5",
              gridRowEnd: "6",
              gridColumnStart: "3",
              gridColumnEnd: "4",
              // border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "1%",
              display: "flex",
              alignItems:"center",
              fontSize:"1.5rem",
              
              backgroundColor: "white",
            }}
          >30th September-2nd October 2023</div>

          <div
            className="font magnify-div "
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "6",
              gridRowEnd: "7",
              gridColumnStart: "3",
              gridColumnEnd: "4",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "1%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                gridRowStart: "2",
                gridRowEnd: "3",
                gridColumnStart: "1",
                gridColumnEnd: "4",
              }}
            >
              MUJ ACM
            </p>
            <p
              style={{
                fontSize: "1rem",
                gridRowStart: "3",
                gridRowEnd: "4",
                gridColumnStart: "1",
                gridColumnEnd: "2",
              }}
            >
              Deputy Secretary
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                gridRowStart: "4",
                gridRowEnd: "5",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
            >
              As the Deputy Secretary of MUJ ACM SIGBED, I spearheaded the cultivation of relationships with over 30 industry experts and academic leaders, enhancing networking opportunities and elevating the chapter's prominence by 25%. Additionally, I played a key role in executing 10+ strategic initiatives, resulting in a 40% surge in organizational growth and strategic influence.
            </p>
          </div>
          <div
            className="font"
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "6",
              gridRowEnd: "7",
              gridColumnStart: "1",
              gridColumnEnd: "2",
              // border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "35%",
              display: "flex",
              alignItems:"center",
              justifyContent:"flex-end",
              fontSize:"1.5rem",
              
              backgroundColor: "white",
            }}
          >22 April 2023</div>
          <div
            className="font magnify-div "
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "7",
              gridRowEnd: "8",
              gridColumnStart: "1",
              gridColumnEnd: "2",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "35%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                gridRowStart: "2",
                gridRowEnd: "3",
                gridColumnStart: "1",
                gridColumnEnd: "4",
              }}
            >
              Autobots'23
            </p>
            <p
              style={{
                fontSize: "1rem",
                gridRowStart: "3",
                gridRowEnd: "4",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
            >
              Core Committee Events & Operations
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                gridRowStart: "4",
                gridRowEnd: "5",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
            >
              Autobots was an exciting obstacle avoidance robot racing event
              that challenged participants to design innovative autonomous
              robots, fostering teamwork and creativity in navigating complex
              courses.
              <br />
              As the CC - Events & Operations for Autobots, I managed logistics
              and coordinated teams to ensure a seamless and engaging experience
              for participants.
            </p>
          </div>
          <div
            className="font"
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "7",
              gridRowEnd: "8",
              gridColumnStart: "3",
              gridColumnEnd: "4",
              // border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "1%",
              display: "flex",
              alignItems:"center",
              fontSize:"1.5rem",
              
              backgroundColor: "white",
            }}
          >2nd April 2023</div>

          <div
            className="font magnify-div "
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "8",
              gridRowEnd: "9",
              gridColumnStart: "3",
              gridColumnEnd: "4",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "1%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                gridRowStart: "2",
                gridRowEnd: "3",
                gridColumnStart: "1",
                gridColumnEnd: "4",
              }}
            >
              Sigfest
            </p>
            <p
              style={{
                fontSize: "1rem",
                gridRowStart: "3",
                gridRowEnd: "4",
                gridColumnStart: "1",
                gridColumnEnd: "2",
              }}
            >
              Organising Committee
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                gridRowStart: "4",
                gridRowEnd: "5",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
            >
              Sigfest was the flagship technical fest of MUJ ACM SIGAI & SIGBED, featuring workshops, hackathons, and competitions in AI and embedded systems.
              <br />
              As OC Operations for Sigfest,I managed logistics, coordinated teams, and ensured smooth event execution.
            </p>
          </div>
          <div
            className="font"
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "8",
              gridRowEnd: "9",
              gridColumnStart: "1",
              gridColumnEnd: "2",
              // border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "35%",
              display: "flex",
              alignItems:"center",
              justifyContent:"flex-end",
              fontSize:"1.5rem",
              
              backgroundColor: "white",
            }}
          >2-4 March 2023</div>
          {/* <div
            className="font magnify-div "
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "9",
              gridRowEnd: "10",
              gridColumnStart: "1",
              gridColumnEnd: "2",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "35%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          ></div> */}

          {/* <div
            className="font magnify-div "
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "10",
              gridRowEnd: "11",
              gridColumnStart: "3",
              gridColumnEnd: "4",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "1%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          ></div>
          <div
            className="font magnify-div "
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "11",
              gridRowEnd: "12",
              gridColumnStart: "1",
              gridColumnEnd: "2",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "35%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          ></div>

          <div
            className="font  "
            style={{
              margin: "10px",
              borderRadius: "20px",
              gridRowStart: "12",
              gridRowEnd: "13",
              gridColumnStart: "3",
              gridColumnEnd: "4",
              border: " 2px solid black ",
              width: "60%",
              position: "relative",
              left: "1%",
              display: "grid",
              gridTemplateRows: " 15% 15% 20% 60%",
              gridTemplateColumns: "50% 50%",
              backgroundColor: "white",
            }}
          ></div> */}
        </div>
      </div>
    </>
    // <div>Resume</div>
  );
}
