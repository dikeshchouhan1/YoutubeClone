import React from 'react';
import { Outlet } from 'react-router-dom';
import Head from './components/Head';

const App = () => (
  <div>
    <Head />
    <Outlet />  {/* Correct way to render child routes */}
  </div>
);

export default App;
