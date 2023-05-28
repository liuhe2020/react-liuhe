import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Home, About, Contact } from './routes';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Header, Nav } from './components';
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
