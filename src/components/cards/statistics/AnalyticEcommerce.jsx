import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MainCard from 'components/MainCard';
import { DarkModeContext } from '../../DarkModeContext';

export default function AnalyticEcommerce() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <MainCard contentSX={{ p: 2.25, background: darkMode ? '#3A3A5A' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)' }} >
      <Stack spacing={0.5}>
        <Typography variant="h6" color="white">
          Wallet
        </Typography>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: "#9797EF", borderRadius: "0.5rem", p: 2 }}>
            <Typography>Tabungan</Typography>
            <Typography>IDR</Typography>
            <Typography>4,509,063</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: "0.5rem", p: 2 }}>
            <Typography>Total Pengeluaran</Typography>
            <Typography>IDR</Typography>
            <Typography>4,509,063</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: "#FA9BE5", borderRadius: "0.5rem", p: 2 }}>
            <Typography>Total Investasi</Typography>
            <Typography>IDR</Typography>
            <Typography>4,509,063</Typography>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  );
}
