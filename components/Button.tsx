import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, fullWidth = false, className = '' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center
        bg-primary text-white font-bold uppercase tracking-wider
        py-4 px-8 rounded-md transition-all duration-300
        shadow-neon hover:shadow-neon-hover hover:-translate-y-1
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      {children}
    </a>
  );
};

export default Button;