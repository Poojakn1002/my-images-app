// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import About from './Pages/About';
 
const App = () => {
  const images = [
    'image_slider_threesixty/src/assets/slider/car-36.png',
    'image_slider_threesixty/src/assets/slider/MicrosoftTeams-image (21).png',
  ];
 
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<ImageSlider images={images} />} />
        </Routes>
      </div>
    </Router>
  );
};
 
export default App;
 
