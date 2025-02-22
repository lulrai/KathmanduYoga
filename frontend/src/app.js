import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutus";
import Contact from "./components/pages/contact";
import Courses from "./components/pages/courses";
import Testimonials from "./components/pages/testimonials";
import YogaTradition from "./components/pages/YogaTradition";
import YogaChakra from "./components/pages/YogaChakra";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-tradition" element={<YogaTradition />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/yoga-chakra" element={<YogaChakra />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
