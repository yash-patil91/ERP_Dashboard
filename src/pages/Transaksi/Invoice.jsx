import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MainCard from 'components/MainCard';

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

export default function Invoice() {
  return (
    <MainCard contentSX={{ p: 2.25, background: "#3A3A5A" }}>
      <Stack spacing={0.5}>
        <Typography variant="h6" color="white">
          Invoice
        </Typography>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, background: "#3A3A5A",height:"200px" }} aria-label="simple table" className='Jurnalumum_table_box'>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Pemerima</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Tipe</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Tanggal</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ color: "white" }}>
                  {row.name}
                </TableCell>
                <TableCell align="left" sx={{ color: "white" }}>{row.calories}</TableCell>
                <TableCell align="left" sx={{ color: "white" }}>{row.fat}</TableCell>
                <TableCell align="left" sx={{ color: "#74CDFF" }}>{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
