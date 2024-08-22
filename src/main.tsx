import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Sign from './components/Sign.tsx'
import Layout from './components/Layout.tsx'
import { LanguageProvider } from './components/LanguageContext.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <App />,
        path: '/'
      },
      {
        element: <Sign />,
        path: '/:sign'
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>
)