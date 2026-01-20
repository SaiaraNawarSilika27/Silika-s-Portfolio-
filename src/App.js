import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="open-sans-normal">
      {/* We moved the background images here as inline style */}
      <header
        className="header1 secondary-bg"
        style={{
          backgroundImage: `
            url(/images/developer.png),
            url(/images/header_bg.png)
          `,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left, bottom right',
          backgroundSize: '75px, 694px 347px',
        }}
      >
        <Navbar />
        <Banner />
      </header>

      <main>
        <About />
        <Skills />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;