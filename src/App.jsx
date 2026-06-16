import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Apply from './pages/Apply'
import ForProviders from './pages/ForProviders'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'

export default function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Navbar />
      <PageTransition>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/providers" element={<ForProviders />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </PageTransition>
      <Footer />
    </HelmetProvider>
  )
}
