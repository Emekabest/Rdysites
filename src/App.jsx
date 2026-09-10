import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Partnership', href: '#partnership' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact Us', href: '#contact' }
  ]

  return (
    <div className="site-wrapper">
      {/* Smooth, Glassmorphism Header */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-container">
            <a href="#home" className="logo-link">
              <img 
                src="https://rdysites.com/wp-content/uploads/2025/10/Rdysites-logo.png" 
                alt="Rdysites Logo" 
                className="logo-img"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a 
                    href={item.href} 
                    className={`nav-link ${item.label === 'Contact Us' ? 'cta-button' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Backdrop Overlay for Mobile Nav Toggle */}
      <div 
        className={`drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Drawer Slide Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                <a 
                  href={item.href} 
                  className={`mobile-nav-link ${item.label === 'Contact Us' ? 'mobile-cta' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>



      {/* Beautiful Hero & Sections */}
      <main className="main-content">
        <section id="home" className="section-hero">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="https://rdysites.com/wp-content/uploads/2025/12/homepage-video.mp4" type="video/mp4" />
          </video>
          <div className="section-container hero-content">
            <h1 className="hero-heading">Build-Ready Lots. Predictable Costs. Zero Change Orders.</h1>
            <p className="hero-text">RdySites delivers finished residential lots, ready for homebuilders to build on.</p>
          </div>
        </section>

        <section id="about" className="section-about">
          <div className="section-container">
            <h2 className="section-title">About Us</h2>
            <p className="section-desc">
              Rdysites is a cutting-edge creative studio focused on engineering elegant solutions. We help businesses expand their online ecosystem using React, optimized architectures, and visually stunning identities.
            </p>
          </div>
        </section>

        <section id="services" className="section-services">
          <div className="section-container">
            <h2 className="section-title">Our Specialized Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Vite / React Web Apps</h3>
                <p>Lightning-speed, rich web software crafted uniquely for your operational goals.</p>
              </div>
              <div className="service-card">
                <h3>UI/UX Brand Design</h3>
                <p>Mesmerizing responsive mockups, interface systems, and tailored consumer flows.</p>
              </div>
              <div className="service-card">
                <h3>Enterprise Scaling</h3>
                <p>Full-funnel digital strategy, SEO audits, and custom integrations to grow your bottom line.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="partnership" className="section-partnership">
          <div className="section-container">
            <h2 className="section-title">Partnership Program</h2>
            <p className="section-desc">
              Let's join forces! We cooperate with global design houses, SaaS founders, and marketing experts. Gain recurring revenue pipelines by partnering with Rdysites.
            </p>
          </div>
        </section>

        <section id="careers" className="section-careers">
          <div className="section-container">
            <h2 className="section-title">Join Our Mission</h2>
            <p className="section-desc">
              We seek passionate UI developers, copywriters, and performance engineers. Browse active positions and design the future of web standards alongside us.
            </p>
          </div>
        </section>

        <section id="contact" className="section-contact">
          <div className="section-container">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-desc">
              Ready to transform your vision into reality? Speak with our team today and witness the difference.
            </p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" required className="form-input" />
              <input type="email" placeholder="Your Email" required className="form-input" />
              <textarea placeholder="Tell us about your project..." rows={4} required className="form-input"></textarea>
              <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-container">
          <p>© {new Date().getFullYear()} Rdysites. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
