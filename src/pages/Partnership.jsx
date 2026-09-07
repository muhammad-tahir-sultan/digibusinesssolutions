import React from 'react';
import { 
  Percent, 
  CheckCircle, 
  XCircle, 
  Shield, 
  TrendingUp, 
  DollarSign, 
  FileText, 
  Briefcase 
} from 'lucide-react';
import Button from '../components/Button';
import './Partnership.css';

const Partnership = () => {
  return (
    <div className="partnership-page">
      {/* SECTION 1: HERO */}
      <section className="page-hero">
        <div className="container text-center">
          <span className="page-badge">THE COMMERCIAL MODEL</span>
          <h1 className="page-title">A Straightforward 60/40 Partnership</h1>
          <p className="page-subtitle">
            No monthly retainers. No upfront onboarding fees. We only earn when your store produces real, tangible profit.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE MODEL EXPLAINED */}
      <section className="section">
        <div className="container">
          <div className="model-feature-card">
            <div className="model-visual-box">
              <div className="donut-graphic-wrapper">
                <div className="donut-circle">
                  <div className="donut-center">
                    <span className="donut-title">Net Profit</span>
                    <span className="donut-stat">100%</span>
                  </div>
                </div>
              </div>

              <div className="split-legend">
                <div className="legend-item ops-legend">
                  <div className="legend-badge">60%</div>
                  <div>
                    <strong>Digi Business Solutions (Operations)</strong>
                    <p>Covers our software tools, inventory researchers, copywriters, customer support reps, and store directors.</p>
                  </div>
                </div>

                <div className="legend-item client-legend">
                  <div className="legend-badge client-badge">40%</div>
                  <div>
                    <strong>You (Account Owner)</strong>
                    <p>Passive earnings delivered straight into your bank account for providing the verified account foundation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="model-text-box">
              <h2>How Profit is Shared in Practice</h2>
              <p className="lead-paragraph">
                You don't pay us a salary or an upfront subscription. Instead, once your store is profitable, all net earnings (gross sales minus product cost, shipping, and eBay platform fees) are distributed directly.
              </p>

              <div className="model-bullet-points">
                <div className="bullet-card">
                  <CheckCircle className="bullet-icon" size={20} />
                  <div>
                    <strong>Zero Cost to Join</strong>
                    <p>We do not charge onboarding fees, setup costs, or recurring platform dues.</p>
                  </div>
                </div>

                <div className="bullet-card">
                  <CheckCircle className="bullet-icon" size={20} />
                  <div>
                    <strong>No Upfront Inventory Purchases</strong>
                    <p>All product sourcing and order fulfillment arrangements are handled by our operational team.</p>
                  </div>
                </div>

                <div className="bullet-card">
                  <CheckCircle className="bullet-icon" size={20} />
                  <div>
                    <strong>You Retain All Funds & Ownership</strong>
                    <p>eBay deposits all revenue into your account. You hold the legal custody of the funds at all times.</p>
                  </div>
                </div>

                <div className="bullet-card">
                  <CheckCircle className="bullet-icon" size={20} />
                  <div>
                    <strong>Transparent Monthly Ledger Reporting</strong>
                    <p>Receive comprehensive, itemized reports tracking every sale, cost, and net profit metric.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: WHO THIS IS FOR VS WHO THIS IS NOT FOR */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Is This Partnership Right for You?</h2>
            <p className="section-subtitle">
              We value long-term partnerships and clear alignment. Review our criteria to see if you qualify.
            </p>
          </div>

          <div className="qualification-grid">
            {/* WHO THIS IS FOR */}
            <div className="qual-card for-card">
              <div className="qual-header for-header">
                <div className="qual-icon-box for-icon">
                  <CheckCircle size={26} />
                </div>
                <div>
                  <h3>Who This Is FOR</h3>
                  <span>Ideal Partners</span>
                </div>
              </div>
              <ul className="qual-list">
                <li>
                  <CheckCircle className="qual-check green" size={20} />
                  <span><strong>Residents of the US or European countries</strong> with valid proof of address and identity.</span>
                </li>
                <li>
                  <CheckCircle className="qual-check green" size={20} />
                  <span><strong>18+ years of age</strong> and able to meet official eBay and financial compliance checks.</span>
                </li>
                <li>
                  <CheckCircle className="qual-check green" size={20} />
                  <span><strong>Responsible account owners</strong> who are comfortable staying reachable for occasional verification calls or codes.</span>
                </li>
                <li>
                  <CheckCircle className="qual-check green" size={20} />
                  <span><strong>Seeking supplemental income</strong> without taking on the time commitment or stress of a second job.</span>
                </li>
                <li>
                  <CheckCircle className="qual-check green" size={20} />
                  <span><strong>Appreciates clear contracts</strong> and understands that legitimate commerce scales over weeks, not overnight.</span>
                </li>
              </ul>
            </div>

            {/* WHO THIS IS NOT FOR */}
            <div className="qual-card not-card">
              <div className="qual-header not-header">
                <div className="qual-icon-box not-icon">
                  <XCircle size={26} />
                </div>
                <div>
                  <h3>Who This Is NOT FOR</h3>
                  <span>Clear Disqualifiers</span>
                </div>
              </div>
              <ul className="qual-list">
                <li>
                  <XCircle className="qual-check red" size={20} />
                  <span><strong>Looking for guaranteed fixed payouts</strong> regardless of store sales volume or market realities.</span>
                </li>
                <li>
                  <XCircle className="qual-check red" size={20} />
                  <span><strong>Unable or unwilling to verify identity</strong>, bank details, or address with standard compliance documents.</span>
                </li>
                <li>
                  <XCircle className="qual-check red" size={20} />
                  <span><strong>Wanting completely zero communication:</strong> we need periodic confirmation if eBay prompts an account check.</span>
                </li>
                <li>
                  <XCircle className="qual-check red" size={20} />
                  <span><strong>Expecting "get rich tomorrow" schemes:</strong> we build durable, high-reputation e-commerce assets.</span>
                </li>
                <li>
                  <XCircle className="qual-check red" size={20} />
                  <span><strong>Accounts with previous unresolved eBay suspensions</strong> or fraudulent activity.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="cta-banner-section">
        <div className="container text-center">
          <div className="cta-banner-card">
            <h2>See If You Qualify for the 60/40 Partnership</h2>
            <p>
              Spots for new store onboardings are limited each month to ensure dedicated operational attention to every account.
            </p>
            <div className="cta-banner-buttons">
              <Button to="/faq" variant="primary" className="btn-lg">
                Become a Partner Now
              </Button>
              <a
                href="https://wa.me/923266640988?text=Hello!%20I%20reviewed%20the%2060/40%20Partnership%20page%20and%20want%20to%20apply."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                Chat on WhatsApp (+92 326 6640988)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
