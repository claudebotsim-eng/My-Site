import './GrowthIllustration.css'

export default function GrowthIllustration() {
  return (
    <div className="growth-illustration" aria-hidden="true">
      <svg viewBox="0 0 420 480" fill="none" xmlns="http://www.w3.org/2000/svg">

        {/* Glow background circle */}
        <circle cx="210" cy="240" r="180" fill="url(#bgGlow)" opacity="0.35" />

        {/* ROOT SYSTEM */}
        <g className="roots">
          <path d="M210 320 C210 340 190 360 165 375" stroke="#b8926a" strokeWidth="2.5" strokeLinecap="round" className="root-line" style={{'--d':'0.2s'}} />
          <path d="M210 330 C210 355 230 370 255 380" stroke="#b8926a" strokeWidth="2" strokeLinecap="round" className="root-line" style={{'--d':'0.35s'}} />
          <path d="M165 375 C150 385 138 390 125 388" stroke="#b8926a" strokeWidth="1.5" strokeLinecap="round" className="root-line" style={{'--d':'0.5s'}} />
          <path d="M165 375 C160 392 158 405 162 415" stroke="#b8926a" strokeWidth="1.5" strokeLinecap="round" className="root-line" style={{'--d':'0.6s'}} />
          <path d="M255 380 C268 390 278 392 290 388" stroke="#b8926a" strokeWidth="1.5" strokeLinecap="round" className="root-line" style={{'--d':'0.5s'}} />
          <path d="M255 380 C258 396 256 408 252 416" stroke="#b8926a" strokeWidth="1.5" strokeLinecap="round" className="root-line" style={{'--d':'0.65s'}} />
          <path d="M210 340 C200 360 195 378 198 390" stroke="#b8926a" strokeWidth="1.5" strokeLinecap="round" className="root-line" style={{'--d':'0.4s'}} />
        </g>

        {/* MAIN TRUNK */}
        <path
          d="M210 320 C208 290 207 260 210 220 C212 190 210 160 210 130"
          stroke="#5e8c6a" strokeWidth="5" strokeLinecap="round"
          className="trunk"
        />

        {/* BRANCHES — left */}
        <g className="branches">
          <path d="M210 240 C195 228 178 220 158 218" stroke="#5e8c6a" strokeWidth="3" strokeLinecap="round" className="branch" style={{'--d':'0.5s'}} />
          <path d="M158 218 C143 212 134 208 122 210" stroke="#5e8c6a" strokeWidth="2" strokeLinecap="round" className="branch" style={{'--d':'0.7s'}} />
          <path d="M158 218 C150 205 148 195 152 185" stroke="#5e8c6a" strokeWidth="2" strokeLinecap="round" className="branch" style={{'--d':'0.8s'}} />
          <path d="M210 200 C195 188 180 182 165 180" stroke="#5e8c6a" strokeWidth="2.5" strokeLinecap="round" className="branch" style={{'--d':'0.6s'}} />
          <path d="M165 180 C152 172 143 168 132 170" stroke="#5e8c6a" strokeWidth="1.8" strokeLinecap="round" className="branch" style={{'--d':'0.8s'}} />
          <path d="M210 165 C198 152 185 146 172 144" stroke="#5e8c6a" strokeWidth="2" strokeLinecap="round" className="branch" style={{'--d':'0.7s'}} />
        </g>

        {/* BRANCHES — right */}
        <g className="branches">
          <path d="M210 240 C225 228 242 220 262 218" stroke="#5e8c6a" strokeWidth="3" strokeLinecap="round" className="branch" style={{'--d':'0.55s'}} />
          <path d="M262 218 C277 212 286 208 298 210" stroke="#5e8c6a" strokeWidth="2" strokeLinecap="round" className="branch" style={{'--d':'0.75s'}} />
          <path d="M262 218 C270 205 272 195 268 185" stroke="#5e8c6a" strokeWidth="2" strokeLinecap="round" className="branch" style={{'--d':'0.85s'}} />
          <path d="M210 200 C225 188 240 182 255 180" stroke="#5e8c6a" strokeWidth="2.5" strokeLinecap="round" className="branch" style={{'--d':'0.65s'}} />
          <path d="M255 180 C268 172 277 168 288 170" stroke="#5e8c6a" strokeWidth="1.8" strokeLinecap="round" className="branch" style={{'--d':'0.82s'}} />
          <path d="M210 165 C222 152 235 146 248 144" stroke="#5e8c6a" strokeWidth="2" strokeLinecap="round" className="branch" style={{'--d':'0.72s'}} />
        </g>

        {/* LEAVES — clusters */}
        <g className="leaves">
          {[
            [122,200,0],[132,162,15],[152,178,'-10'],[145,200,8],
            [165,164,'-5'],[172,138,12],[158,144,'-8'],
            [298,200,0],[288,162,'-15'],[268,178,10],[275,200,'-8'],
            [255,164,5],[248,138,'-12'],[262,144,8],
            [210,125,0],[200,108,10],[220,108,'-10'],[210,95,5],
          ].map(([cx, cy, rot], i) => (
            <ellipse
              key={i}
              cx={cx} cy={cy}
              rx="14" ry="9"
              fill={i % 3 === 0 ? '#7ab89a' : i % 3 === 1 ? '#5e8c6a' : '#8fad96'}
              opacity="0.9"
              transform={`rotate(${rot}, ${cx}, ${cy})`}
              className="leaf"
              style={{'--d': `${0.6 + i * 0.04}s`}}
            />
          ))}
          {/* Accent golden leaves */}
          {[[140,190,20],[178,130,'-15'],[280,190,'-20'],[242,130,15]].map(([cx,cy,rot],i) => (
            <ellipse key={`g${i}`} cx={cx} cy={cy} rx="10" ry="6"
              fill="#c8965a" opacity="0.7"
              transform={`rotate(${rot}, ${cx}, ${cy})`}
              className="leaf" style={{'--d': `${1 + i * 0.08}s`}}
            />
          ))}
        </g>

        {/* SEED at base */}
        <ellipse cx="210" cy="322" rx="8" ry="5" fill="#b8926a" opacity="0.8" className="seed" />

        {/* LIGHT RAYS from top */}
        <g className="light-rays" opacity="0.18">
          {[-40,-20,0,20,40].map((angle, i) => (
            <line key={i}
              x1="210" y1="80"
              x2={210 + Math.sin((angle * Math.PI) / 180) * 160}
              y2={80 + Math.cos((angle * Math.PI) / 180) * 160}
              stroke="#c8965a" strokeWidth="2"
              strokeLinecap="round"
              className="ray"
              style={{'--d': `${i * 0.1}s`}}
            />
          ))}
        </g>

        {/* GROWTH RINGS at seed */}
        <g className="growth-rings">
          <circle cx="210" cy="322" r="16" stroke="#b8926a" strokeWidth="1" opacity="0" className="ring" style={{'--d':'0s'}} />
          <circle cx="210" cy="322" r="28" stroke="#b8926a" strokeWidth="0.8" opacity="0" className="ring" style={{'--d':'0.3s'}} />
          <circle cx="210" cy="322" r="40" stroke="#b8926a" strokeWidth="0.6" opacity="0" className="ring" style={{'--d':'0.6s'}} />
        </g>

        {/* FLOATING PARTICLES */}
        <g className="particles">
          {[
            [168, 155, 3], [252, 148, 4], [130, 220, 3],
            [290, 215, 4], [185, 108, 3], [235, 112, 4],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r}
              fill="#c8965a" opacity="0.5"
              className="particle"
              style={{'--d': `${i * 0.2}s`, '--dur': `${2 + i * 0.4}s`}}
            />
          ))}
        </g>

        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c8965a" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#5e8c6a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3a7ca5" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
