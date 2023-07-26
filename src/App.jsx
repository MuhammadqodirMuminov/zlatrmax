import React from 'react'
import Layout from './layout/layout'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Layout>
  )
}

export default App