import React from "react";
import pp3 from "../assests/pp3.png";

export default function Resume() {
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
            borderRadius: "20px",
            overflowY: "scroll",
            overflowX: "hidden",
            position: " relative",
            top: "10%",
            right: "10%",
            height: "120%",
            width: "55%",
            display: "grid",
            gridTemplateRows: "27% 63% 80% 30%",
            gridTemplateColumns: "75% 35%",

            // border: " 2px solid black ",
          }}
        >
          <div className="font" style={{ gridRowStart: "1", gridRowEnd: "2" }}>
            <p style={{ fontSize: "1.5rem" }}>Education</p>
            <div style={{ fontSize: "0.9rem" }}>
              <p>
                Manipal University, Jaipur - B.Tech in Computer Science
                (2022-2026)
              </p>
              <p style={{ marginBottom: "4px" }}>CGPA: 8.03</p>
              <p>
                RKVM CBSE, Gwalior - Senior Secondary School of Education
                (2020-2021)
              </p>
              <p style={{ marginBottom: "4px" }}> Percentage: 94.4%</p>
              <p>
                Delhi Public School, Gwalior - Higher Secondary School of
                Education (2018-2019)
              </p>
              <p style={{ marginBottom: "4px" }}> Percentage: 93.2%</p>
            </div>
          </div>

          <div className="font" style={{ gridRowStart: "2", gridRowEnd: "3" }}>
            <p style={{ marginTop: "5%", fontSize: "1.5rem" }}>EXPERIENCE</p>
            <div style={{ fontSize: "0.7rem" }}>
              <p style={{ fontSize: "1rem" }}>
                Defense Research and Development Organization, Delhi (05/2024 -
                07/2024)
              </p>
              <ul>
             
                <p style={{ fontSize: "1rem", marginBottom: "4px" }}>Research and Development Intern</p>
              
                <p style={{ marginBottom: "20px" }}>
                  <li>
                    Pioneered the overhaul and optimization of the DRDO official
                    website's employee management platform, integrating
                    cutting-edge design innovations that enhanced user
                    experience for over 5,000 employees.
                  </li>
                  <li>
                    Directed the integration of interactive elements and
                    optimized functionalities into the website, which boosted
                    user retention for over 2,000 unique visitors monthly, while
                    strictly adhering to DRDO's established branding guidelines
                    and standards.
                  </li>
                  <li>
                    Orchestrated the entire web design initiative by
                    collaborating with UX/UI teams and developers; the revamped
                    site now supports over 15,000 daily visitors and has
                    improved page load times by 50%.
                  </li>
                </p>
              </ul>
              <p style={{ fontSize: "1rem" }}>
                Good Host Spaces, Jaipur 
                (07/2023 - 08/2023)
              </p>
              <ul>
                <p style={{ fontSize: "1rem", marginBottom: "4px" }}>Intern</p>
                <p>
                  <li>
                    Streamlined operational workflows at Good Host Spaces by
                    designing and implementing a new resource allocation system;
                    this revision improved task completion rates by 40% and
                    facilitated smoother daily operations across all departments
                  </li>

                  <li>
                    Formulated innovative project strategies that led to the
                    implementation of refined processes, optimizing resource
                    allocation; the strategies resulted in a time savings of
                    over 100 hours annually for the team.
                  </li>
                  <li>
                    Leveraged advanced database management methodologies to
                    meticulously organize and refine essential data, ensuring
                    precision and reliability for strategic decision-making
                    across 50+ critical data sets.
                  </li>
                </p>
              </ul>
            </div>
          </div>

          <div className="font" style={{ gridRowStart: "3", gridRowEnd: "4" }}>
            <p style={{ marginTop: "0%", fontSize: "1.5rem" }}>
              Personal Project
            </p>
            <div style={{ fontSize: "0.8rem" }}>
              <p style={{ fontSize: "1.2rem" }}>
                Inventory Management Interface
              </p>

              <p style={{ marginBottom: "20px" }}>
                <ul>
                  <li>
                    Integrated mliti-level management across manufacturers,
                    godowns, and franchise stores, streamlining the inventory
                    process for over 100+ electric bikes in tier 2, 3, and 4
                    cities.
                  </li>
                  <li>
                    Designed an adaptive customer-facing interface with a
                    customizable percentage bar, optimizing bike recommendations
                    based on user affordability, resliting in a 15% increase in
                    customer engagement.
                  </li>
                  <li>
                    Augmented order efficiency with separate order flows for
                    corporate and individual customers, reducing manual errors
                    in stock management by 20%.
                  </li>
                </ul>
              </p>
              <div style={{ fontSize: "0.8rem" }}>
                <p style={{ fontSize: "1.2rem" }}>
                  DRDO Employee Management System
                </p>
                <ul>
                  <p style={{ marginBottom: "20px" }}>
                    <li>
                      Architected and launched a high-performance web
                      application for DRDO (Defence Research and Development
                      Organization), optimizing employee management workflows
                      and enhancing operational efficiency.
                    </li>
                    <li>
                      Implemented advanced role-based access control and
                      comprehensive employee profile management functionalities,
                      enhancing system security and usability for over 5,000
                      users.
                    </li>

                    <li>
                      Augmented order efficiency with separate order flows for
                      corporate and individual customers, reducing manual errors
                      in stock management by 20%.
                    </li>
                  </p>
                </ul>
              </div>
              <div style={{ fontSize: "0.8rem" }}>
                <p style={{ fontSize: "1.2rem" }}>Personal Portfolio Website</p>
                <ul>
                  <p style={{ marginBottom: "20px" }}>
                    <li>
                      {" "}
                      Crafted an advanced personal portfolio website to
                      strategically highlight professional expertise, showcase
                      project milestones, and elevate career achievements,
                      resliting in a 30% increase in profile views.
                    </li>
                    <li>
                      Designed a modern and responsive layout using HTML5, CSS3
                      (including Flexbox and Grid for layout), and JavaScript.
                    </li>

                    <li>
                      Embedded interactive features, including dynamic showcases
                      for projects, comprehensive contact interfaces, and
                      seamless navigation animations, enhancing user engagement
                      and experience, with a 25% improvement in user interaction
                      metrics.
                    </li>
                  </p>
                </ul>
              </div>
            </div>
          </div>

          <div className="font" style={{ gridRowStart: "4", gridRowEnd: "5" }}>
            <p style={{ marginTop: "0%", fontSize: "1.5rem" }}>
              Technical Skills and Interests
            </p>
            <div style={{ fontSize: "0.8rem" }}>
              <p style={{ fontSize: "0.9rem" }}>
                <ul>
                  <li>
                    Languages: C, C++, HTML, CSS, Tailwind CSS, Javascript,
                    Python
                  </li>
                  <li>Developer Tools: GIT/GIT-hub</li>
                  <li>UI/UX Tool : Figma, Excel</li>
                  <li>Frameworks : React.js,Node.js,Express.js</li>
                  <li>Databases: MySQL</li>
                  <li>
                    Areas of Interest: Development, Management, Communication,
                    Team-work, Leadership
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <img style={img_home} src={pp3} alt="" />
      </div>
    </>
    // <div>Resume</div>
  );
}
