import { RouterProvider } from 'react-router-dom';
import './App.css'
import React, { useContext } from 'react';

// project import
import router from 'routes';
import ThemeCustomization from 'themes';
import { DarkModeContext } from './components/DarkModeContext';

import ScrollTop from 'components/ScrollTop';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {


  const { darkMode } = useContext(DarkModeContext);

  // const savedDarkMode = localStorage.getItem('darkMode');


  return (
  <div className={darkMode?'main_class_app':'main_class_app_dark'}>
    <ThemeCustomization >
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  </div>
  );
}
