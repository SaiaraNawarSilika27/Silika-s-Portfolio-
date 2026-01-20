import React from 'react';

const Skills = () => {
  return (
    <section className="what-i-do secondary-bg open-sans-normal">
      <h1 className="what-i-do-titel dark-1">What I Do</h1>
      <p className="what-i-do-des dark-3">
        I have 6 months of professional experience as a Full Stack Laravel Developer, collaborating directly with clients 
        to analyze requirements, suggest effective solutions, and deliver high-quality, scalable web applications on time.
      </p>

      <div className="what-i-do-items">
        {/* 1. Vanilla JavaScript */}
        <div className="what-i-do-item">
          <img src="/images/icons/js.png" alt="JavaScript" />
          <h2 className="what-i-do-item-h2 dark-1">Vanilla JavaScript</h2>
          <p className="what-i-do-item-p dark-3">
            Solid understanding of modern JavaScript (ES6+), DOM manipulation, asynchronous programming (Promises, async/await), 
            event handling, and building interactive features without frameworks.
          </p>
          <p className="what-i-do-item-p dark-3" style={{ marginTop: '12px' }}>
            <strong>Project example:</strong>{' '}
            <a 
              href="https://saiaranawarsilika27.github.io/Payeoo-Money-Transection/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#FD6E0A', textDecoration: 'underline' }}
            >
              
Payeoo-Money-Transection
            </a>
          </p>
        </div>

        {/* 2. React */}
        <div className="what-i-do-item">
          <img src="/images/icons/react.png" alt="React" />
          <h2 className="what-i-do-item-h2 dark-1">React</h2>
          <p className="what-i-do-item-p dark-3">
            Building modern, component-based user interfaces using React, React Hooks, Context API, React Router, 
            and state management. Creating responsive and performant single-page applications.
          </p>
          <p className="what-i-do-item-p dark-3" style={{ marginTop: '12px' }}>
            <strong>Project example:</strong>{' '}
            <a 
              href="https://saiaranawarsilika27.github.io/Silika-s-Portfolio-/
" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#FD6E0A', textDecoration: 'underline' }}
            >
              Personal Portfolio (this website!)
            </a>
          </p>
        </div>

        {/* 3. HTML & CSS (new one) */}
        <div className="what-i-do-item">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
            alt="HTML5 & CSS3" 
            style={{ width: '50px', height: '50px' }}
          />
          <h2 className="what-i-do-item-h2 dark-1">HTML & CSS</h2>
          <p className="what-i-do-item-p dark-3">
            Semantic HTML5, advanced CSS3 (Flexbox, Grid, animations, responsive design), Tailwind CSS, 
            modern layouts, accessibility (a11y), and cross-browser compatibility.
          </p>
          <p className="what-i-do-item-p dark-3" style={{ marginTop: '12px' }}>
            <strong>Project example:</strong>{' '}
            <a 
              href="https://saiaranawarsilika27.github.io/Biker-Zone/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#FD6E0A', textDecoration: 'underline' }}
            >
             Biker Zone
            </a>
          </p>
        </div>

        {/* 4. Laravel + Node.js + MongoDB (combined or separate) */}
        <div className="what-i-do-item">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" 
            alt="Laravel" 
            style={{ width: '50px', height: '50px' }}
          />
          <h2 className="what-i-do-item-h2 dark-1">Laravel + Backend</h2>
          <p className="what-i-do-item-p dark-3">
            Full-stack development with Laravel (MVC, Eloquent ORM, Blade, Livewire, API development), 
            RESTful APIs, authentication (Sanctum, Passport), database design, and clean, maintainable code structure.
          </p>
          <p className="what-i-do-item-p dark-3" style={{ marginTop: '12px' }}>
            <strong>Project example:</strong>{' '}
            <a 
              href="https://github.com/SaiaraNawarSilika27/tour_booking_next" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#FD6E0A', textDecoration: 'underline' }}
            >
              Tour Management System (Laravel)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;