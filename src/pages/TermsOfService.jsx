import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Legal.css';

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container text-center">
          <div className="legal-badge">
            <FileText size={16} />
            <span>Service Terms</span>
          </div>
          <h1>Terms of Service</h1>
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

            <h2>1. Service Scope and Role</h2>
            <p>
              Digi Business Solutions functions strictly as an operational service provider for eBay seller accounts. We provide day-to-day administrative management, product research, catalog listing creation, customer messaging, and fulfillment coordination. 
            </p>
            <p>
              The client partner remains the verified, legal account holder of record at all times. Digi Business Solutions does not own, claim title to, or control client personal bank accounts or primary identities.
            </p>

            <h2>2. The 60/40 Profit Model</h2>
            <p>
              Our compensation is strictly performance-based. There are zero upfront onboarding fees and zero monthly subscription charges:
            </p>
            <ul>
              <li><strong>Net Profit Definition:</strong> Gross revenue minus product cost of goods sold (COGS), marketplace sales fees (eBay fees), and actual shipping costs.</li>
              <li><strong>Distribution:</strong> 40% of net profits are retained by the store owner; 60% of net profits are remitted to Digi Business Solutions for operational labor and software tooling.</li>
              <li><strong>Direct Deposit:</strong> Because eBay Managed Payments are tied directly to your verified bank, client funds are received directly by the client.</li>
            </ul>

            <h2>3. Partner Responsibilities</h2>
            <p>As a store owner partner, you agree to:</p>
            <ul>
              <li>Provide accurate, verified identity and address information in compliance with eBay seller policies.</li>
              <li>Maintain an active bank account in good standing to receive marketplace payouts.</li>
              <li>Remain reasonably reachable for occasional two-factor authentication or account verification prompts from eBay.</li>
            </ul>

            <h2>4. No Earnings Guarantees</h2>
            <p>
              E-commerce performance varies based on seasonal demand, catalog scaling, and marketplace dynamics. Digi Business Solutions does not guarantee specific dollar amounts or immediate payouts. We operate with standard commercial diligence to maximize store profitability.
            </p>

            <h2>5. Partnership Termination</h2>
            <p>
              Either party may end the operational management agreement in accordance with the terms specified in the formal partnership contract reviewed prior to onboarding. Upon termination, client retains full control of the account.
            </p>

            <h2>6. Inquiries</h2>
            <p>
              For formal legal notices or questions regarding these Terms of Service, please contact:
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

export default TermsOfService;
