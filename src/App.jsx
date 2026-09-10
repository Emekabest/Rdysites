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

        <section className="hero-stats">
          <div className="section-container hero-stats-grid">
            <div className="hero-stat">
              <span className="stat-topline">Delivered</span>
              <strong>218+</strong>
              <span>Build-ready lots</span>
            </div>
            <div className="hero-stat">
              <span className="stat-topline">Charlotte</span>
              <strong>68</strong>
              <span>Homesites</span>
            </div>
            <div className="hero-stat">
              <span className="stat-topline">Markets</span>
              <strong>3</strong>
              <span>States served</span>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section id="problem" className="section-problem">
          <div className="section-container">
            <span className="badge badge-problem">The Problem</span>
            <h2 className="section-title">Building homes is predictable. Site development often isn't.</h2>
            
            <div className="problems-grid">
              {/* Problem 01 */}
              <div className="problem-card">
                <div className="problem-number">01</div>
                <div className="problem-visual">
                  <svg className="visual-svg" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(239, 124, 46, 0.2)" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="10" y1="50" x2="50" y2="35" stroke="#283891" strokeWidth="3" />
                    <line x1="50" y1="35" x2="90" y2="15" stroke="#EF7C2E" strokeWidth="3" />
                    <circle cx="50" cy="35" r="4" fill="#283891" />
                    <circle cx="90" cy="15" r="5" fill="#EF7C2E" />
                    <path d="M78 15L90 15V27" stroke="#EF7C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <text x="88" y="10" fill="#EF7C2E" fontSize="8" fontWeight="bold" fontFamily="sans-serif">$$$</text>
                  </svg>
                </div>
                <h3>Cost uncertainty</h3>
                <p>Unexpected site costs can make project budgets harder to predict.</p>
              </div>

              {/* Problem 02 */}
              <div className="problem-card">
                <div className="problem-number">02</div>
                <div className="problem-visual">
                  <svg className="visual-svg" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="10" width="70" height="40" rx="6" stroke="#283891" strokeWidth="2" />
                    <line x1="15" y1="22" x2="85" y2="22" stroke="rgba(40, 56, 145, 0.15)" strokeWidth="2" />
                    <rect x="25" y="30" width="10" height="10" rx="2" fill="rgba(40, 56, 145, 0.1)" />
                    <rect x="42" y="30" width="10" height="10" rx="2" fill="rgba(40, 56, 145, 0.1)" />
                    <rect x="59" y="30" width="10" height="10" rx="2" fill="#EF7C2E-none" stroke="#EF7C2E" strokeWidth="2" />
                    <line x1="56" y1="35" x2="72" y2="35" stroke="#EF7C2E" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M68 31.5L72.5 35L68 38.5" stroke="#EF7C2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Delays</h3>
                <p>Unforeseen site issues can push timelines further out.</p>
              </div>

              {/* Problem 03 */}
              <div className="problem-card">
                <div className="problem-number">03</div>
                <div className="problem-visual">
                  <svg className="visual-svg" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="8" width="50" height="44" rx="4" stroke="#283891" strokeWidth="2" />
                    <line x1="33" y1="18" x2="55" y2="18" stroke="rgba(40, 56, 145, 0.4)" strokeWidth="2" />
                    <line x1="33" y1="28" x2="67" y2="28" stroke="rgba(40, 56, 145, 0.4)" strokeWidth="2" />
                    <line x1="33" y1="38" x2="67" y2="38" stroke="#EF7C2E" strokeWidth="2" />
                    <circle cx="70" cy="40" r="10" fill="#EF7C2E" />
                    <path d="M70 36V41M70 44H70.01" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Change orders</h3>
                <p>Changes during development can create additional costs and complications.</p>
              </div>

              {/* Problem 04 */}
              <div className="problem-card">
                <div className="problem-number">04</div>
                <div className="problem-visual">
                  <svg className="visual-svg" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="18" r="7" stroke="#283891" strokeWidth="1.8" />
                    <circle cx="75" cy="18" r="7" stroke="#283891" strokeWidth="1.8" />
                    <circle cx="50" cy="45" r="7" stroke="#283891" strokeWidth="1.8" />
                    <path d="M33 21L42 38" stroke="rgba(40, 56, 145, 0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
                    <path d="M67 21L58 38" stroke="rgba(40, 56, 145, 0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
                    <path d="M33 18H67" stroke="rgba(40, 56, 145, 0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
                    <path d="M47 30H53M50 27V33" stroke="#EF7C2E" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Complexity</h3>
                <p>Coordinating land, infrastructure, utilities, grading, and approvals takes time and resources.</p>
              </div>
            </div>

            {/* Story Transition Element */}
            <div className="problem-transition-box">
              <span className="scenerio-bubble-title">Before RdySites</span>
              <div className="scenerio-row before">
                <div className="item"><span className="indicator danger">Cost ↑</span></div>
                <div className="item"><span className="indicator danger">Timeline →</span></div>
                <div className="item"><span className="indicator danger">Changes ↻</span></div>
                <div className="item"><span className="indicator danger">Complexity ×</span></div>
              </div>
              
              <div className="story-divider">
                <div className="pulse-arrow">↓</div>
              </div>

              <blockquote className="transition-quote">
                What if your lots arrived ready to build—with the cost and scope already defined?
              </blockquote>
              
              <h3 className="transition-solution-heading">That's where RdySites comes in.</h3>

              <div className="scenerio-row after">
                <div className="item"><span className="indicator success">Predictable Costs</span></div>
                <div className="item"><span className="indicator success">Managed Development</span></div>
                <div className="item"><span className="indicator success">Build-Ready Lot</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="section-how-it-works">
          <div className="section-container">
            <span className="badge badge-how">Our Process</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle-text">From raw land to build-ready lots.</p>

            <div className="process-timeline">
              {/* Step 01 */}
              <div className="process-step">
                <div className="process-meta">
                  <div className="step-number">01</div>
                  <div className="step-connector"></div>
                </div>
                <div className="process-card">
                  <div className="step-icon-wrapper">
                    <svg className="step-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#283891" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="#EF7C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="#283891" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="step-info">
                    <h3>Acquire & Plan</h3>
                    <p className="step-desc-text">Land acquisition + value engineering</p>
                  </div>
                </div>
              </div>

              {/* Step 02 */}
              <div className="process-step">
                <div className="process-meta">
                  <div className="step-number">02</div>
                  <div className="step-connector"></div>
                </div>
                <div className="process-card">
                  <div className="step-icon-wrapper">
                    <svg className="step-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 10V15C22 16.1 21.1 17 20 17H4C2.9 17 2 16.1 2 15V10" stroke="#283891" strokeWidth="2" />
                      <path d="M6 10V5C6 3.9 6.9 3 8 3H16C17.1 3 18 3.9 18 5V10" stroke="#283891" strokeWidth="2" />
                      <path d="M2 10H22" stroke="#EF7C2E" strokeWidth="2" />
                      <path d="M10 14H14" stroke="#EF7C2E" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="step-info">
                    <h3>Develop</h3>
                    <p className="step-desc-text">Clearing, grading, excavation, erosion control, utilities and infrastructure</p>
                  </div>
                </div>
              </div>

              {/* Step 03 */}
              <div className="process-step">
                <div className="process-meta">
                  <div className="step-number">03</div>
                  <div className="step-connector"></div>
                </div>
                <div className="process-card">
                  <div className="step-icon-wrapper">
                    <svg className="step-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#283891" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="#283891" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#EF7C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#EF7C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="step-info">
                    <h3>Build & Coordinate</h3>
                    <p className="step-desc-text">Construction, paving, concrete, landscaping and HOA coordination</p>
                  </div>
                </div>
              </div>

              {/* Step 04 */}
              <div className="process-step">
                <div className="process-meta">
                  <div className="step-number">04</div>
                </div>
                <div className="process-card highlight-step">
                  <div className="step-icon-wrapper">
                    <svg className="step-svg animate-pulse-btn" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="#EF7C2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 22V12h6v10" stroke="#283891" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="step-info">
                    <h3>Deliver Build-Ready Lots</h3>
                    <p className="step-desc-text">Finished residential lots ready for the homebuilder to build on</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zero Change Orders Section */}
        <section id="zero-change-orders" className="section-zero-change-orders">
          <div className="section-container">
            <span className="badge badge-zero">Zero Risks</span>
            <h2 className="section-title">ZERO CHANGE ORDERS</h2>
            <blockquote className="zero-quote">
              "Predictability built into the development process."
            </blockquote>

            {/* Explaining Model with Flow Visual */}
            <div className="model-flow-visual">
              <div className="flow-step">
                <div className="flow-card">
                  <div className="flow-icon">📝</div>
                  <h4>Defined Scope</h4>
                </div>
              </div>
              <div className="flow-arrow">➔</div>
              <div className="flow-step">
                <div className="flow-card">
                  <div className="flow-icon">🤝</div>
                  <h4>GMP Agreement</h4>
                </div>
              </div>
              <div className="flow-arrow">➔</div>
              <div className="flow-step">
                <div className="flow-card">
                  <div className="flow-icon">🏗️</div>
                  <h4>Managed Development</h4>
                </div>
              </div>
              <div className="flow-arrow">➔</div>
              <div className="flow-step highlight">
                <div className="flow-card">
                  <div className="flow-icon">🔑</div>
                  <h4>Build-Ready Lots</h4>
                </div>
              </div>
            </div>



            {/* Proof Metric Board */}
            <div className="proof-track-record-header">
              <span className="scenerio-bubble-title">TRACK RECORD</span>
           
            </div>

            <div className="proof-metrics-strip">
              <div className="proof-metric">
                <div className="metric-number">300+</div>
                <div className="metric-label">Acres Developed</div>
              </div>
              <div className="proof-divider"></div>
              <div className="proof-metric">
                <div className="metric-number">2,500+</div>
                <div className="metric-label">Sites Built</div>
              </div>
              <div className="proof-divider"></div>
              <div className="proof-metric">
                <div className="metric-number">3</div>
                <div className="metric-label">States Served</div>
              </div>
            </div>
            <blockquote className="track-record-quote">
                            Built for the builders who demand certainty.
            </blockquote>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="section-projects">
          <div className="section-container">
            <span className="badge badge-projects">Portfolio</span>
            <h2 className="section-title">Active Developments</h2>
            <p className="section-subtitle-text">Premium finished lots currently available or in development.</p>

            <div className="projects-grid">
              {/* Project 01 */}
              <div className="project-card">
                <div className="project-header">
                  <span className="project-index">01</span>
                  <span className="project-status">Available</span>
                </div>
                <div className="project-visual-schema">
                  <svg className="project-svg" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="110" height="70" rx="6" fill="#f8f9ff" stroke="rgba(40, 56, 145, 0.1)" strokeWidth="1.5" />
                    <line x1="20" y1="5" x2="20" y2="75" stroke="rgba(40, 56, 145, 0.15)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="60" y1="5" x2="60" y2="75" stroke="rgba(40, 56, 145, 0.15)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="100" y1="5" x2="100" y2="75" stroke="rgba(40, 56, 145, 0.15)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="5" y1="40" x2="115" y2="40" stroke="#EF7C2E" strokeWidth="2.5" />
                    <circle cx="20" cy="40" r="4.5" fill="#283891" />
                    <circle cx="60" cy="40" r="4.5" fill="#283891" />
                    <circle cx="100" cy="40" r="4.5" fill="#283891" />
                    <rect x="15" y="15" width="10" height="10" rx="1.5" fill="rgba(40, 56, 145, 0.12)" />
                    <rect x="55" y="15" width="10" height="10" rx="1.5" fill="rgba(40, 56, 145, 0.12)" />
                    <rect x="95" y="15" width="10" height="10" rx="1.5" fill="rgba(40, 56, 145, 0.12)" />
                  </svg>
                </div>
                <div className="project-body">
                  <h3>Highland Grove</h3>
                  <div className="project-meta-line">
                    <span className="project-loc">📍 Terrell, NC</span>
                    <span className="project-count">🏡 62 Single-Family Home Sites</span>
                  </div>
                  <p className="project-desc-para">
                    Premium lakeside development engineered with advanced infrastructure, completed grading, and utilities connected, ready for immediate vertical construction.
                  </p>
                  <a href="#contact" className="project-link-btn">View Project &rarr;</a>
                </div>
              </div>

              {/* Project 02 */}
              <div className="project-card">
                <div className="project-header">
                  <span className="project-index">02</span>
                  <span className="project-status">Available</span>
                </div>
                <div className="project-visual-schema">
                  <svg className="project-svg" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="110" height="70" rx="6" fill="#f8f9ff" stroke="rgba(40, 56, 145, 0.1)" strokeWidth="1.5" />
                    <rect x="15" y="15" width="22" height="30" rx="2" fill="rgba(40, 56, 145, 0.08)" stroke="#283891" strokeWidth="1.5" />
                    <rect x="49" y="15" width="22" height="30" rx="2" fill="rgba(40, 56, 145, 0.08)" stroke="#283891" strokeWidth="1.5" />
                    <rect x="83" y="15" width="22" height="30" rx="2" fill="rgba(239, 124, 46, 0.08)" stroke="#EF7C2E" strokeWidth="1.5" />
                    <line x1="5" y1="55" x2="115" y2="55" stroke="rgba(40, 56, 145, 0.15)" strokeWidth="1.5" />
                    <circle cx="26" cy="55" r="3.5" fill="#283891" />
                    <circle cx="60" cy="55" r="3.5" fill="#283891" />
                    <circle cx="94" cy="55" r="3.5" fill="#EF7C2E" />
                  </svg>
                </div>
                <div className="project-body">
                  <h3>Norman Station</h3>
                  <div className="project-meta-line">
                    <span className="project-loc">📍 Mooresville, NC</span>
                    <span className="project-count">🏡 24 Townhome Sites</span>
                  </div>
                  <p className="project-desc-para">
                    Strategically located infill townhouse parcel with fully resolved storm water management, finished concrete curbing, and utility drops in place.
                  </p>
                  <a href="#contact" className="project-link-btn">View Project &rarr;</a>
                </div>
              </div>

              {/* Project 03 */}
              <div className="project-card">
                <div className="project-header">
                  <span className="project-index">03</span>
                  <span className="project-status orange">Underway</span>
                </div>
                <div className="project-visual-schema">
                  <svg className="project-svg" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="110" height="70" rx="6" fill="#f8f9ff" stroke="rgba(40, 56, 145, 0.1)" strokeWidth="1.5" />
                    <path d="M10 60h100V70H10V60z" fill="rgba(40, 56, 145, 0.1)" />
                    <line x1="15" y1="20" x2="105" y2="20" stroke="rgba(40, 56, 145, 0.12)" strokeWidth="1.5" />
                    <line x1="15" y1="40" x2="105" y2="40" stroke="rgba(239, 124, 46, 0.2)" strokeWidth="1.5" />
                    <circle cx="25" cy="20" r="3" fill="#283891" />
                    <circle cx="55" cy="20" r="3" fill="#283891" />
                    <circle cx="85" cy="20" r="3" fill="#283891" />
                    <circle cx="40" cy="40" r="3" fill="#EF7C2E" />
                    <circle cx="70" cy="40" r="3" fill="#EF7C2E" />
                  </svg>
                </div>
                <div className="project-body">
                  <h3>Gastonia</h3>
                  <div className="project-meta-line">
                    <span className="project-loc">📍 Gastonia, NC</span>
                    <span className="project-count">🏡 218 Single-Family Lots</span>
                  </div>
                  <p className="project-desc-para">
                    Massive multi-phase master development featuring curated build-ready lots with asphalt paving, graded plots, and master-planned water/sewer networks.
                  </p>
                  <a href="#contact" className="project-link-btn">View Project &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-contact-cta">
          <div className="section-container">
            <div className="cta-panel">
              <div className="cta-content">
                <span className="badge badge-contact">Ready to build</span>
                <h2 className="section-title cta-title">READY TO BUILD WITH CERTAINTY?</h2>
                <p className="cta-copy">From land acquisition to build-ready lots, let's discuss your next development.</p>
                <a href="mailto:ricka@rdysites.com" className="cta-primary-btn">
                  Discuss Your Development <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="cta-company-block">
                <div className="company-brand">RdySites</div>
                <p className="company-tagline">Residential Site Development</p>
                <ul className="company-meta-list">
                  <li><span>Call:</span> 00000000</li>
                  <li><span>Email:</span> <a href="mailto:ricka@rdysites.com">ricka@rdysites.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
{/* 
        <section id="about" className="section-about">
          <div className="section-container">
            <h2 className="section-title">About Us</h2>
            <p className="section-desc">
              Rdysites is a cutting-edge creative studio focused on engineering elegant solutions. We help businesses expand their online ecosystem using React, optimized architectures, and visually stunning identities.
            </p>
          </div>
        </section>  */}

        {/* <section id="services" className="section-services">
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
        </section> */}

        {/* <section id="partnership" className="section-partnership">
          <div className="section-container">
            <h2 className="section-title">Partnership Program</h2>
            <p className="section-desc">
              Let's join forces! We cooperate with global design houses, SaaS founders, and marketing experts. Gain recurring revenue pipelines by partnering with Rdysites.
            </p>
          </div>
        </section> */}
{/* 
        <section id="careers" className="section-careers">
          <div className="section-container">
            <h2 className="section-title">Join Our Mission</h2>
            <p className="section-desc">
              We seek passionate UI developers, copywriters, and performance engineers. Browse active positions and design the future of web standards alongside us.
            </p>
          </div>
        </section> */}

        {/* <section id="contact" className="section-contact">
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
        </section> */}
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
