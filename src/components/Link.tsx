import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, className = '', children, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth',
      });
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300 ${className}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};