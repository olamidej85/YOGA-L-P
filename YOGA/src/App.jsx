import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './compoents/navbar';
import FirstSection from './compoents/firstSection';
import Card from './compoents/card';
import Testimonies from './compoents/testimonies';
import FAQ from './compoents/faq';
import Footer from './compoents/footer';
import ImageView from './compoents/imageView';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FirstSection />
                <section className="cards">
                  <Card
                   title="Improved Flexibility" 
                   image="/images/trainer 10.webp" 
                   ctaText="View Image"
                   showCTA={true}
                    />
                  <Card
                   title="Stress Reduction"
                    image="/images/trainer 9.jpg" 
                    ctaText="View Image" 
                    showCTA={true}
                    />

                  <Card 
                  title="Join our class today!" 
                  description="Become a part of our community."
                   image="/images/trainer 6.jpg" 
                   showCTA={false}
                   showEmailInput={true} 
                   />
                </section>
                <Testimonies />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route path="/view-image/:imageId" element={<ImageView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
