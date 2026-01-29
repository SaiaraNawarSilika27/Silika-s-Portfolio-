import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="my-projects secondary-bg open-sans-normal">
      <h1 className="lastpage">A Summary of My Resume</h1>
      <div className="both-section">
        <div className="sec1">
          <div className="sec1-items">
            <h1 className="sec1-items-mainh">My Education</h1>
            <h3 className="sec1-items-titel">Bachelor in Computer Engineering</h3>
            <p className="sec1-items-para">
              from IUBAT.with CGPA <b>3.50</b>out of <b>4.0</b>
            </p>
          </div>
          <hr />
          <div className="sec1-items">
            <h3 className="sec1-items-titel">Completed HSC</h3>
            <p className="sec1-items-para">From Tongi Pilot School and Girls College, with a good study background .<br/> Group: Science <br/>GPA:4.58 out of 5.00</p>
          </div>
          <hr />
          <div className="sec1-items">
            <h3 className="sec1-items-titel">Completed SSC</h3>
            <p className="sec1-items-para">From Tongi Pilot School and Girls College, with a good study background.<br/> Group: Science <br/>GPA:4.67 out of 5.00</p>
          </div>
        </div>
        <div className="sec2">
          <div className="sec1-items">
            <h1 className="sec1-items-mainh">My Experience</h1>
            <h3 className="sec1-items-titel">Laravel Developer</h3>
            <p className="sec1-items-para">
              SoftDeft / June 2025 – October 2025.<br/>
              <ul style={{listStyleType:"dise"}}>
                <li>Contributed to the development of a <b>Tour Management System</b> website, including <b>admin</b> and 
<b>customer pannels</b></li>
                <li>Integrated <b>SSLCommerz</b> payment gateway to enable secure <b>online tour package bookings</b>.</li>
                <li>Applied Agile methodology and <b>Laravel MVC</b> practices to improve system efficiency and 
maintainability</li>
              </ul>
              </p>
          </div>
          <hr />
        </div>
      </div>
      <a href="report.pdf"><button className="btn-primary"><i className="fa-solid fa-download"></i> Download CV</button></a>
    </section>
  );
};

export default Resume;
