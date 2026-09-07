import React from 'react';
import './WhatsAppFloat.css';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = "923266640988";
  const defaultMessage = encodeURIComponent("Hello! I am interested in becoming a partner with Digi Business Solutions for eBay store management. Please provide more details.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat on WhatsApp - Become a partner now"
      title="Become a Partner Now"
    >
      <span className="whatsapp-badge">Become a Partner Now</span>
      <div className="whatsapp-icon-wrapper">
        <MessageCircle size={28} />
      </div>
    </a>
  );
};

export default WhatsAppFloat;
