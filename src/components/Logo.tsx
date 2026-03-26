export function Logo({ className = "w-48" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Gradients */}
        <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf4ff" />
          <stop offset="50%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
        <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="100%" stopColor="#a21caf" />
        </linearGradient>
        <linearGradient id="cubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#7e22ce" />
        </linearGradient>

        <linearGradient id="mounjaroGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fdf4ff" />
          <stop offset="20%" stopColor="#e879f9" />
          <stop offset="60%" stopColor="#c026d3" />
          <stop offset="100%" stopColor="#86198f" />
        </linearGradient>

        <linearGradient id="swooshGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#db2777" />
          <stop offset="50%" stopColor="#e879f9" />
          <stop offset="100%" stopColor="#7e22ce" />
        </linearGradient>

        <linearGradient id="gelatinaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>

        {/* Glow and Shadows */}
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#4c1d95" floodOpacity="0.4" />
        </filter>
        
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* --- Glowing Gelatin Cube --- */}
      <g transform="translate(0, -10)">
        {/* Cube Base Glow */}
        <path d="M 300 20 L 340 40 L 340 80 L 300 100 L 260 80 L 260 40 Z" fill="#d946ef" filter="url(#strongGlow)" opacity="0.5" />
        
        {/* Faces */}
        <polygon points="300,20 340,40 300,60 260,40" fill="url(#cubeTop)" stroke="url(#cubeTop)" strokeWidth="6" strokeLinejoin="round" />
        <polygon points="260,40 300,60 300,100 260,80" fill="url(#cubeLeft)" stroke="url(#cubeLeft)" strokeWidth="6" strokeLinejoin="round" />
        <polygon points="300,60 340,40 340,80 300,100" fill="url(#cubeRight)" stroke="url(#cubeRight)" strokeWidth="6" strokeLinejoin="round" />
        
        {/* Inner Highlights & Reflections */}
        <path d="M 300 25 L 330 40 L 300 55 L 270 40 Z" fill="#ffffff" opacity="0.5" filter="url(#glow)" />
        <path d="M 265 45 L 295 60 L 295 90 L 265 75 Z" fill="#ffffff" opacity="0.25" />
        <path d="M 305 60 L 335 45 L 335 75 L 305 90 Z" fill="#ffffff" opacity="0.15" />
        
        {/* Edge Highlights */}
        <path d="M 260 40 L 300 60 L 340 40" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 300 60 L 300 100" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6" strokeLinecap="round" />

        {/* Sparkles */}
        <g fill="#ffffff" filter="url(#glow)">
          <path d="M 240 30 Q 245 30 245 25 Q 245 30 250 30 Q 245 30 245 35 Q 245 30 240 30 Z" />
          <path d="M 360 40 Q 368 40 368 32 Q 368 40 376 40 Q 368 40 368 48 Q 368 40 360 40 Z" />
          <path d="M 280 15 Q 283 15 283 12 Q 283 15 286 15 Q 283 15 283 18 Q 283 15 280 15 Z" />
          <path d="M 320 85 Q 324 85 324 81 Q 324 85 328 85 Q 324 85 324 89 Q 324 85 320 85 Z" />
          <path d="M 290 50 Q 295 50 295 45 Q 295 50 300 50 Q 295 50 295 55 Q 295 50 290 50 Z" />
        </g>
      </g>

      {/* --- MOUNJARO Text --- */}
      <g transform="translate(300, 180)">
        {/* 3D Extrusion Layers */}
        <text x="0" y="15" fontFamily="'Arial Black', Impact, system-ui, sans-serif" fontSize="88" fontWeight="900" textAnchor="middle" fill="#4a044e">MOUNJARO</text>
        <text x="0" y="12" fontFamily="'Arial Black', Impact, system-ui, sans-serif" fontSize="88" fontWeight="900" textAnchor="middle" fill="#701a75">MOUNJARO</text>
        <text x="0" y="9" fontFamily="'Arial Black', Impact, system-ui, sans-serif" fontSize="88" fontWeight="900" textAnchor="middle" fill="#86198f">MOUNJARO</text>
        <text x="0" y="6" fontFamily="'Arial Black', Impact, system-ui, sans-serif" fontSize="88" fontWeight="900" textAnchor="middle" fill="#a21caf">MOUNJARO</text>
        <text x="0" y="3" fontFamily="'Arial Black', Impact, system-ui, sans-serif" fontSize="88" fontWeight="900" textAnchor="middle" fill="#c026d3">MOUNJARO</text>
        
        {/* Main Text Border */}
        <text x="0" y="0" fontFamily="'Arial Black', Impact, system-ui, sans-serif" fontSize="88" fontWeight="900" textAnchor="middle" fill="none" stroke="#ffffff" strokeWidth="14" strokeLinejoin="round" filter="url(#dropShadow)">MOUNJARO</text>
        
        {/* Main Text Fill */}
        <text x="0" y="0" fontFamily="'Arial Black', Impact, system-ui, sans-serif" fontSize="88" fontWeight="900" textAnchor="middle" fill="url(#mounjaroGrad)">MOUNJARO</text>
        
        {/* Inner Highlight for Glossy Effect */}
        <text x="0" y="-2" fontFamily="'Arial Black', Impact, system-ui, sans-serif" fontSize="88" fontWeight="900" textAnchor="middle" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6">MOUNJARO</text>
      </g>

      {/* --- Droplet under 'J' --- */}
      {/* Positioned approximately under the 'J' in MOUNJARO */}
      <g transform="translate(325, 182)">
        {/* Droplet 3D shadow */}
        <path d="M 0 0 Q 18 25 0 45 Q -18 25 0 0 Z" fill="#701a75" transform="translate(0, 6)" />
        {/* Droplet Border */}
        <path d="M 0 0 Q 18 25 0 45 Q -18 25 0 0 Z" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinejoin="round" />
        {/* Droplet Fill */}
        <path d="M 0 0 Q 18 25 0 45 Q -18 25 0 0 Z" fill="url(#mounjaroGrad)" />
        {/* Droplet Highlight */}
        <path d="M -4 15 Q -10 28 -4 35 Q 2 28 -4 15 Z" fill="#ffffff" opacity="0.7" filter="url(#glow)" />
        <circle cx="4" cy="30" r="2" fill="#ffffff" opacity="0.9" />
      </g>

      {/* --- Swoosh --- */}
      <g transform="translate(0, 15)">
        {/* Swoosh Shadow */}
        <path d="M 80 210 Q 300 180 520 200 Q 300 195 80 210 Z" fill="#701a75" transform="translate(0, 4)" />
        {/* Swoosh Border */}
        <path d="M 80 210 Q 300 180 520 200 Q 300 195 80 210 Z" fill="none" stroke="#ffffff" strokeWidth="4" />
        {/* Swoosh Fill */}
        <path d="M 80 210 Q 300 180 520 200 Q 300 195 80 210 Z" fill="url(#swooshGrad)" />
        {/* Swoosh Highlight */}
        <path d="M 85 208 Q 300 182 510 198 Q 300 190 85 208 Z" fill="#ffffff" opacity="0.4" />
      </g>

      {/* --- Gelatina Text --- */}
      <g transform="translate(300, 275)">
        {/* Shadow/Border */}
        <text x="0" y="0" fontFamily="'Dancing Script', 'Great Vibes', cursive" fontSize="76" fontWeight="700" textAnchor="middle" fill="none" stroke="#ffffff" strokeWidth="14" strokeLinejoin="round" filter="url(#dropShadow)">Gelatina</text>
        <text x="0" y="4" fontFamily="'Dancing Script', 'Great Vibes', cursive" fontSize="76" fontWeight="700" textAnchor="middle" fill="#701a75">Gelatina</text>
        
        {/* Fill */}
        <text x="0" y="0" fontFamily="'Dancing Script', 'Great Vibes', cursive" fontSize="76" fontWeight="700" textAnchor="middle" fill="url(#gelatinaGrad)">Gelatina</text>
        
        {/* Inner Highlight */}
        <text x="-1" y="-1" fontFamily="'Dancing Script', 'Great Vibes', cursive" fontSize="76" fontWeight="700" textAnchor="middle" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5">Gelatina</text>
      </g>
    </svg>
  );
}
