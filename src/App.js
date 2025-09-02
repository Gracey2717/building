import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <section id="testimonials">
                <Testimonials />
              </section>

              <Footer />
            </>
          }
        />
        
        <Route path="/projects" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
