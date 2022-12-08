import React from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import routes from './routes'
import Footer from '@/components/Footer'
import Heade from '@/components/Heade'

const Element: React.FC = () => {
  const element = useRoutes(routes)
  return element
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="mx-auto flex h-screen max-w-[800px] flex-col justify-between pt-5">
        <Heade />
        <Element />
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
