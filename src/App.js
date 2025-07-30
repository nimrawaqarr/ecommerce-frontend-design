import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarPage from './components/headers/NavbarPage'
import FooterPage from './components/footers/FooterPage';
import { PageOne } from './components/PageOne/PageOne';
import PageTwo from './components/PageTwo/PageTwo';
import PageThree from './components/PageThree/PageThree';
import PageFour from './components/PageFour/PageFour';
import PageFive from './components/PageFive/PageFive';

function App() {
  return (
    <div className="App">

      {/* <NavbarPage/> */}
      {/* <PageOne/> */}
      {/* <PageTwo/> */}
      {/* <PageThree/> */}
      {/* <PageFour/> */}
      {/* <PageFive/> */}
      {/* <FooterPage/> */}


       <Router>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/page-three" element={<PageThree />} />
          <Route path="/page-four" element={<PageFour />} />
          <Route path="/page-five" element={<PageFive />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
