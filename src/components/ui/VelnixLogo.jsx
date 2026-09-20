import React from 'react';

export default function VelnixLogo({ 
  size = 40, 
  showText = true, 
  className = '', 
  textClassName = '',
  useImage = false 
}) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {useImage ? (
        <div 
          className="rounded-xl overflow-hidden border border-slate-200 bg-white flex items-center justify-center shrink-0 shadow-2xs"
          style={{ width: size, height: size }}
        >
          <img 
            src="/velnix-logo.jpg" 
            alt="Velnixatech Logo" 
            className="w-full h-full object-contain p-1"
          />
        </div>
      ) : (
        <div 
          className="rounded-xl bg-slate-900 flex items-center justify-center text-white shrink-0 shadow-2xs"
          style={{ width: size, height: size }}
        >
          <svg 
            viewBox="0 0 512 512" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-3/4 h-3/4"
          >
            {/* Central Architectural Chevron V */}
            <path d="M148 140 L256 372 L364 140 L308 140 L256 268 L204 140 Z" fill="#FFFFFF"/>
            <path d="M228 140 L256 208 L284 140 Z" fill="#38BDF8"/>
            <path d="M256 312 L288 236 L256 256 L224 236 Z" fill="#06B6D4"/>
            {/* Left Wing Neural Lattice */}
            <path d="M148 140 L108 196 L172 260 L204 220 Z" stroke="#38BDF8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <line x1="108" y1="196" x2="204" y2="140" stroke="#94A3B8" strokeWidth="8"/>
            <circle cx="108" cy="196" r="12" fill="#38BDF8"/>
            <circle cx="148" cy="140" r="14" fill="#FFFFFF"/>
            <circle cx="172" cy="260" r="12" fill="#06B6D4"/>
            <circle cx="204" cy="140" r="12" fill="#38BDF8"/>
            {/* Right Wing Neural Lattice */}
            <path d="M364 140 L404 196 L340 260 L308 220 Z" stroke="#38BDF8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <line x1="404" y1="196" x2="308" y2="140" stroke="#94A3B8" strokeWidth="8"/>
            <circle cx="404" cy="196" r="12" fill="#38BDF8"/>
            <circle cx="364" cy="140" r="14" fill="#FFFFFF"/>
            <circle cx="340" cy="260" r="12" fill="#06B6D4"/>
            <circle cx="308" cy="140" r="12" fill="#38BDF8"/>
            {/* Bottom Apex Node */}
            <circle cx="256" cy="372" r="14" fill="#38BDF8"/>
          </svg>
        </div>
      )}

      {showText && (
        <div className="flex flex-col">
          <span className={`text-lg font-extrabold tracking-tight text-slate-900 leading-none ${textClassName}`}>
            VELNIXA<span className="text-slate-500">TECH</span>
          </span>
        </div>
      )}
    </div>
  );
}
