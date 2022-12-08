import React from 'react'
import type { RouteObject } from 'react-router-dom'
import Home from './pages/home/index'
import About from './pages/about/index'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]

export default routes
