import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import store from './utils/store';
import App from './App';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // Top-level layout (Head + Outlet)
    children: [
      {
        path: '/',
        element: <Body />,  // Second-level layout (with Outlet)
        children: [
          { path: '/', element: <MainContainer /> },   // Default home page
          { path: 'watch', element: <WatchPage /> },  // /watch page
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  
      <RouterProvider router={appRouter} />
    
  </Provider>
);
