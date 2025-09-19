// src/App.js
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Project from "./components/Project"
import ProjectDetails from "./components/ProjectDetails"   // ✅ import details page
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { logIn, logOut } from "./components/Auth"
import UploadProject from "./components/UploadProject"

function App() {
  const [user, setUser] = useState(null)

  async function handleLogin(email, password) {
    const profile = await logIn(email, password)
    if (profile) {
      setUser(profile)
    }
  }

  async function handleLogout() {
    await logOut()
    setUser(null)
  }

  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
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
             <section id="footer">
                <Footer />
              </section>
            </>
          }
        />

        {/* Projects Carousel Page */}
        <Route path="/projects" element={<Project user={user} />} />

        {/* ✅ Dynamic Project Details Page */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/upload" element={<UploadProject />} />

      </Routes>
    </>
  )
}

export default App
