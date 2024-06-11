import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MainCard from 'components/MainCard';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
// project import

const today = new Date();
const maxDate = dayjs().endOf('day');


export default function MonthlyBarCharts() {
  return (
    <MainCard contentSX={{ p: 2.25, background: "#3A3A5A" }}>

      <Box className="calender_style_adjustment">
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer components={['DateCalendar']}>
            <DemoItem >
              <DateCalendar
                defaultValue={dayjs(today)}
                views={['year', 'month', 'day']}
                // onChange={handlecustomStartDateChange}
                maxDate={maxDate}

              />
            </DemoItem>

          </DemoContainer>
        </LocalizationProvider>
      </Box>

    </MainCard>
  );
}