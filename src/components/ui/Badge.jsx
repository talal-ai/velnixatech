import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  pulse = false,
  className = '',
  icon: Icon
}) {
  const variants = {
    default: 'bg-slate-100 text-slate-700 border-slate-200',
    brand: 'bg-brand-50 text-brand-700 border-brand-200/70',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
    amber: 'bg-amber-50 text-amber-700 border-amber-200/70',
    dark: 'bg-slate-900 text-slate-100 border-slate-800',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 font-medium tracking-wide',
    md: 'text-xs px-3 py-1 font-medium',
    lg: 'text-sm px-3.5 py-1.5 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border transition-colors ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
