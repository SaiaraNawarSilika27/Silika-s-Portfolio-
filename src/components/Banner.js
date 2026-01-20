import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h4 className="banner-text1 dark-2">Hi, I am</h4>
        <h1 className="banner-text2">Saiara Nawar Silika</h1>
        <p className="banner-text3 dark-2">
          Full stack Developer and also AI Researcher in deep learning Computer vision image processing.
        </p>
        <a href="/files/report.pdf"><button className="btn-primary"><i className="fa-solid fa-download"></i> Download CV</button></a>
        <a
  href={`https://wa.me/8801400084240?text=${encodeURIComponent( 
    "Hello, I want to contact you"
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="btn-primary1">
    <i className="fa-solid fa-phone"></i> Contact Me
  </button>
</a>
      </div>
      <div className="banner-image">
        <img className="banner-image1" src="images/silika2.png" alt="Profile Pic" />
      </div>
    </div>
  );
};

export default Banner;