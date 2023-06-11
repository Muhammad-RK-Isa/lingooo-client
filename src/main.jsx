import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider/AuthProvider.jsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import ServerRequestProvider from './Providers/ServerRequestProvider/ServerRequestProvider';

const client = new QueryClient();

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <AuthProvider>
    <ServerRequestProvider>
      <QueryClientProvider client={ client }>
        <HelmetProvider>
          <RouterProvider router={ routes } />
        </HelmetProvider>
      </QueryClientProvider>
    </ServerRequestProvider>
  </AuthProvider>
);
