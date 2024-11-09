import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { route } from './routes/routes'
import AuthProvider from './Auth/AuthProvider'
import { Toaster } from 'react-hot-toast';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './index.css'
AOS.init();

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={route} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </>,
)
