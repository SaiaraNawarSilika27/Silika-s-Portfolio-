import React from 'react';

const About = () => {
  return (
    <section id="about" className="about secondary-bg open-sans-normal">
      <h2 className="section-title dark-1">About Me</h2>
      <p className="section-description dark-3">
       I am a passionate and dedicated Full Stack Developer and AI researcher with profound expertise in modern web technologies and artificial intelligence. I specialize in PHP (Laravel) and have completed professional Laravel training under the ICT Division’s EDGE Project, strengthening my ability to build scalable, secure, and high-performance web applications.

I bring 6 months of hands-on industrial experience, where I worked on real-world projects, applying best practices in software development and team collaboration. Alongside web development, I have a strong background in computer vision, image processing, and machine learning, enabling me to integrate intelligent features into applications. My goal is to leverage my technical skills and research experience to deliver impactful solutions and help clients successfully achieve their objectives.
      </p>
      <div className="about-item">
        <div className="about-items">
          <p className="about-item-titel dark-2">Name:</p>
          <p className="aboutitem-des dark-1">Saiara Nawar Silika</p>
        </div>
        <div className="about-items">
          <p className="about-item-titel dark-2">Email:</p>
          <p className="aboutitem-des dark-1">asilika1357@gmail.com</p>
        </div>
        <div className="about-items">
          <p className="about-item-titel dark-2">Date of Birth:</p>
          <p className="aboutitem-des">27 June 2001</p>
        </div>
        <div className="about-items">
          <p className="about-item-titel dark-2">From:</p>
          <p className="aboutitem-des dark-1">Jessore, Bangladesh</p>
        </div>
      </div>
    </section>
  );
};

export default About;