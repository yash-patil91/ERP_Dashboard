// material-ui
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

// project import
import { drawerWidth } from 'config';
import { border } from '@mui/system';

const openedMixin = (theme, darkMode) => ({
  width: drawerWidth,
  // borderRight: '1px solid',
  border: "none",
  // borderRightColor: theme.palette.divider,
  background: darkMode ? "#464667" : "radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),

  overflowX: 'hidden',
  boxShadow: 'none'
});

const closedMixin = (theme,darkMode) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),

  overflowX: 'hidden',
  width: 0,
  borderRight: 'none',
  boxShadow: theme.customShadows.z1,
  background: darkMode ? "#464667" : "radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)",
});

// ==============================|| DRAWER - MINI STYLED ||============================== //

const MiniDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open, darkMode }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  background: darkMode ? 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)' : '#464667',
  ...(open && {
    ...openedMixin(theme, darkMode),
    '& .MuiDrawer-paper': openedMixin(theme, darkMode)
  }),
  ...(!open && {
    ...closedMixin(theme, darkMode),
    '& .MuiDrawer-paper': closedMixin(theme, darkMode)
  })
}));

export default MiniDrawerStyled;
