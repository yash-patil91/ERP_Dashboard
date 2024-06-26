import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
// import Logo from 'components/logo';
import SempoaLogo  from '../../../../assets/sempoa-logo.png'
import { DarkModeContext } from '../../../../components/DarkModeContext';
import React, { useContext } from "react";

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  const { darkMode } = useContext(DarkModeContext);
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={!!open} style={{ background:darkMode?'#464667':"#e4c16f",display:"grid",placeItems:"center",marginTop:"2rem"}}>
      {/* <Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} /> */}
      <img src={SempoaLogo}/>
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
