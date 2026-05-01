import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Service from './pages/Service'
import Teams from './pages/Teams'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/"              element={<Home />}    />
        <Route path="/services"      element={<Services />} />
        <Route path="/contact"       element={<Contact />} />
        <Route path="/service/:code" element={<Service />} />
        <Route path="/teams"         element={<Teams />}   />
      </Routes>
    </Layout>
  )
}
