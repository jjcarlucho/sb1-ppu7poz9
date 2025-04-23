import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  fullWidth?: boolean;
  small?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  primary,
  secondary,
  fullWidth,
  small,
  className = '',
}) => {
  const baseClasses = 'font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center';
  const sizeClasses = small ? 'py-2 px-4 text-sm' : 'py-3 px-6 text-base';
  const widthClasses = fullWidth ? 'w-full' : '';
  
  let variantClasses = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  
  if (primary) {
    variantClasses = 'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg';
  } else if (secondary) {
    variantClasses = 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg';
  }
  
  const classes = `${baseClasses} ${sizeClasses} ${widthClasses} ${variantClasses} ${className}`;
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};