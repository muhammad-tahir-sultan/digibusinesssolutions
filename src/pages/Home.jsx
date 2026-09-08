import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Shield,
  Users,
  PieChart,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Globe,
  ChevronRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import Button from '../components/Button';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={15} className="badge-icon" />
              <span>US & EU eBay Account Holders</span>
            </div>
            <h1 className="hero-title">
              We Run Your eBay Store. <br className="hero-desktop-br" />
              <span className="highlight-text">You Keep 40% of the Profits.</span>
            </h1>
            <p className="hero-subtitle">
              A transparent, done-for-you e-commerce partnership for US and European account holders. Our operational team manages product research, listings, fulfillment, and customer support under your account. Zero upfront fees, no inventory risk.
            </p>
            <div className="hero-cta-group">
              <Button to="/faq" variant="primary" className="btn-lg">
                Become a Partner Now →
              </Button>
              <a
                href="https://wa.me/923266640988?text=Hello!%20I%20am%20interested%20in%20becoming%20a%20partner%20with%20Digi%20Business%20Solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            <div className="hero-reassurance">
              <span>✓ Zero upfront fees</span>
              <span>✓ 100% legal ownership</span>
              <span>✓ Direct bank payouts</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="founder-hero-card">
              <div className="founder-img-wrapper">
                <img 
                  src="/Founder_Photo_Navy_Theme.png" 
                  alt="Muhammad Tahir - Founder of Digi Business Solutions" 
                  className="founder-hero-img"
                />
                <div className="founder-trust-pill">
                  <Shield size={16} className="pill-shield" />
                  <span>Founder-Led Operations</span>
                </div>
              </div>

              <div className="founder-card-footer">
                <div className="founder-top-row">
                  <div className="founder-identity">
                    <strong className="founder-name">Muhammad Tahir</strong>
                    <span className="founder-verified-badge">✓ Verified</span>
                  </div>
                  <div className="founder-split-tag">
                    <span>60/40 Split</span>
                  </div>
                </div>
                <span className="founder-title">Founder, Digi Business Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="trust-bar-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon-box">
                <Globe className="trust-icon" size={24} />
              </div>
              <div className="trust-text">
                <strong>US & EU Applicants Welcome</strong>
                <span>Verified account holders</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <Shield className="trust-icon" size={24} />
              </div>
              <div className="trust-text">
                <strong>You Stay Account Owner</strong>
                <span>Legal ownership & direct bank link</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <Users className="trust-icon" size={24} />
              </div>
              <div className="trust-text">
                <strong>Full Operational Team</strong>
                <span>Research, listings, support & health</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <PieChart className="trust-icon" size={24} />
              </div>
              <div className="trust-text">
                <strong>Transparent 60/40 Split</strong>
                <span>Performance-based. No monthly fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY THIS WORKS (3-COLUMN BENEFIT CARDS) */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">A Real Business Partnership Built On Shared Incentives</h2>
            <p className="section-subtitle">
              We don't sell courses, mentorships, or hyped get-rich-quick schemes. We are operational partners who share in the exact results we produce.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="benefit-card">
              <div className="card-icon-container">
                <TrendingUp size={28} />
              </div>
              <h3>Zero Experience Needed</h3>
              <p>
                You don't need to know eBay algorithms, e-commerce fulfillment, supplier negotiations, or product sourcing. Our seasoned team handles the complete commercial pipeline.
              </p>
              <ul className="card-checklist">
                <li><CheckCircle2 size={16} /> Market & competitor analytics</li>
                <li><CheckCircle2 size={16} /> High-demand product listing</li>
                <li><CheckCircle2 size={16} /> SEO & title optimization</li>
              </ul>
            </div>

            <div className="benefit-card highlight-card">
              <div className="card-icon-container">
                <Shield size={28} />
              </div>
              <h3>You Keep 100% Ownership</h3>
              <p>
                The account and the funds are legally yours. We operate the store as authorized staff; you remain the sovereign owner with full visibility and control.
              </p>
              <ul className="card-checklist">
                <li><CheckCircle2 size={16} /> Direct eBay payouts to your bank</li>
                <li><CheckCircle2 size={16} /> Full transparent dashboard access</li>
                <li><CheckCircle2 size={16} /> Clear contract defining rights</li>
              </ul>
            </div>

            <div className="benefit-card">
              <div className="card-icon-container">
                <Users size={28} />
              </div>
              <h3>Dedicated Operational Team</h3>
              <p>
                Product research, listing, fulfillment coordination, customer service, and account health compliance are handled every single day by dedicated specialists.
              </p>
              <ul className="card-checklist">
                <li><CheckCircle2 size={16} /> Fast customer inquiry resolution</li>
                <li><CheckCircle2 size={16} /> Order dispatch tracking updates</li>
                <li><CheckCircle2 size={16} /> Policy & metrics compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS (CONDENSED 4-STEP PREVIEW) */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">How It Works: 4 Simple Steps</h2>
            <p className="section-subtitle">A transparent journey from initial qualification to steady profit distributions.</p>
          </div>

          <div className="steps-preview-grid">
            <div className="step-preview-item">
              <div className="step-num">01</div>
              <h4>Apply & Qualify</h4>
              <p>Fill out our short eligibility form or connect on WhatsApp. We verify your US or EU residency.</p>
            </div>

            <div className="step-preview-item">
              <div className="step-num">02</div>
              <h4>Store Setup & Sync</h4>
              <p>We configure your existing account or walk you step-by-step through opening an official account.</p>
            </div>

            <div className="step-preview-item">
              <div className="step-num">03</div>
              <h4>We Run Operations</h4>
              <p>Our team selects winning inventory, creates optimized listings, and fulfills customer orders daily.</p>
            </div>

            <div className="step-preview-item">
              <div className="step-num">04</div>
              <h4>Receive Profit Payouts</h4>
              <p>All sales settle into your personal account. You retain your 40% net profit share effortlessly.</p>
            </div>
          </div>

          <div className="text-center mt-3">
            <Link to="/how-it-works" className="inline-link-btn">
              <span>See the full step-by-step process & responsibilities</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE PARTNERSHIP SPLIT (VISUAL CALLOUT) */}
      <section className="section split-feature-section">
        <div className="container">
          <div className="split-box">
            <div className="split-box-content">
              <span className="split-pill">FAIR & PERFORMANCE-BASED</span>
              <h2>The 60/40 Partnership Model</h2>
              <p className="split-lead">
                We handle 100% of the daily operational grind. You keep 40% of every dollar of net profit simply for maintaining the verified account ownership and letting our team operate.
              </p>
              <div className="split-bars-container">
                <div className="split-stat-row">
                  <div className="split-info">
                    <span className="split-label">Digi Business Solutions (Operations)</span>
                    <span className="split-percentage">60%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill ops-fill" style={{ width: '60%' }}></div>
                  </div>
                  <span className="split-subtext">Covers daily staff, product research software, customer service & management</span>
                </div>

                <div className="split-stat-row">
                  <div className="split-info">
                    <span className="split-label highlight-green">Your Share (Store Owner)</span>
                    <span className="split-percentage text-emerald">40%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill client-fill" style={{ width: '40%' }}></div>
                  </div>
                  <span className="split-subtext">True passive income for providing the verified account foundation</span>
                </div>
              </div>

              <div className="split-action">
                <Button to="/partnership" variant="primary">
                  See Full Partnership Details
                </Button>
              </div>
            </div>

            <div className="split-box-card">
              <div className="glass-card">
                <h3>Why Both Parties Win</h3>
                <div className="glass-item">
                  <span className="check-bullet">✓</span>
                  <div>
                    <strong>No Salaries or Retainers</strong>
                    <p>You never pay us an hourly fee or monthly fixed cost. If your store doesn't profit, we don't profit.</p>
                  </div>
                </div>
                <div className="glass-item">
                  <span className="check-bullet">✓</span>
                  <div>
                    <strong>Funds Stay Under Your Control</strong>
                    <p>eBay deposits client earnings directly into your personal verified bank account.</p>
                  </div>
                </div>
                <div className="glass-item">
                  <span className="check-bullet">✓</span>
                  <div>
                    <strong>Aligned Motivation</strong>
                    <p>Our team is motivated to scale store volume, preserve account health, and maximize profitability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ TEASER */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions about our management model.</p>
          </div>

          <div className="faq-teaser-list">
            <div className="faq-teaser-item">
              <h4>Do I need any previous eBay or e-commerce experience?</h4>
              <p>No. Our operational team handles all product research, listing creation, customer inquiries, and fulfillment. You only need to be the verified account owner.</p>
            </div>

            <div className="faq-teaser-item">
              <h4>Who legally owns the eBay seller account?</h4>
              <p>You do, 100%. The account remains registered in your name and all funds flow straight to your linked bank account. We act solely as authorized managers.</p>
            </div>

            <div className="faq-teaser-item">
              <h4>Are there any upfront setup costs or monthly membership fees?</h4>
              <p>None. We operate purely on a performance-based 60/40 profit share. We only earn when your store generates net profits.</p>
            </div>
          </div>

          <div className="text-center mt-3">
            <Link to="/faq" className="inline-link-btn">
              <span>View all questions & partnership application form</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA BANNER */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-card">
            <h2>Ready to Turn Your eBay Account Into an Income Stream?</h2>
            <p>
              Partner with Digi Business Solutions today. Start building a consistent e-commerce profit stream with a proven management team.
            </p>
            <div className="cta-banner-buttons">
              <Button to="/faq" variant="primary" className="btn-lg">
                Become a Partner Now
              </Button>
              <a
                href="https://wa.me/923266640988?text=Hello!%20I%20am%20interested%20in%20becoming%20a%20partner%20with%20Digi%20Business%20Solutions."
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

export default Home;
