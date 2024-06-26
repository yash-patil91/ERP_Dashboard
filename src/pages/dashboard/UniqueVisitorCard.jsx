import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MainCard from 'components/MainCard';
import React, { useContext } from 'react';
import { DarkModeContext } from '../../components/DarkModeContext';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Tesco Market', 'Shopping', '13 Dec 2020', '$75.67'),
  createData('ElectroMen Market', 'Shopping', '14 Dec 2020', '$250.00'),
  createData('Fiorgio Restaurant', 'Food', '7 Dec 2020', '$19.50'),
  createData('John Mathew Kayne', 'Sport', '13 Dec 2010', '$350.00'),
  createData('Ann Marlin', 'Shopping', '13 Dec 2010', '$430.00'),
];
// project import

export default function UniqueVisitorCard() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <MainCard contentSX={{ p: 2.25, background: darkMode ? '#3A3A5A' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)' }}>
      <Stack spacing={0.5}>
        <Typography variant="h6" color="white">
        Histori Transaksi
        </Typography>
      </Stack>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,background: darkMode ? '#3A3A5A' : '#f7c345' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:"white"}}>Pemerima</TableCell>
            <TableCell align="right" sx={{color:"white"}}>Tipe</TableCell>
            <TableCell align="right" sx={{color:"white"}}>Tanggal</TableCell>
            <TableCell align="right" sx={{color:"white"}}>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color:"white"}}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{color:"white"}}>{row.calories}</TableCell>
              <TableCell align="right" sx={{color:"white"}}>{row.fat}</TableCell>
              <TableCell align="right" sx={{color:"#74CDFF"}}>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </MainCard>
  );
}
