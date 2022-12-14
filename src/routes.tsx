import React from 'react'
import type { RouteObject } from 'react-router-dom'
import Home from './pages/home/index'
import CourseIntroduction from './pages/courseIntroduction/index'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/courseIntroduction',
    element: <CourseIntroduction />,
  },
]

export default routes
