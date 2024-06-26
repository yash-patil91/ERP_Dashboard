import React, { useContext } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { DarkModeContext } from '../../../../components/DarkModeContext';
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import TextHeader from './TextHeader';

export default function HeaderContent() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      {!downLG && <TextHeader />}
      {!downLG && <Search />}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
      <IconButton onClick={toggleDarkMode}>
        {darkMode ? <MdOutlineLightMode style={{ color: "white" }} /> : <MdDarkMode />}
      </IconButton>
      <Notification />
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </>
  );
}