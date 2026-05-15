export default function Logo({ className = '', variant = 'full' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 240"
      fill="none"
      className={className}
      aria-label="RB Racing"
    >
      <defs>
        <linearGradient id={`rb-grad-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="60%" stopColor="#C8102E" />
          <stop offset="100%" stopColor="#8B0A1F" />
        </linearGradient>
        <filter id={`rb-shadow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="2" dy="3" result="offsetblur" />
          <feComponentTransfer><feFuncA type="linear" slope="0.2" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g filter={`url(#rb-shadow-${variant})`}>
        <path
          d="M 60 30 L 60 145 L 95 145 L 95 110 L 110 110 L 135 145 L 175 145 L 145 105 Q 168 95 168 70 Q 168 30 125 30 Z M 95 60 L 122 60 Q 135 60 135 70 Q 135 82 122 82 L 95 82 Z"
          fill={`url(#rb-grad-${variant})`}
          transform="skewX(-12)"
        />
        <path
          d="M 200 30 L 200 145 L 260 145 Q 295 145 295 115 Q 295 95 278 88 Q 290 80 290 62 Q 290 30 258 30 Z M 233 58 L 254 58 Q 263 58 263 67 Q 263 76 254 76 L 233 76 Z M 233 100 L 257 100 Q 268 100 268 112 Q 268 122 257 122 L 233 122 Z"
          fill={`url(#rb-grad-${variant})`}
          transform="skewX(-12)"
        />
      </g>

      <g transform="translate(45, 170)">
        <line x1="0" y1="0" x2="280" y2="0" stroke="currentColor" strokeWidth="3" />
        <text
          x="140"
          y="32"
          textAnchor="middle"
          fontFamily="'Bebas Neue', Impact, sans-serif"
          fontSize="40"
          fontWeight="900"
          fill="currentColor"
          letterSpacing="7"
          style={{ fontStyle: 'italic' }}
        >
          RACING
        </text>
        <line x1="0" y1="48" x2="280" y2="48" stroke="currentColor" strokeWidth="2" />
      </g>

      <g transform="translate(180, 226)">
        <line x1="0" y1="0" x2="120" y2="0" stroke="#C8102E" strokeWidth="3" />
        <line x1="35" y1="8" x2="135" y2="8" stroke="#C8102E" strokeWidth="2.5" />
        <line x1="70" y1="16" x2="145" y2="16" stroke="#C8102E" strokeWidth="2" />
      </g>
    </svg>
  )
}
