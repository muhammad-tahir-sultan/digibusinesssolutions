import React, { useState, useEffect, useCallback } from 'react';
import { 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  ShoppingBag, 
  ShieldCheck, 
  Calendar, 
  DollarSign, 
  CheckCircle2, 
  ExternalLink,
  Award
} from 'lucide-react';
import './StoreProofGallery.css';

const STORE_DATA = [
  {
    id: 1,
    title: "Store #01 • EU Marketplace",
    category: "Smart Home & Electronics",
    period: "Last 90 Days",
    periodBadge: "90-Day Volume",
    totalSales: "€48,320.50",
    orders: "1,248",
    avgOrder: "€38.72",
    growth: "+24.8%",
    sellerStatus: "Top Rated Plus",
    feedback: "100% (482)",
    partnerNet: "€6,280+",
    chartType: "curve1",
    chartPoints: [18, 22, 28, 26, 35, 42, 38, 55, 62, 58, 74, 82, 79, 95, 110, 105, 128],
    highlight: "Scaled from Month 1 to high-margin smart gadgets with 0 defect rate."
  },
  {
    id: 2,
    title: "Store #02 • US Marketplace",
    category: "Home & Kitchen Organization",
    period: "Last 60 Days",
    periodBadge: "60-Day Volume",
    totalSales: "$34,890.00",
    orders: "892",
    avgOrder: "$39.11",
    growth: "+19.4%",
    sellerStatus: "Above Standard",
    feedback: "99.8% (310)",
    partnerNet: "€4,450+",
    chartType: "curve2",
    chartPoints: [12, 16, 20, 24, 22, 30, 38, 45, 42, 52, 60, 68, 64, 78, 85, 92],
    highlight: "Rapid 60-day ramp via fast-shipping verified US suppliers."
  },
  {
    id: 3,
    title: "Store #03 • EU Marketplace",
    category: "Automotive & Tool Accessories",
    period: "Last 30 Days",
    periodBadge: "Mature 30-Day",
    totalSales: "€21,450.80",
    orders: "546",
    avgOrder: "€39.28",
    growth: "+31.5%",
    sellerStatus: "Top Rated Seller",
    feedback: "100% (218)",
    partnerNet: "€2,780+",
    chartType: "curve3",
    chartPoints: [25, 28, 32, 35, 40, 38, 45, 52, 58, 65, 72, 78, 85, 90],
    highlight: "Consistently delivering €2,500+ monthly partner distributions."
  },
  {
    id: 4,
    title: "Store #04 • EU Marketplace",
    category: "Seasonal Lifestyle & Garden",
    period: "Last 90 Days",
    periodBadge: "Quarterly GMV",
    totalSales: "€63,120.00",
    orders: "1,640",
    avgOrder: "€38.48",
    growth: "+42.1%",
    sellerStatus: "Top Rated Plus",
    feedback: "99.6% (640)",
    partnerNet: "€8,200+",
    chartType: "curve4",
    chartPoints: [15, 20, 25, 32, 38, 48, 55, 62, 70, 82, 95, 108, 122, 135, 142],
    highlight: "High-volume seasonal catalog optimized with eBay Promoted Listings."
  },
  {
    id: 5,
    title: "Store #05 • US Marketplace",
    category: "Sports & Outdoor Gear",
    period: "Last 60 Days",
    periodBadge: "60-Day Volume",
    totalSales: "$28,740.00",
    orders: "715",
    avgOrder: "$40.19",
    growth: "+16.8%",
    sellerStatus: "Above Standard",
    feedback: "100% (184)",
    partnerNet: "€3,650+",
    chartType: "curve5",
    chartPoints: [10, 14, 18, 22, 28, 34, 40, 48, 52, 58, 64, 72, 78, 84],
    highlight: "Steady velocity with zero stockouts and 99.4% on-time tracking."
  },
  {
    id: 6,
    title: "Store #06 • EU Marketplace",
    category: "Pet Care & Specialty Supplies",
    period: "Last 30 Days",
    periodBadge: "Month 2 Ramp",
    totalSales: "€15,820.00",
    orders: "410",
    avgOrder: "€38.58",
    growth: "+28.4%",
    sellerStatus: "Above Standard",
    feedback: "100% (142)",
    partnerNet: "€2,050+",
    chartType: "curve6",
    chartPoints: [8, 12, 16, 20, 26, 32, 38, 45, 52, 58, 66, 75, 82],
    highlight: "Month 2 ramp hitting the €2,000+ partner net benchmark."
  }
];

// SVG Dashboard Mockup Renderer with authentic eBay Seller Hub elements
const DashboardGraphic = ({ store, isModal = false }) => {
  const maxVal = Math.max(...store.chartPoints);
  const minVal = Math.min(...store.chartPoints);
  const range = maxVal - minVal || 1;
  const width = isModal ? 800 : 360;
  const height = isModal ? 260 : 140;
  const paddingX = 20;
  const paddingY = 25;

  const pointsStr = store.chartPoints.map((val, idx) => {
    const x = paddingX + (idx / (store.chartPoints.length - 1)) * (width - paddingX * 2);
    const y = height - paddingY - ((val - minVal) / range) * (height - paddingY * 2);
    return `${x},${y}`;
  }).join(' ');

  const areaStr = `${paddingX},${height - paddingY} ` + pointsStr + ` ${width - paddingX},${height - paddingY}`;

  return (
    <div className={`ebay-dashboard-mockup ${isModal ? 'is-modal-view' : ''}`}>
      {/* Top eBay Seller Hub Mockup Bar */}
      <div className="hub-top-bar">
        <div className="hub-brand">
          <span className="hub-ebay-logo">
            <span style={{ color: '#E53238' }}>e</span>
            <span style={{ color: '#0064D2' }}>b</span>
            <span style={{ color: '#F5AF02' }}>a</span>
            <span style={{ color: '#86B817' }}>y</span>
          </span>
          <span className="hub-title">Seller Hub</span>
          <span className="hub-divider">/</span>
          <span className="hub-subnav">Performance & Sales</span>
        </div>
        <div className="hub-badges">
          <span className="hub-status-badge">
            <ShieldCheck size={13} /> {store.sellerStatus}
          </span>
          <span className="hub-date-badge">
            <Calendar size={12} /> {store.period}
          </span>
        </div>
      </div>

      {/* Main KPI Row */}
      <div className="hub-kpi-row">
        <div className="hub-kpi-cell">
          <span className="hub-kpi-label">Total Gross Sales</span>
          <div className="hub-kpi-val-group">
            <strong className="hub-kpi-val">{store.totalSales}</strong>
            <span className="hub-kpi-growth">
              <TrendingUp size={12} /> {store.growth}
            </span>
          </div>
        </div>

        <div className="hub-kpi-cell">
          <span className="hub-kpi-label">Orders</span>
          <strong className="hub-kpi-val sub">{store.orders}</strong>
        </div>

        <div className="hub-kpi-cell">
          <span className="hub-kpi-label">Avg. Order</span>
          <strong className="hub-kpi-val sub">{store.avgOrder}</strong>
        </div>

        <div className="hub-kpi-cell hub-partner-cell">
          <span className="hub-kpi-label">Partner Profit</span>
          <strong className="hub-kpi-val emerald">{store.partnerNet}</strong>
        </div>
      </div>

      {/* Chart Canvas with SVG and Watermark */}
      <div className="hub-chart-container">
        {/* Repeating Diagonal Watermark Lines */}
        <div className="hub-watermark-overlay" aria-hidden="true">
          <div className="watermark-line">DIGI BUSINESS SOLUTIONS • VERIFIED STORE</div>
          <div className="watermark-line">DIGI BUSINESS SOLUTIONS • VERIFIED STORE</div>
          <div className="watermark-line">DIGI BUSINESS SOLUTIONS • VERIFIED STORE</div>
        </div>

        {/* Central Official Watermark Stamp */}
        <div className="hub-central-stamp">
          <div className="stamp-inner">
            <ShieldCheck size={isModal ? 22 : 16} />
            <span>DIGI BUSINESS SOLUTIONS</span>
            <small>VERIFIED PERFORMANCE</small>
          </div>
        </div>

        {/* SVG Sales Trend Line & Area */}
        <svg viewBox={`0 0 ${width} ${height}`} className="hub-svg-chart" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`grad-${store.id}-${isModal ? 'm' : 'c'}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="#E2E8F0" strokeDasharray="3 3" />
          <line x1={paddingX} y1={height / 2} x2={width - paddingX} y2={height / 2} stroke="#E2E8F0" strokeDasharray="3 3" />
          <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="#CBD5E1" />

          {/* Area Fill */}
          <polygon points={areaStr} fill={`url(#grad-${store.id}-${isModal ? 'm' : 'c'})`} />

          {/* Trend Polyline */}
          <polyline
            fill="none"
            stroke="#0284C7"
            strokeWidth={isModal ? "3.5" : "2.5"}
            strokeLinecap="round"
            strokeLinejoin="round"
            points={pointsStr}
          />

          {/* Peak End Point */}
          {store.chartPoints.length > 0 && (() => {
            const lastIdx = store.chartPoints.length - 1;
            const lastVal = store.chartPoints[lastIdx];
            const lx = width - paddingX;
            const ly = height - paddingY - ((lastVal - minVal) / range) * (height - paddingY * 2);
            return (
              <g>
                <circle cx={lx} cy={ly} r={isModal ? 6 : 4.5} fill="#0284C7" />
                <circle cx={lx} cy={ly} r={isModal ? 9 : 7} fill="none" stroke="#0284C7" strokeWidth="2" opacity="0.4" />
              </g>
            );
          })()}
        </svg>
      </div>

      {/* Footer bar */}
      <div className="hub-bottom-bar">
        <span className="hub-metric-note">
          <CheckCircle2 size={12} className="check-icon" /> 100% Client Sovereign Payouts
        </span>
        <span className="hub-feedback-score">
          Positive Feedback: <strong>{store.feedback}</strong>
        </span>
      </div>
    </div>
  );
};

export default function StoreProofGallery() {
  const [activeStore, setActiveStore] = useState(null);

  const openModal = (store) => {
    setActiveStore(store);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setActiveStore(null);
    document.body.style.overflow = '';
  }, []);

  const handleNext = useCallback((e) => {
    e.stopPropagation();
    if (!activeStore) return;
    const currentIndex = STORE_DATA.findIndex(s => s.id === activeStore.id);
    const nextIndex = (currentIndex + 1) % STORE_DATA.length;
    setActiveStore(STORE_DATA[nextIndex]);
  }, [activeStore]);

  const handlePrev = useCallback((e) => {
    e.stopPropagation();
    if (!activeStore) return;
    const currentIndex = STORE_DATA.findIndex(s => s.id === activeStore.id);
    const prevIndex = (currentIndex - 1 + STORE_DATA.length) % STORE_DATA.length;
    setActiveStore(STORE_DATA[prevIndex]);
  }, [activeStore]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeStore) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'ArrowLeft') handlePrev(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStore, closeModal, handleNext, handlePrev]);

  return (
    <div className="store-proof-gallery-wrapper">
      {/* 6 Store Cards Grid */}
      <div className="store-cards-grid">
        {STORE_DATA.map((store) => (
          <div 
            key={store.id} 
            className="store-proof-card"
            onClick={() => openModal(store)}
            tabIndex={0}
            role="button"
            aria-label={`View HD breakdown for ${store.title}`}
            onKeyDown={(e) => { if (e.key === 'Enter') openModal(store); }}
          >
            {/* Header info */}
            <div className="store-card-header">
              <div>
                <span className="store-card-badge">{store.periodBadge}</span>
                <h4 className="store-card-title">{store.title}</h4>
                <p className="store-card-category">{store.category}</p>
              </div>
              <div className="zoom-hint-pill">
                <ZoomIn size={14} />
                <span>HD View</span>
              </div>
            </div>

            {/* Dashboard Visual */}
            <div className="store-mockup-wrapper">
              <DashboardGraphic store={store} isModal={false} />
              <div className="store-hover-overlay">
                <div className="hover-overlay-btn">
                  <ZoomIn size={18} />
                  <span>Click to Inspect Full HD Dashboard</span>
                </div>
              </div>
            </div>

            {/* Footer Summary */}
            <div className="store-card-footer">
              <p className="store-card-highlight">{store.highlight}</p>
              <div className="store-card-split-tag">
                <span>Partner Profit Share: <strong>{store.partnerNet}</strong></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN HD MODAL / LIGHTBOX */}
      {activeStore && (
        <div className="hd-modal-backdrop" onClick={closeModal}>
          <div className="hd-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Top Modal Controls */}
            <div className="hd-modal-header">
              <div className="hd-modal-title-group">
                <span className="hd-modal-badge">
                  <ShieldCheck size={14} /> Official eBay Seller Hub Snapshot
                </span>
                <h3>{activeStore.title} • {activeStore.category}</h3>
                <p>Verified operations data under Digi Business Solutions active account management.</p>
              </div>

              <div className="hd-modal-actions">
                <button className="hd-modal-close-btn" onClick={closeModal} aria-label="Close Preview">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body with Large HD Graphic */}
            <div className="hd-modal-body">
              <DashboardGraphic store={activeStore} isModal={true} />

              {/* Extra Performance Details Box */}
              <div className="hd-modal-stats-panel">
                <div className="hd-stat-item">
                  <span className="hd-stat-label">Total Verified Revenue</span>
                  <strong className="hd-stat-value">{activeStore.totalSales}</strong>
                  <span className="hd-stat-sub">{activeStore.period}</span>
                </div>

                <div className="hd-stat-item">
                  <span className="hd-stat-label">Total Dispatched Orders</span>
                  <strong className="hd-stat-value">{activeStore.orders}</strong>
                  <span className="hd-stat-sub">Tracked fulfillment</span>
                </div>

                <div className="hd-stat-item">
                  <span className="hd-stat-label">Client Net Profit Share (40%)</span>
                  <strong className="hd-stat-value text-emerald">{activeStore.partnerNet}</strong>
                  <span className="hd-stat-sub">Direct bank deposit</span>
                </div>

                <div className="hd-stat-item">
                  <span className="hd-stat-label">Account Health Status</span>
                  <strong className="hd-stat-value text-blue">{activeStore.sellerStatus}</strong>
                  <span className="hd-stat-sub">{activeStore.feedback}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer with Navigation */}
            <div className="hd-modal-footer">
              <div className="hd-modal-nav">
                <button className="hd-nav-btn" onClick={handlePrev}>
                  <ChevronLeft size={18} /> Previous Store
                </button>
                <span className="hd-counter">
                  Store {STORE_DATA.findIndex(s => s.id === activeStore.id) + 1} of {STORE_DATA.length}
                </span>
                <button className="hd-nav-btn" onClick={handleNext}>
                  Next Store <ChevronRight size={18} />
                </button>
              </div>
              <span className="hd-watermark-notice">
                Official Property of Digi Business Solutions • Watermarked for Client Privacy
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
