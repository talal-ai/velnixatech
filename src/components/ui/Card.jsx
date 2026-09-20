import React from 'react';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'p-6 sm:p-8',
  ...props
}) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/90 shadow-soft-sm ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-slate-300' : ''
      } ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
