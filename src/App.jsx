import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Home, About, Contact } from './routes';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Header, Footer } from './components';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
        path: '/',
        element: <About />,
      },
      {
        path: '/',
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
