import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Guide from './pages/Guide'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Tasks from './pages/Tasks'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<Tasks />} path="tasks" />
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Guide />} path="guide" />
          <Route element={<Login />} path="login" />
          <Route element={<Navigate replace to="/tasks" />} path="penugasan" />
          <Route element={<Navigate replace to="/guide" />} path="panduan" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
