import React from 'react';
import { Link } from 'react-router-dom';
import { Store, TrendingUp, ShieldCheck, Mail, Phone, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand & Tagline */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img 
                src="/Digi Businss Solutions Logo.png" 
                alt="Digi Business Solutions" 
                className="footer-brand-img"
              />
            </Link>
            <p className="footer-tagline">
              Your Store. Our Operations. Shared Success.
            </p>
            <p className="footer-desc">
              Done-for-you eBay store management for US and European account holders. You retain 100% account ownership while earning passive profits.
            </p>
            <div className="footer-badge">
              <ShieldCheck size={16} className="shield-icon" />
              <span>100% Ownership • 40% Net Profit</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/partnership">Partnership Model</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/faq">FAQs & Apply</Link></li>
            </ul>
          </div>

          {/* Col 3: Legal & Trust */}
          <div className="footer-col">
            <h4 className="footer-heading">Legal & Policies</h4>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/faq#privacy">Data Protection FAQ</Link></li>
              <li><Link to="/partnership">Profit Split Terms</Link></li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <a
                  href="https://wa.me/923266640988?text=Hello%20Digi%20Business%20Solutions,%20I%20would%20like%20to%20apply%20for%20the%20eBay%20partnership."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link whatsapp-link"
                >
                  <MessageCircle size={18} className="contact-icon text-green" />
                  <span>+92 326 6640988</span>
                </a>
              </li>
              <li>
                <a href="mailto:founder.digibusinesssolutions@gmail.com" className="contact-link">
                  <Mail size={18} className="contact-icon" />
                  <span className="email-text">founder.digibusinesssolutions@gmail.com</span>
                </a>
              </li>
            </ul>
            <div className="footer-support-pill">
              <span className="pulse-dot"></span>
              <span>Accepting US & EU Partners</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Digi Business Solutions. All rights reserved.
          </p>
          <div className="footer-bottom-badges">
            <span>Direct Bank Deposits</span>
            <span className="dot-sep">•</span>
            <span>Zero Upfront Cost</span>
            <span className="dot-sep">•</span>
            <span className="footer-domain">digibusinesssolutions.business</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
