import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Home, About, Contact } from './routes';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
