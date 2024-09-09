import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './routes/routes'
import AuthProvider from './Auth/AuthProvider'
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init(); 


createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <RouterProvider router={route} />
      <Toaster />
    </AuthProvider>
  </>,
)
