import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from '../src/components/Layout/Layout'
import Home from '../src/pages/home/home'
import Admin from '../src/pages/Admin/Admin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="admin" element={<Admin />} />
    </Route>
  )
)

export default router
