import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MainCard from 'components/MainCard';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { DarkModeContext } from '../../components/DarkModeContext';
import React, { useEffect,useContext } from "react";


export default function Pembayaran() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <MainCard contentSX={{ p: 2.25, background: darkMode ? '#3A3A5A' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)' }}>
      <Stack spacing={0.5}>
        <Typography variant="h6" color="white">
          Pembayaran & Biaya
        </Typography>
      </Stack>
      <Grid container justifyContent='space-between' mt={2}>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Box>
            <Box sx={{ background: ' linear-gradient(180deg, #197BBD 0%, #3391D0 100%)', p: 2, color: "white", borderRadius: "1rem", display: "grid", gap: "1.8rem" }}>
              <Box>
                <Typography sx={{ fontSize: "1rem" }}>cloudcash</Typography>
                <Typography sx={{ fontSize: "0.6rem" }}>PREMIUM ACCOUNT</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 5 }}>
                <Typography sx={{ fontSize: "1.2rem" }}>5789</Typography>
                <Typography sx={{ fontSize: "1.2rem" }}>****</Typography>
                <Typography sx={{ fontSize: "1.2rem" }}>****</Typography>
                <Typography sx={{ fontSize: "1.2rem" }}>2847</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: '1rem' }}>
                <Box><Typography sx={{ fontSize: "0.6rem" }}>Card holder</Typography>
                  <Typography sx={{ fontSize: "1rem" }}>Mike Smiith</Typography></Box>
                <Box><Typography sx={{ fontSize: "0.6rem" }}>Expiry date</Typography>
                  <Typography sx={{ fontSize: "1rem" }}>06/21</Typography></Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Box>
            <Typography sx={{ color: "#197BBD", fontSize: "1.2rem" }}>Rp 15.000.000</Typography>
            <Typography sx={{ color: "#ffffff", fontSize: "0.6rem", textAlign: "right" }}>Current balance</Typography>
            <Typography sx={{ color: "#439A86", fontSize: "1.2rem" }}>Rp. 0</Typography>
            <Typography sx={{ color: "#ffffff", fontSize: "0.6rem", textAlign: "right" }}>Income</Typography>
            <Typography sx={{ color: "#BB4430", fontSize: "1.2rem" }}>Rp 15.000.000</Typography>
            <Typography sx={{ color: "#ffffff", fontSize: "0.6rem", textAlign: "right" }}>Outcome</Typography>
            <Typography sx={{ color: "#ffffff", fontSize: "0.6rem", textAlign: "right" }}><ToggleOffIcon /></Typography>
            <Typography sx={{ color: "#ffffff", fontSize: "0.6rem", textAlign: "right" }}>Non-Aktifkan Kartu</Typography>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  );
}
