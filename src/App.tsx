import React, { useEffect } from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import routes from './routes'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Element: React.FC = () => {
  const element = useRoutes(routes)
  return element
}

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    })
    AOS.refresh()
  }, [])
  return (
    <HashRouter>
      <Header />
      <Element />
      <Footer />
    </HashRouter>
  )
}

export default App
