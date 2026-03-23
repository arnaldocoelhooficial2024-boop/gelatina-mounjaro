export function Logo({ className = "w-48" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Gradients */}
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#581c87" />   {/* Deep Purple */}
          <stop offset="50%" stopColor="#9333ea" />  {/* Purple */}
          <stop offset="100%" stopColor="#db2777" /> {/* Pink */}
        </linearGradient>

        <linearGradient id="swooshGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="50%" stopColor="#c026d3" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>

        <radialGradient id="jellyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fbcfe8" />   {/* Light pink highlight */}
          <stop offset="20%" stopColor="#f472b6" />  {/* Pink */}
          <stop offset="50%" stopColor="#d946ef" />  {/* Fuchsia */}
          <stop offset="80%" stopColor="#9333ea" />  {/* Purple */}
          <stop offset="100%" stopColor="#581c87" /> {/* Deep purple edge */}
        </radialGradient>

        {/* Glow and Shadows */}
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#4c1d95" floodOpacity="0.5" />
        </filter>
        
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* --- Soft Pudding/Jelly Dome --- */}
      <g filter="url(#dropShadow)" transform="translate(0, -10)">
        {/* Main Jelly Body (Pudding Shape) */}
        <path 
          d="M 100 120 C 100 155, 300 155, 300 120 C 300 30, 250 10, 200 10 C 150 10, 100 30, 100 120 Z" 
          fill="url(#jellyGradient)" 
        />
        
        {/* Inner shadow for 3D effect */}
        <path 
          d="M 100 120 C 100 155, 300 155, 300 120 C 300 30, 250 10, 200 10 C 150 10, 100 30, 100 120 Z" 
          fill="none" stroke="#4c1d95" strokeWidth="8" opacity="0.3"
        />

        {/* 3D Fluting / Ridges (Makes it look like a molded jelly/pudding) */}
        <path d="M 140 25 C 130 50, 130 90, 135 132" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" opacity="0.3" filter="url(#glow)" />
        <path d="M 200 15 C 195 50, 195 90, 200 140" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" opacity="0.4" filter="url(#glow)" />
        <path d="M 260 25 C 270 50, 270 90, 265 132" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" opacity="0.3" filter="url(#glow)" />

        {/* Darker fluting shadows between the highlights */}
        <path d="M 170 20 C 160 50, 160 90, 165 136" fill="none" stroke="#4c1d95" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
        <path d="M 230 20 C 240 50, 240 90, 235 136" fill="none" stroke="#4c1d95" strokeWidth="6" strokeLinecap="round" opacity="0.4" />

        {/* Glossy Specular Highlights (The "Wet" look) */}
        <path 
          d="M 120 50 C 130 30, 150 20, 170 18 C 150 25, 135 40, 130 60 C 128 55, 125 52, 120 50 Z" 
          fill="#ffffff" 
          opacity="0.8" 
          filter="url(#glow)" 
        />
        <path 
          d="M 125 52 C 132 35, 148 25, 165 22 C 148 28, 135 42, 132 58 Z" 
          fill="#ffffff" 
          opacity="0.9" 
        />
        
        {/* Base Reflection Highlight */}
        <path 
          d="M 110 120 C 150 145, 250 145, 290 120 C 250 135, 150 135, 110 120 Z" 
          fill="#ffffff" 
          opacity="0.6" 
          filter="url(#glow)" 
        />
      </g>

      {/* --- Swoosh --- */}
      <g transform="translate(0, 5)">
        <path 
          d="M 30 150 C 120 120, 280 120, 370 140 C 280 150, 120 150, 30 165 Z" 
          fill="url(#swooshGrad)" 
        />
        {/* Swoosh Highlight */}
        <path 
          d="M 35 148 C 120 122, 275 122, 360 140 C 275 130, 120 130, 35 152 Z" 
          fill="#ffffff" 
          opacity="0.4"
        />
      </g>

      {/* --- Mounjaro Text with Thick 3D Extrusion --- */}
      <g transform="translate(200, 150) rotate(-4)">
        {/* 3D Extrusion Layers */}
        <text x="0" y="12" fontFamily="'Montserrat', sans-serif" fontSize="72" fontWeight="900" fontStyle="italic" textAnchor="middle" fill="#4c1d95">Mounjaro</text>
        <text x="0" y="9" fontFamily="'Montserrat', sans-serif" fontSize="72" fontWeight="900" fontStyle="italic" textAnchor="middle" fill="#6b21a8">Mounjaro</text>
        <text x="0" y="6" fontFamily="'Montserrat', sans-serif" fontSize="72" fontWeight="900" fontStyle="italic" textAnchor="middle" fill="#9333ea">Mounjaro</text>
        <text x="0" y="3" fontFamily="'Montserrat', sans-serif" fontSize="72" fontWeight="900" fontStyle="italic" textAnchor="middle" fill="#c026d3">Mounjaro</text>
        
        {/* Main Text with White Border */}
        <text 
          x="0" y="0" 
          fontFamily="'Montserrat', sans-serif" fontSize="72" fontWeight="900" fontStyle="italic"
          textAnchor="middle" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinejoin="round"
        >
          Mounjaro
        </text>
        {/* Inner Gradient Fill */}
        <text 
          x="0" y="0" 
          fontFamily="'Montserrat', sans-serif" fontSize="72" fontWeight="900" fontStyle="italic"
          textAnchor="middle" fill="url(#textGrad)"
        >
          Mounjaro
        </text>
      </g>

      {/* --- Gelatina Text --- */}
      <g transform="translate(200, 205) rotate(-2)">
        {/* White glow/border for legibility */}
        <text 
          x="0" y="0" 
          fontFamily="'Dancing Script', cursive" fontSize="64" fontWeight="700"
          textAnchor="middle" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinejoin="round"
        >
          Gelatina
        </text>
        <text 
          x="0" y="0" 
          fontFamily="'Dancing Script', cursive" fontSize="64" fontWeight="700"
          textAnchor="middle" fill="#7e22ce"
        >
          Gelatina
        </text>
      </g>

      {/* --- Little Jelly Drop near the 'j' --- */}
      <g transform="translate(255, 85)">
        <path d="M 0 0 C 8 -15, 18 -15, 26 0 C 26 12, 0 12, 0 0 Z" fill="#e11d48" />
        <circle cx="8" cy="-3" r="3" fill="#ffffff" opacity="0.9" />
      </g>

      {/* --- Sparkles --- */}
      <g fill="#ffffff" filter="url(#glow)">
        <path d="M 70 30 Q 75 30 75 25 Q 75 30 80 30 Q 75 30 75 35 Q 75 30 70 30 Z" />
        <path d="M 320 40 Q 328 40 328 32 Q 328 40 336 40 Q 328 40 328 48 Q 328 40 320 40 Z" />
        <path d="M 110 10 Q 114 10 114 6 Q 114 10 118 10 Q 114 10 114 14 Q 114 10 110 10 Z" />
      </g>
    </svg>
  );
}
