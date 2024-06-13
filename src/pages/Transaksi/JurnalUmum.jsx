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
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, Box } from '@mui/material';
import Search from 'layout/Dashboard/Header/HeaderContent/Search';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import CreateIcon from '@mui/icons-material/Create';
import MenuIcon from '@mui/icons-material/Menu';


function createData(name, calories, fat, carbs,last) {
  return { name, calories, fat, carbs,last };
}

const rows = [
  createData('Tanggal', 'No. Referensi', 'Deskripsi', 'Nominal','Status'),
  createData('Tanggal', 'No. Referensi', 'Deskripsi', 'Nominal','Status'),
  createData('Tanggal', 'No. Referensi', 'Deskripsi', 'Nominal','Status'),
  createData('Tanggal', 'No. Referensi', 'Deskripsi', 'Nominal','Status'),
  createData('Tanggal', 'No. Referensi', 'Deskripsi', 'Nominal','Status'),
];
// project import

export default function JurnalUmum() {
  return (
    <MainCard contentSX={{ p: 2.25, background: "#3A3A5A" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '0.5rem', color: 'white' }}>

        <Typography variant="h6">Jurnal Umum</Typography>

        <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: 'center', width: { xs: '100%', md: 'auto' } }}>

          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#56CCF2', padding: '0.1rem', borderRadius: '0.25rem', color: '#000' }}>
            <SettingsIcon />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#56CCF2', padding: '0.1rem', borderRadius: '0.25rem', color: '#000' }}>
            Download CSV <DownloadIcon />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#56CCF2', padding: '0.1rem', borderRadius: '0.25rem', color: '#000' }}>
            Export <UploadIcon />
          </Box>
          <Box sx={{ width: { xs: '100%', md: 'auto' }, ml: { xs: 0, md: 1 } }}>

            <Box sx={{ display: "flex", width: '100%', height: "1.4rem", borderRadius: 10, overflow: "hidden", background: "#3A3A5A", boxShadow: "4px 4px 10px 2px #00000040" }} >

              <input style={{ width: "100%", outline: "none", border: "none", marginLeft: "20px", background: "#3A3A5A", color: "white", }} type="text" placeholder='Search...' />

              <button style={{ padding: "5px 10px 5px 5px", cursor: "pointer", right: "12px", border: "none", background: "none", }}>
                <SearchOutlined style={{ color: "grey" }} />
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography ml={2} color="white">Hasil Pencarian</Typography>
     <Box sx={{display:"grid",gap:"1rem"}}>
     <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, background: "#3A3A5A" }} aria-label="simple table" className='Jurnalumum_table_box Jurnalumum_first_table'>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ color: "white",visibility:"hidden" }}>No</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Tanggal</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>No. Referensi</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Deskripsi</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Nominal</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Status</TableCell>
              <TableCell align="left" sx={{ color: "white",visibility:"hidden"}}><MenuIcon/></TableCell>
              <TableCell align="left" sx={{ color: "white",visibility:"hidden" }}><CreateIcon/></TableCell>
            </TableRow>
          </TableHead>
          </Table>
          </TableContainer>
          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, background: "#3A3A5A" }} aria-label="simple table" className='Jurnalumum_table_box Jurnalumum_second_table'>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ color: "white",visibility:"hidden" }}>No</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Tanggal</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>No. Referensi</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Deskripsi</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Nominal</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Status</TableCell>
              <TableCell align="left" sx={{ color: "white" }}><MenuIcon/></TableCell>
              <TableCell align="left" sx={{ color: "white" }}><CreateIcon/></TableCell>
            </TableRow>
          </TableHead>
          </Table>
          </TableContainer>
     </Box>
     <Box my={2} className='Jurnalumum_table_main_box'>
     <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, background: "#3A3A5A" }} aria-label="simple table" className='Jurnalumum_table_box Jurnalumum_third_table'>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ color: "white" }}>Nama Akun</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Debit</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Kredit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left" sx={{ color: "white" }}>Pendapatan Jasa</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Rp. 0,-</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Rp. 15.000.000,-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" sx={{ color: "white" }}>Hutang Usaha</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Rp. 15.000.000,-</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Rp. 0,-</TableCell>
            </TableRow>
          </TableBody>
          </Table>
          </TableContainer>
     </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, background: "#3A3A5A" }} aria-label="simple table" className='Jurnalumum_table_box'>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ color: "white" }}>No</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Tanggal</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>No. Referensi</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Deskripsi</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Nominal</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>Status</TableCell>
              <TableCell align="left" sx={{ color: "white" }}></TableCell>
              <TableCell align="left" sx={{ color: "white" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ color: "white" }}>
                  {index+1}
                </TableCell>
                <TableCell component="th" scope="row" sx={{ color: "white" }}>
                  {row.name}
                </TableCell>
                <TableCell align="left" sx={{ color: "white" }}>{row.calories}</TableCell>
                <TableCell align="left" sx={{ color: "white" }}>{row.fat}</TableCell>
                <TableCell align="left" sx={{ color: "white" }}>{row.carbs}</TableCell>
                <TableCell align="left" sx={{ color: "white" }}>{row.last}</TableCell>
                <TableCell align="left" sx={{ color: "white" }}><MenuIcon/></TableCell>
                <TableCell align="left" sx={{ color: "white" }}><CreateIcon/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
