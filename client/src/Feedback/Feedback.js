import React from "react";
import "./feedback.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Feedback = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content:
      <>
        <p>Initiative Taker: Kalpalathika demonstrated a proactive approach by taking initiative to identify and surface issues within the application. She effectively logs bugs and provides valuable insights that facilitates prompt resolution. Her attitude to improving the product significantly enhances the overall quality and team collaboration. This positive contribution is greatly appreciated. </p> 
        <p> Positive Attitude Kalpalathika continues to always take constructive feedback with a positive attitude. In fact, she proactively seeks input on areas of improvement and diligently works on implementing it.</p> 
        <p> Great team player Kalpalthika demonstrates a strong willingness to help her teammates. She is always ready to answer questions and share her knowledge. Her approachable demeanor creates a supportive environment, making team collaboration smoother and more effective."</p>
      </>,
      name: "Sony Raghavan",
      position: "Software Engineering Manager at Ecolab",
    },
    {
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content:
        "I have worked with Kalpalathika on multiple projects. She had a great attitude when it came to learning new technologies and projects. I wish her best of luck for her future endeavours.",
      name: "Pratik Ghela",
      position: "Founder at MakeStories & MakeForms",
    },
    {
      img: "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content:
        "I worked with Kalpalathika during her internship tenure at Ecolab, and she was great, not just in frontend development but also in backend and automation. She took on some of the key features of our project, and I was genuinely impressed with how she picked things up and delivered work. What I really liked was her problem-solving attitude. No matter how challenging the task, she never backed down and was always open to feedback, constantly improving along the way.",
      name: "Mohammad Junaid",
      position: "Technical Lead at Ecolab Digital Center",
    },
 
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container feedback-slider" id="testimonial">
      <div className="section-title">
        <Flip left>
          <h5>Testimonial</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <div className="feedbck-slide">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Fade left key={index}>
              <div className="col-12 d-flex justify-content-center">
                <div
                  className="card content-slider mx-2 d-flex flex-column align-items-center"
                  style={{ maxWidth: "350px", minHeight: "450px", padding: "30px", overflow: "hidden" }}
                >
                  {/* <img
                    src={item.img}
                    alt="slider image"
                    className="center-image img-fluid rounded-circle mb-3"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  /> */}
                  {/* Scrollable Content Area */}
                  <div style={{ flexGrow: 1, overflowY: "auto", maxHeight: "250px", textAlign: "center" }}>
                    <p>{item.content}</p>
                  </div>
                  <h4 className="mt-3">{item.name}</h4>
                  <p>{item.position}</p>
                </div>
              </div>
            </Fade>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
