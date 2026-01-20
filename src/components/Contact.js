import React from 'react';

const Contact = () => {
  return (
    <section className="contract secondary-bg">
      <div className="contract1">
        <h1 className="contract1-titel dark-1">Let's Connect</h1>
        <p className="contart1-para dark-2">
          You can contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/share/18j6xHAbRC/"><img src="images/icons/facebook.png" alt="Facebook" /></a>
          <a href="https://www.instagram.com/saiara_nawar_silika?igsh=amg3aHM5ZWRxeWF0"><img src="images/icons/insta.png" alt="Instagram" /></a>
              <a
  href={`https://wa.me/8801400084240?text=${encodeURIComponent( 
    "Hello, I want to contact you"
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
<img src="images/icons/what's_app.png" alt="what's app" /></a>
          <a href="https://x.com/silik26866"><img src="images/icons/twitter.png" alt="Twitter" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;