export function LeafDecorLeft({ opacity = 0.06 }) {
  return (
    <svg style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',overflow:'visible'}}
      width="220" height="320" viewBox="0 0 220 320" fill="none" aria-hidden="true">
      <path d="M-40 160 C20 80 120 60 180 120 C240 180 200 280 120 300 C40 320 -100 240 -40 160Z"
        fill="#5e8c6a" opacity={opacity} />
      <path d="M-60 180 C0 110 90 95 140 145 C190 195 165 275 95 292 C25 309 -120 250 -60 180Z"
        fill="#b8926a" opacity={opacity * 0.6} />
    </svg>
  )
}

export function LeafDecorRight({ opacity = 0.06 }) {
  return (
    <svg style={{position:'absolute',right:0,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',overflow:'visible'}}
      width="220" height="320" viewBox="0 0 220 320" fill="none" aria-hidden="true">
      <path d="M260 160 C200 80 100 60 40 120 C-20 180 20 280 100 300 C180 320 320 240 260 160Z"
        fill="#3a7ca5" opacity={opacity} />
      <path d="M280 180 C220 110 130 95 80 145 C30 195 55 275 125 292 C195 309 340 250 280 180Z"
        fill="#5e8c6a" opacity={opacity * 0.6} />
    </svg>
  )
}

export function SeedDivider() {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'16px', padding:'8px 0', opacity:0.3}} aria-hidden="true">
      <div style={{flex:1, height:'1px', background:'linear-gradient(to right, transparent, #b8926a)'}} />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="14" rx="5" ry="7" fill="#b8926a" />
        <path d="M12 7 C12 4 14 2 16 2" stroke="#5e8c6a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 7 C12 4 10 2 8 2" stroke="#5e8c6a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div style={{flex:1, height:'1px', background:'linear-gradient(to left, transparent, #b8926a)'}} />
    </div>
  )
}
