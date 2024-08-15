import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './routes/routes'
import AuthProvider from './Auth/AuthProvider'
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <RouterProvider router={route} />
      <Toaster />
    </AuthProvider>
  </>,
)
