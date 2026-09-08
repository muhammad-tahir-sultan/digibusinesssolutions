import React, { useState, useEffect, useRef } from 'react';
import { 
  FileCheck, 
  PhoneCall, 
  Store, 
  Cog, 
  Banknote, 
  Check, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  Sparkles,
  ArrowDown,
  MessageCircle
} from 'lucide-react';
import Button from '../components/Button';
import './HowItWorks.css';

const HowItWorks = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([0]);
  const timelineRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    {
      num: '01',
      title: 'Apply for Partnership',
      text: 'Fill out our short online application or message us directly on WhatsApp. We simply need to confirm your eligibility, primarily residency in the United States or a qualified European country.',
      icon: <FileCheck size={28} />,
      badge: 'Step 1: Eligibility Check'
    },
    {
      num: '02',
      title: 'Screening & Agreement Walkthrough',
      text: 'Our onboarding team schedules a brief call to verify your details, answer all of your questions, and walk you through our official partnership agreement. Everything is transparent before you sign.',
      icon: <PhoneCall size={28} />,
      badge: 'Step 2: Mutual Alignment'
    },
    {
      num: '03',
      title: 'Store Setup & Readying',
      text: 'If you already hold an eBay account in good standing, we audit and prepare it for commercial scale. If you do not have one yet, our team provides step-by-step guidance on registering correctly in your own legal name.',
      icon: <Store size={28} />,
      badge: 'Step 3: Account Infrastructure'
    },
    {
      num: '04',
      title: 'We Operate, You Own',
      text: 'Our team takes over daily heavy lifting: market research, product listing, SEO pricing, inventory sync, order fulfillment coordination, customer inquiries, and eBay policy compliance, all under your account with you kept informed.',
      icon: <Cog size={28} />,
      badge: 'Step 4: Active Management'
    },
    {
      num: '05',
      title: 'Receive Direct Payouts',
      text: 'Every sale is processed through eBay Managed Payments directly into your personal bank account. Your 40% net profit share stays in your hands immediately, so you never have to wait for us to wire your earnings.',
      icon: <Banknote size={28} />,
      badge: 'Step 5: Profit Distribution'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of scroll through the timeline
      const startOffset = windowHeight * 0.55;
      const progressPixels = startOffset - rect.top;
      const totalHeight = rect.height;
      let pct = (progressPixels / totalHeight) * 100;
      pct = Math.max(0, Math.min(100, pct));
      setScrollProgress(pct);

      // Determine active step based on viewport focus line (45% from top)
      const focalLine = windowHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;
      const inViewIndices = [];

      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const elRect = el.getBoundingClientRect();
        const elCenter = elRect.top + elRect.height / 2;
        const dist = Math.abs(elCenter - focalLine);

        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = index;
        }

        // Element is visible in viewport window
        if (elRect.top < windowHeight * 0.85 && elRect.bottom > windowHeight * 0.15) {
          inViewIndices.push(index);
        }
      });

      setActiveStep(closestIdx);
      if (inViewIndices.length > 0) {
        setVisibleSteps(inViewIndices);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run immediately to set initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="how-it-works-page">
      {/* SECTION 1: HERO */}
      <section className="page-hero">
        <div className="container text-center">
          <span className="page-badge">THE COMPLETE ROADMAP</span>
          <h1 className="page-title">From Application to Payout: Here's Exactly How It Works</h1>
          <p className="page-subtitle">
            A simple, transparent, and structured process. Scroll through the roadmap below to see each stage.
          </p>
          <div className="roadmap-status-pill">
            <Sparkles size={16} className="pill-sparkle" />
            <span>Interactive Roadmap: <strong>Step {activeStep + 1} of 5 Active</strong></span>
          </div>
        </div>
      </section>

      {/* SECTION 2: 5-STEP ANIMATED TIMELINE LADDER */}
      <section className="section ladder-section">
        <div className="container">
          <div className="timeline-container" ref={timelineRef}>
            {/* Dynamic Spine Rail & Progress Fill */}
            <div className="timeline-spine-track">
              <div 
                className="timeline-spine-fill"
                style={{ height: `${scrollProgress}%` }}
              >
                <div className="timeline-spine-glow" />
              </div>
            </div>

            {steps.map((step, idx) => {
              const isVisible = visibleSteps.includes(idx);
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <div 
                  key={step.num}
                  ref={(el) => (stepRefs.current[idx] = el)}
                  className={`timeline-row ${idx % 2 === 1 ? 'row-reverse' : ''} ${
                    isVisible ? 'step-visible' : 'step-dimmed'
                  } ${isActive ? 'step-active' : ''} ${isPassed ? 'step-passed' : ''}`}
                >
                  <div className="timeline-content-card">
                    <div className="step-tag-wrapper">
                      <span className="step-pill">{step.badge}</span>
                      {isActive && <span className="step-current-tag">● Active Stage</span>}
                    </div>
                    <div className="step-card-header">
                      <div className="step-icon-bubble">{step.icon}</div>
                      <span className="step-big-num">{step.num}</span>
                    </div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.text}</p>
                  </div>

                  <div className="timeline-center-marker">
                    <div className={`marker-dot ${isActive ? 'marker-active' : ''} ${isPassed ? 'marker-passed' : ''}`}>
                      {isPassed ? (
                        <Check size={14} className="marker-check-icon" />
                      ) : (
                        <span className="marker-num">{idx + 1}</span>
                      )}
                    </div>
                    {isActive && <div className="marker-pulse-ring" />}
                  </div>

                  <div className="timeline-spacer"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPARISON TABLE (WHAT WE HANDLE VS WHAT YOU DO) */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Clear Division of Responsibilities</h2>
            <p className="section-subtitle">
              Transparency is the cornerstone of our partnership. Here is the exact breakdown of who does what.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <div className="table-col ops-col">
              <div className="table-col-header ops-header">
                <div className="header-icon-wrap">
                  <Cog size={24} />
                </div>
                <div>
                  <h3>Handled by Digi Business Solutions</h3>
                  <span className="header-sub">Our Daily Operational Specialists</span>
                </div>
              </div>
              <ul className="table-items">
                <li>
                  <Check className="check-icon ops-check" size={20} />
                  <div>
                    <strong>Product Research & Supplier Sourcing</strong>
                    <p>Identifying high-demand, high-margin items using proprietary market analysis.</p>
                  </div>
                </li>
                <li>
                  <Check className="check-icon ops-check" size={20} />
                  <div>
                    <strong>Listing Creation & SEO Optimization</strong>
                    <p>Writing persuasive copy, creating gallery images, and optimizing search ranking.</p>
                  </div>
                </li>
                <li>
                  <Check className="check-icon ops-check" size={20} />
                  <div>
                    <strong>Order Processing & Dispatch Tracking</strong>
                    <p>Fulfilling orders promptly and keeping tracking numbers synchronized with eBay.</p>
                  </div>
                </li>
                <li>
                  <Check className="check-icon ops-check" size={20} />
                  <div>
                    <strong>Full Customer Care & Messaging</strong>
                    <p>Handling buyer questions, returns, and reviews to protect store ratings.</p>
                  </div>
                </li>
                <li>
                  <Check className="check-icon ops-check" size={20} />
                  <div>
                    <strong>Account Health & Policy Compliance</strong>
                    <p>Continuous monitoring to ensure strict adherence to eBay seller standards.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="table-col client-col">
              <div className="table-col-header client-header">
                <div className="header-icon-wrap client-wrap">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3>Handled by You</h3>
                  <span className="header-sub">The Verified Account Owner</span>
                </div>
              </div>
              <ul className="table-items">
                <li>
                  <Check className="check-icon client-check" size={20} />
                  <div>
                    <strong>Being the Verified Account Holder</strong>
                    <p>Holding the legal identity and bank account in good standing with eBay.</p>
                  </div>
                </li>
                <li>
                  <Check className="check-icon client-check" size={20} />
                  <div>
                    <strong>Reviewing Monthly Performance Reports</strong>
                    <p>Checking sales summaries, profit payouts, and store growth milestones.</p>
                  </div>
                </li>
                <li>
                  <Check className="check-icon client-check" size={20} />
                  <div>
                    <strong>Remaining Reachable for Identity Verification</strong>
                    <p>Submitting any routine verification documents if eBay flags a security check.</p>
                  </div>
                </li>
                <li>
                  <Check className="check-icon client-check" size={20} />
                  <div>
                    <strong>Approving Major Account Decisions</strong>
                    <p>You retain final authority over significant store changes and agreements.</p>
                  </div>
                </li>
                <li className="empty-slot">
                  <div className="relax-box">
                    <span className="relax-icon">☕</span>
                    <strong>Zero daily packaging, shipping, or support chores!</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TIMELINE EXPECTATION */}
      <section className="section">
        <div className="container">
          <div className="timeline-notice-box">
            <div className="notice-icon">
              <Clock size={32} />
            </div>
            <div className="notice-content">
              <h3>Realistic Timeline Expectations</h3>
              <p>
                E-commerce is a real business built on marketplace reputation. Most partner stores take 
                <strong> 2 to 4 weeks</strong> to warm up and build positive buyer feedback before generating steady, consistent sales volume.
              </p>
              <p className="notice-sub">
                Our team provides weekly progress updates and maintains open communication as your store matures into a profitable asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="cta-banner-section bg-alt">
        <div className="container text-center">
          <div className="cta-banner-card">
            <h2>Ready to Put Our Operations Team to Work?</h2>
            <p>
              Join Digi Business Solutions today. Check your eligibility and start the onboarding process in minutes.
            </p>
            <div className="cta-banner-buttons">
              <Button to="/faq" variant="primary" className="btn-lg">
                Become a Partner Now
              </Button>
              <a
                href="https://wa.me/923266640988?text=Hello!%20I%20reviewed%20the%20How%20It%20Works%20page%20and%20want%20to%20apply."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} />
                <span>Apply via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
