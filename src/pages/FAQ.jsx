import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Send, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import Button from '../components/Button';
import './FAQ.css';

const FAQ = () => {
  // FAQ accordion state (first item open by default)
  const [openIndex, setOpenIndex] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    hasEbayAccount: 'Yes',
    phone: '',
    notes: ''
  });

  const faqs = [
    {
      q: "Do I need any previous eBay or e-commerce experience?",
      a: "No. Our specialized operational team handles all research, listings, catalog management, customer care, and order fulfillment. You simply need to be the verified account owner in good standing."
    },
    {
      q: "Who legally owns the eBay seller account?",
      a: "You do, always. We operate the store on your behalf as authorized team members, but the account registration, credentials, and funds it generates legally belong to you."
    },
    {
      q: "Where does the money go and how does the profit split work?",
      a: "All customer payments from eBay Managed Payments go directly into your personal verified bank account, as it is linked directly to your account. Your 40% net profit share stays with you; our 60% operational share is distributed based on the transparent payment schedule in the partnership agreement."
    },
    {
      q: "What countries are currently eligible for this partnership?",
      a: "Residents of the United States and most European Union / UK countries. When you submit your application, our onboarding team will immediately confirm eligibility for your specific jurisdiction."
    },
    {
      q: "Is there any cost, setup fee, or monthly retainer to join?",
      a: "No upfront fees whatsoever. We do not charge retainers, coaching fees, or setup charges. We only earn our 60% operational share once your store is actively generating net profits."
    },
    {
      q: "How much time do I realistically need to commit each week?",
      a: "Minimal. You will only need to spend a few minutes occasionally approving major notifications or providing routine verification if eBay requests identity confirmation. Day-to-day work is 100% on us."
    },
    {
      q: "Can I end the partnership if I choose to?",
      a: "Yes. Terms for terminating or pausing the operational partnership are clearly documented in our mutual agreement that you will thoroughly review before signing."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "923266640988";
    const textMessage = `*New Partnership Application - Digi Business Solutions*
----------------------------------------
*Name:* ${formData.fullName || 'Not provided'}
*Email:* ${formData.email || 'Not provided'}
*Country:* ${formData.country || 'Not provided'}
*Has eBay Account:* ${formData.hasEbayAccount}
*Phone:* ${formData.phone || 'Not provided'}
*Notes / Questions:* ${formData.notes || 'None'}
----------------------------------------
I would like to discuss becoming a partner.`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="faq-page">
      {/* SECTION 1: HERO */}
      <section className="page-hero">
        <div className="container text-center">
          <span className="page-badge">FREQUENTLY ASKED QUESTIONS & APPLICATION</span>
          <h1 className="page-title">Questions? Answers. Then, Let's Talk.</h1>
          <p className="page-subtitle">
            Get complete clarity on our operations, legal protections, and payment mechanics, then start your application.
          </p>
        </div>
      </section>

      {/* SECTION 2: FAQ ACCORDION */}
      <section className="section">
        <div className="container">
          <div className="faq-section-wrapper">
            <div className="section-header text-center">
              <h2 className="section-title">Everything You Need to Know</h2>
              <p className="section-subtitle">
                Clear and honest answers regarding our eBay store management partnership.
              </p>
            </div>

            <div className="accordion-container">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`accordion-item ${isOpen ? 'active' : ''}`}
                  >
                    <button 
                      className="accordion-trigger"
                      onClick={() => handleToggle(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="accordion-q-text">{faq.q}</span>
                      <span className="accordion-icon">
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="accordion-content">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTACT / APPLY FORM (SUBMITS VIA WHATSAPP) */}
      <section className="section bg-alt" id="apply-form-section">
        <div className="container">
          <div className="apply-layout">
            <div className="apply-form-card">
              <div className="form-card-header">
                <span className="form-pill">APPLY TODAY</span>
                <h2>Partnership Application</h2>
                <p>
                  Submit your details below. Your submission will immediately open a direct WhatsApp chat with our partnership onboarding team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="apply-form">
                <div className="form-group">
                  <label htmlFor="fullName">Full Legal Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Country of Residence *</label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="">Select your country...</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Italy">Italy</option>
                      <option value="Spain">Spain</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Poland">Poland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Austria">Austria</option>
                      <option value="Norway">Norway</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Other European Country">Other European Country</option>
                      <option value="Other Country">Other Country</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="hasEbayAccount">Do you already have an eBay account?</label>
                    <select
                      id="hasEbayAccount"
                      name="hasEbayAccount"
                      value={formData.hasEbayAccount}
                      onChange={handleChange}
                    >
                      <option value="Yes - Active Account">Yes - Active Account</option>
                      <option value="Yes - Dormant / Inactive">Yes - Dormant / Inactive</option>
                      <option value="No - Need to open one">No - Need to open one</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Message / Questions (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    placeholder="Any specific questions or details about your account..."
                    value={formData.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg submit-btn">
                  <Send size={18} />
                  <span>Become a Partner Now (Submit via WhatsApp)</span>
                </button>

                <div className="form-microcopy">
                  <Clock size={15} />
                  <span>We typically respond within 1-2 hours via WhatsApp (+92 326 6640988).</span>
                </div>
              </form>
            </div>

            {/* Direct Contact & Reassurance Sidebar */}
            <div className="apply-sidebar">
              <div className="sidebar-card direct-chat-card">
                <div className="sidebar-icon-wrap whatsapp-wrap">
                  <MessageCircle size={28} />
                </div>
                <h3>Prefer Direct Messaging?</h3>
                <p>
                  Skip the form and chat with our senior store manager directly on WhatsApp right now.
                </p>
                <a
                  href="https://wa.me/923266640988?text=Hello!%20I%20would%20like%20to%20learn%20more%20about%20becoming%20a%20partner%20with%20Digi%20Business%20Solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp: +92 326 6640988</span>
                </a>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-icon-wrap email-wrap">
                  <Mail size={24} />
                </div>
                <h4>Official Email Inquiry</h4>
                <a href="mailto:founder.digibusinesssolutions@gmail.com" className="sidebar-email">founder.digibusinesssolutions@gmail.com</a>
                <span className="sidebar-sub">For formal documentation or general business queries.</span>
              </div>

              <div className="sidebar-card trust-sidebar-card">
                <div className="sidebar-trust-item">
                  <ShieldCheck size={20} className="trust-green" />
                  <div>
                    <strong>Identity Privacy Guaranteed</strong>
                    <p>We never share your personal data with third parties.</p>
                  </div>
                </div>
                <div className="sidebar-trust-item">
                  <CheckCircle2 size={20} className="trust-green" />
                  <div>
                    <strong>No High-Pressure Sales Calls</strong>
                    <p>An honest review of your account viability and clear agreements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
