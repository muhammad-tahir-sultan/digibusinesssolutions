import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, href, className = '', onClick }) => {
  const baseClass = `btn btn-${variant} ${className}`;

  if (to) {
    return <Link to={to} className={baseClass} onClick={onClick}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={baseClass} onClick={onClick} target="_blank" rel="noopener noreferrer">{children}</a>;
  }

  return (
    <button className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
