import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Gallery from './routes/Gallery.jsx';
import Actuality from './routes/Actuality.jsx';
import Contact from './routes/Contact.jsx';
import Product from './routes/Product.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/actuality',
    element: <Actuality />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/product',
    element: <Product />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
