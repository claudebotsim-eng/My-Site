import './Logo.css'

// ─────────────────────────────────────────────────────────────
//  Bridging Wellness — Professional Emblem Logo
//  Badge style: circular field, architectural bridge,
//  botanical growth element, refined wordmark
// ─────────────────────────────────────────────────────────────

export function LogoMark({ size = 64, className = '' }) {
  const id = 'bw'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-mark ${className}`}
      aria-hidden="true"
    >
      {/* ── BADGE BACKGROUND ── */}
      <circle cx="40" cy="40" r="38" fill={`url(#${id}BgGrad)`} />
      <circle cx="40" cy="40" r="38" fill="none" stroke={`url(#${id}BorderGrad)`} strokeWidth="1.2" />

      {/* Inner subtle ring */}
      <circle cx="40" cy="40" r="35" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />

      {/* ── BACKGROUND LIGHT GLOW ── */}
      <ellipse cx="40" cy="28" rx="22" ry="14" fill="rgba(255,255,255,0.06)" />

      {/* ── BRIDGE STRUCTURE ── */}

      {/* Main arch — thick, elegant */}
      <path
        d="M10 54 C10 32 22 18 40 18 C58 18 70 32 70 54"
        stroke={`url(#${id}ArchMain)`}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Secondary inner arch — depth */}
      <path
        d="M16 54 C16 36 26 24 40 24 C54 24 64 36 64 54"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />

      {/* Arch highlight — top edge shimmer */}
      <path
        d="M14 46 C16 34 24 22 40 20 C56 22 64 34 66 46"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── BRIDGE DECK ── */}
      {/* Main deck */}
      <rect x="7" y="53" width="66" height="3.5" rx="1.75" fill={`url(#${id}DeckGrad)`} />
      {/* Deck highlight */}
      <rect x="7" y="53" width="66" height="1" rx="0.5" fill="rgba(255,255,255,0.25)" />
      {/* Deck shadow */}
      <rect x="7" y="56" width="66" height="1" rx="0.5" fill="rgba(0,0,0,0.15)" />

      {/* ── SUSPENSION CABLES ── */}
      {/* Left cables — from arch to deck */}
      <line x1="17" y1="54" x2="20" y2="38" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="23" y1="54" x2="25" y2="29" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="30" y1="54" x2="31" y2="22" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="36" y1="54" x2="36.5" y2="19" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeLinecap="round" />

      {/* Right cables */}
      <line x1="63" y1="54" x2="60" y2="38" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="57" y1="54" x2="55" y2="29" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="50" y1="54" x2="49" y2="22" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="44" y1="54" x2="43.5" y2="19" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeLinecap="round" />

      {/* ── BRIDGE TOWERS ── */}
      {/* Left tower */}
      <rect x="21" y="43" width="3" height="11" rx="0.5" fill={`url(#${id}TowerGrad)`} />
      <rect x="20.5" y="42" width="4" height="1.5" rx="0.5" fill={`url(#${id}TowerGrad)`} />
      {/* Right tower */}
      <rect x="56" y="43" width="3" height="11" rx="0.5" fill={`url(#${id}TowerGrad)`} />
      <rect x="55.5" y="42" width="4" height="1.5" rx="0.5" fill={`url(#${id}TowerGrad)`} />

      {/* ── BOTANICAL GROWTH ── */}
      {/* Main stem from keystone */}
      <path
        d="M40 53 C40 47 40 40 40 32"
        stroke={`url(#${id}StemGrad)`}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Stem curve — organic */}
      <path
        d="M40 44 C39 42 38.5 40 39 38"
        stroke={`url(#${id}StemGrad)`}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Large leaf — lower left */}
      <path
        d="M40 46 C36 43 31 43 29 46 C30 48 34 48 38 46 C39 46 40 46 40 46Z"
        fill={`url(#${id}LeafGrad1)`}
      />
      {/* Leaf vein */}
      <path d="M40 46 C36 45 32 45.5 29 46" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />

      {/* Large leaf — lower right */}
      <path
        d="M40 42 C44 39 49 39 51 42 C50 44 46 44 42 42 C41 42 40 42 40 42Z"
        fill={`url(#${id}LeafGrad2)`}
      />
      {/* Leaf vein */}
      <path d="M40 42 C44 41 48 41.5 51 42" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />

      {/* Mid leaf — left */}
      <path
        d="M40 38 C37 35 33 35 31 37 C32 39 36 39 39 38Z"
        fill={`url(#${id}LeafGrad1)`}
        opacity="0.9"
      />

      {/* Mid leaf — right */}
      <path
        d="M40 35 C43 32 47 32 49 34 C48 36 44 36 41 35Z"
        fill={`url(#${id}LeafGrad2)`}
        opacity="0.9"
      />

      {/* Small leaf — left */}
      <path
        d="M40 31 C38 29 35 29 34 31 C35 32.5 38 32 40 31Z"
        fill={`url(#${id}LeafGrad1)`}
        opacity="0.8"
      />

      {/* Tip bud — teardrop */}
      <path
        d="M40 32 C38.5 29.5 38 27 40 25.5 C42 27 41.5 29.5 40 32Z"
        fill={`url(#${id}BudGrad)`}
      />

      {/* Bud highlight */}
      <path
        d="M40 31 C39 29 39 27.5 40 26.5"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      {/* Tiny sparkle dots — growth particles */}
      <circle cx="27" cy="40" r="1.2" fill="#c8965a" opacity="0.6" />
      <circle cx="54" cy="37" r="1" fill="#c8965a" opacity="0.5" />
      <circle cx="34" cy="26" r="0.9" fill="#7ab89a" opacity="0.7" />
      <circle cx="47" cy="28" r="1.1" fill="#7ab89a" opacity="0.6" />
      <circle cx="40" cy="21" r="0.8" fill="#c8d8e8" opacity="0.5" />

      {/* ── BADGE BORDER DETAIL ── */}
      {/* Outer decorative dots at cardinal points */}
      <circle cx="40" cy="2.5" r="1.2" fill="rgba(255,255,255,0.2)" />
      <circle cx="40" cy="77.5" r="1.2" fill="rgba(255,255,255,0.2)" />
      <circle cx="2.5" cy="40" r="1.2" fill="rgba(255,255,255,0.2)" />
      <circle cx="77.5" cy="40" r="1.2" fill="rgba(255,255,255,0.2)" />

      {/* ── GRADIENTS & DEFS ── */}
      <defs>
        {/* Badge background */}
        <radialGradient id={`${id}BgGrad`} cx="40%" cy="35%" r="65%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2d5f42" />
          <stop offset="45%" stopColor="#1e3f6a" />
          <stop offset="100%" stopColor="#0f2233" />
        </radialGradient>

        {/* Badge border */}
        <linearGradient id={`${id}BorderGrad`} x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#b8926a" stopOpacity="0.9" />
          <stop offset="35%" stopColor="#7ab89a" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#3a7ca5" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#b8926a" stopOpacity="0.9" />
        </linearGradient>

        {/* Main arch */}
        <linearGradient id={`${id}ArchMain`} x1="10" y1="54" x2="70" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5a9fd4" />
          <stop offset="30%" stopColor="#7ab89a" />
          <stop offset="70%" stopColor="#7ab89a" />
          <stop offset="100%" stopColor="#5a9fd4" />
        </linearGradient>

        {/* Deck */}
        <linearGradient id={`${id}DeckGrad`} x1="0" y1="53" x2="0" y2="57" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d4a86a" />
          <stop offset="100%" stopColor="#8a6030" />
        </linearGradient>

        {/* Towers */}
        <linearGradient id={`${id}TowerGrad`} x1="0" y1="42" x2="0" y2="57" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c8965a" />
          <stop offset="100%" stopColor="#7a5030" />
        </linearGradient>

        {/* Stem */}
        <linearGradient id={`${id}StemGrad`} x1="40" y1="53" x2="40" y2="25" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4a7a5a" />
          <stop offset="100%" stopColor="#8fbd9a" />
        </linearGradient>

        {/* Leaf left — warm green */}
        <linearGradient id={`${id}LeafGrad1`} x1="28" y1="43" x2="40" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3a6e4a" />
          <stop offset="100%" stopColor="#7ab89a" />
        </linearGradient>

        {/* Leaf right — cool green */}
        <linearGradient id={`${id}LeafGrad2`} x1="40" y1="39" x2="52" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5e8c6a" />
          <stop offset="100%" stopColor="#8fbd9a" />
        </linearGradient>

        {/* Bud */}
        <linearGradient id={`${id}BudGrad`} x1="40" y1="32" x2="40" y2="25" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5e8c6a" />
          <stop offset="100%" stopColor="#a8d4b8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// ── HORIZONTAL LOCKUP ──
export function LogoHorizontal({ height = 44, light = false, className = '' }) {
  return (
    <div className={`logo-horizontal ${light ? 'logo-light' : ''} ${className}`} style={{height}}>
      <LogoMark size={height} />
      <div className="logo-wordmark">
        <span className="logo-name">Bridging<strong>Wellness</strong></span>
        <span className="logo-tag">Accessible Care · Illinois Nonprofit</span>
      </div>
    </div>
  )
}

// ── STACKED (footer) ──
export function LogoStacked({ size = 110, light = false, className = '' }) {
  return (
    <div className={`logo-stacked ${light ? 'logo-light' : ''} ${className}`} style={{width: size}}>
      <LogoMark size={size * 0.6} />
      <div className="logo-wordmark-stacked">
        <span className="logo-name">Bridging<strong>Wellness</strong></span>
        <span className="logo-tag">Illinois Nonprofit</span>
      </div>
    </div>
  )
}

export default LogoHorizontal
