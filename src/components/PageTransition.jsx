import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './PageTransition.css'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 40)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <div className={`page-transition ${visible ? 'page-visible' : ''}`}>
      {children}
    </div>
  )
}
