import React from 'react';
import { 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  Handshake, 
  Search, 
  FileSpreadsheet, 
  Headphones, 
  CheckCircle2, 
  TrendingUp,
  MessageCircle 
} from 'lucide-react';
import Button from '../components/Button';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* SECTION 1: HERO */}
      <section className="page-hero">
        <div className="container text-center">
          <span className="page-badge">BEHIND THE SCENES</span>
          <h1 className="page-title">We're the Operations Team Behind Growing eBay Stores</h1>
          <p className="page-subtitle">
            Digi Business Solutions was built to give everyday people in the US and Europe a way to earn from e-commerce, without needing the time, tools, or experience to run a store themselves.
          </p>
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="section">
        <div className="container">
          <div className="story-wrapper">
            <div className="story-content">
              <span className="story-pill">OUR MISSION & ORIGIN</span>
              <h2>Bridging Verified Account Eligibility with E-Commerce Execution</h2>
              <div className="story-paragraphs">
                <p>
                  Digi Business Solutions started with a simple, foundational reality: millions of qualified individuals in the United States and Europe possess the eligibility to hold a strong, verified eBay seller account (with a clean identity, legitimate local banking, and physical address), but lack the hours, technical tooling, or specialized market know-how required to build a consistently profitable store.
                </p>
                <p>
                  Meanwhile, our operations specialists have spent years mastering consumer demand algorithms, supplier integrations, listing search optimization, and marketplace customer service. We understand how to navigate platform standards and curate high-velocity catalog inventory.
                </p>
                <p>
                  We built Digi Business Solutions to connect these two pieces into one symbiotic model: <strong>your sovereign account ownership and local standing</strong> paired with <strong>our end-to-end operational labor</strong>, with net profits shared transparently at 60/40.
                </p>
              </div>
            </div>

            <div className="story-callout-box">
              <div className="story-founder-image-box">
                <img 
                  src="/Founder_Photo_Navy_Theme.png" 
                  alt="Founder & Operations Leadership - Digi Business Solutions" 
                  className="story-founder-img"
                />
              </div>
              <div className="callout-inner">
                <div className="callout-stat-group">
                  <span className="callout-num">100%</span>
                  <span className="callout-label">Client Account Ownership</span>
                </div>
                <div className="callout-divider"></div>
                <div className="callout-stat-group">
                  <span className="callout-num">60/40</span>
                  <span className="callout-label">Performance-Only Profit Model</span>
                </div>
                <div className="callout-divider"></div>
                <div className="callout-stat-group">
                  <span className="callout-num">24/7</span>
                  <span className="callout-label">Operational Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR CORE VALUES */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Guiding Values</h2>
            <p className="section-subtitle">
              The operating principles that guide every client relationship and store decision.
            </p>
          </div>

          <div className="grid grid-4 values-grid">
            <div className="value-card">
              <div className="value-icon-box">
                <Eye size={26} />
              </div>
              <h3>Radical Transparency</h3>
              <p>Clear reporting, accessible spreadsheets, straightforward terms, and zero hidden charges or surprises.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <ShieldCheck size={26} />
              </div>
              <h3>Ownership Respected</h3>
              <p>Your account, your bank funds, your ultimate control at all times. We never overstep our role as authorized operators.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Sparkles size={26} />
              </div>
              <h3>Specialized Expertise</h3>
              <p>A full-time, dedicated team focused on product demand research, listings, customer care, and account health.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Handshake size={26} />
              </div>
              <h3>Shared Incentives</h3>
              <p>We grow when you grow. Because our revenue depends purely on your profit, our focus is strictly on sustainable wins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TEAM SNAPSHOT */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The Operational Departments Running Your Store</h2>
            <p className="section-subtitle">
              Your store is supported by a comprehensive team of specialized e-commerce professionals.
            </p>
          </div>

          <div className="grid grid-4 team-grid">
            <div className="dept-card">
              <div className="dept-icon-wrapper">
                <Search size={28} />
              </div>
              <h4>Product Research & Sourcing</h4>
              <p>Analyzes seasonal demand, competitor gaps, supplier reliability, and net profit margins daily.</p>
            </div>

            <div className="dept-card">
              <div className="dept-icon-wrapper">
                <FileSpreadsheet size={28} />
              </div>
              <h4>Listing & SEO Specialists</h4>
              <p>Creates keyword-rich titles, clear item specifications, and high-conversion product descriptions.</p>
            </div>

            <div className="dept-card">
              <div className="dept-icon-wrapper">
                <Headphones size={28} />
              </div>
              <h4>Customer Support & Returns</h4>
              <p>Resolves buyer inquiries rapidly, addresses return requests, and safeguards store feedback scores.</p>
            </div>

            <div className="dept-card">
              <div className="dept-icon-wrapper">
                <TrendingUp size={28} />
              </div>
              <h4>Account Health & Compliance</h4>
              <p>Monitors defect rates, on-time shipping compliance, and eBay policy updates to ensure long-term stability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="cta-banner-section bg-alt">
        <div className="container text-center">
          <div className="cta-banner-card">
            <h2>Want to Partner with Digi Business Solutions?</h2>
            <p>
              Let our experienced operations team build and manage an eBay store in your name while you collect 40% of the profits.
            </p>
            <div className="cta-banner-buttons">
              <Button to="/faq" variant="primary" className="btn-lg">
                Become a Partner Now
              </Button>
              <a
                href="https://wa.me/923266640988?text=Hello!%20I%20read%20the%20About%20Us%20page%20and%20would%20like%20to%20apply."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
