import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const TechStack = () => {
  const data = [
    {
      position: "Javascript",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 0,
    },
    {
      position: "C# .Net",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 1,
    },
    {
      position: "AWS",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 2,
    },
    {
      position: "Python",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 3,
    },
  
    {
  
      position: "Typescript",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 4,
    },
      {
  
      position: "Java",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 5,
    },
    {
  
      position: "C++",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 6,
    },
    {
  
      position: "HTML5",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 7,
    },
    {
  
      position: "ReactJs",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 8,
    },
    {
    
      position: "AngularJs",
      img: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 9,
    },
    {
      position: "NestJs",
      img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 10,
    },
    {
      position: "NextJs",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 11,
    },
    {
      position: "ExpressJs",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 12,
    },
    {
      position: "MySQL",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 13,
    },
    {
      position: "MongoDB",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 14,
    },
    {
      position: "PostgreSQL",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 14,
    },
    {
      position: "Firebase",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 14,
    },
    {
      position: "snowflake",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 15,
    },
  
  ];

  const [visible, setVisible] = useState(9);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
  ];
  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <Flip left>
          <h5>Skills</h5>
          <span className="line"></span>
        </Flip>
      </div>
      <div className="row">
        {data.slice(0, visible).map((item, index) => (
          <Fade right>
            <div className="col-lg-4 col-md-6 col-xl-4" key={item.id}>
              <div className= "tech-content">
                {/* <span
                  className="service-number"
                  style={{ backgroundColor: colors[index] }}
                >
                 {index + 1}
                </span> */}

                <p>{item.position}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {visible >= data.length ? null : (
        
          <span className="load-teach-stack-button" onClick={loadMore}>
            Load More
          </span>
   
        )}
    </div>
  );
};

export default TechStack;
