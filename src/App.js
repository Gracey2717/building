// src/App.js
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Project from "./components/Project"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { logIn, logOut } from "./components/Auth"

function App() {
  const [user, setUser] = useState(null) // ✅ store logged-in profile

  // Login handler
  async function handleLogin(email, password) {
    const profile = await logIn(email, password)
    if (profile) {
      setUser(profile) // save profile in state
    }
  }

  // Logout handler
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

              <Footer />
            </>
          }
        />

        {/* Projects Page — pass user as a prop */}
        <Route path="/projects" element={<Project user={user} />} />
      </Routes>
    </>
  )
}

export default App
