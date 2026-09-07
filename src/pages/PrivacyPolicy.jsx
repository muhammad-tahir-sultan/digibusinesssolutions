import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container text-center">
          <div className="legal-badge">
            <Shield size={16} />
            <span>Official Policy</span>
          </div>
          <h1>Privacy Policy</h1>
          <p>Last updated: September 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content-card">
            <Link to="/" className="back-link">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>

            <h2>1. Overview and Commitment</h2>
            <p>
              Digi Business Solutions ("we", "our", or "us") provides done-for-you eBay store operations and management services. We deeply value your privacy and recognize the sensitivity of the information provided by our store partners. This Privacy Policy outlines how we collect, use, and protect your information when you apply or partner with us.
            </p>

            <h2>2. Information We Collect</h2>
            <p>When you fill out our partnership application or communicate with us, we may collect:</p>
            <ul>
              <li><strong>Contact Information:</strong> Full name, email address, phone/WhatsApp number, and country of residence.</li>
              <li><strong>Account Standing:</strong> Status of existing eBay seller accounts and proof of legal residency as required for marketplace compliance.</li>
              <li><strong>Correspondence:</strong> Messages sent via WhatsApp, email, or our web forms.</li>
            </ul>

            <h2>3. Account Ownership & Data Protection</h2>
            <p>
              <strong>We never take ownership of your personal identity or banking credentials.</strong> As our partner, you remain the sole legal owner of your eBay seller account. Any operations performed by our team are conducted with authorized administrative access solely to fulfill our management responsibilities (e.g. creating listings, managing orders, resolving customer service inquiries).
            </p>

            <h2>4. How We Use Your Information</h2>
            <p>The information we collect is utilized strictly to:</p>
            <ul>
              <li>Assess partnership qualification and account eligibility in accordance with eBay policies.</li>
              <li>Coordinate store onboarding, daily listings, order fulfillment, and customer inquiries.</li>
              <li>Deliver performance statements and profit distribution reports.</li>
              <li>Respond promptly to support messages via WhatsApp and email.</li>
            </ul>

            <h2>5. No Sale or Unauthorized Sharing of Data</h2>
            <p>
              We do not sell, rent, or trade your personal information to any third parties or marketing brokers. Data is accessed solely by authorized team personnel who require it to run store operations.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or how your information is handled, please contact our team directly at:
            </p>
            <p className="legal-contact-box">
              <strong>Digi Business Solutions</strong><br />
              Email: <a href="mailto:founder.digibusinesssolutions@gmail.com">founder.digibusinesssolutions@gmail.com</a><br />
              WhatsApp: <a href="https://wa.me/923266640988" target="_blank" rel="noopener noreferrer">+92 326 6640988</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
