// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LogOut from '../../../../assets/logout.png'

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/images/users/avatar-group.png';
import AnimateButton from 'components/@extended/AnimateButton';
import { Card } from '@mui/material';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function NavCard() {
  return (
    <>
      <Card sx={{ bgcolor: 'grey.50', mx: 7, mt: 17,py:1,cursor:"pointer" }}>
        <Box display='flex' justifyContent="space-around" >
          <img src={LogOut} alt="" />
          <Typography variant="h5">Logout</Typography>
        </Box>
      </Card>
      <Box mt={1}>
        <Typography textAlign={'center'} variant='body2' color={'white'}>© 2021 SEMPOA ERP</Typography>
      </Box>
    </>
  );
}
