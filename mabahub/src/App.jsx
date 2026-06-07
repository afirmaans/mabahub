import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import FAQ from './pages/FAQ'
import Guide from './pages/Guide'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Tasks from './pages/Tasks'
import Timeline from './pages/Timeline'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<Timeline />} path="timeline" />
          <Route element={<Tasks />} path="penugasan" />
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Guide />} path="panduan" />
          <Route element={<FAQ />} path="faq" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
