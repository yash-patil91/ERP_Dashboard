// import React, { useContext } from 'react';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import MainCard from 'components/MainCard';
import { Box, Stack, Typography, Button, Dialog, DialogContent, DialogTitle, DialogContentText } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Slide from "@mui/material/Slide";
import { IoCalendarNumber } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Divider from '@mui/material/Divider';
import { DarkModeContext } from '../../components/DarkModeContext';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
// // project import

// const today = new Date();
// const maxDate = dayjs().endOf('day');


export default function MonthlyBarCharts() {
  const { darkMode } = useContext(DarkModeContext);

  const today = new Date();
  const sixMonthsAgo = new Date(
    today.getFullYear(),
    today.getMonth() - 2,
    today.getDate()
  );
  const formattedToday = formatDate(today);
  const formattedSixMonthsAgo = formatDate(sixMonthsAgo);

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const [selectedDate, setSelectedDate] = useState({
    startDate: formattedSixMonthsAgo,
    endDate: formattedToday,
    range: "",
  });

  console.log("selectedDate", selectedDate)

  useEffect(() => {
    setSelectedDate({
      startDate: selectedDate?.startDate,
      endDate: selectedDate?.endDate,
      range: "",
    });
  }, [])



  const [startDateDialog, setStartDateDialog] = React.useState(false);
  const [endDateDialog, setEndDateDialog] = React.useState(false);

  const handlecustomStartDateChange = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    const updatedData = { ...selectedDate, startDate: formattedDate };
    setSelectedDate(updatedData);
  };
  const handlecustomEndDateChange = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    const updatedData = { ...selectedDate, endDate: formattedDate };
    setSelectedDate(updatedData);
  };

  const formatDisplayDate = (dateString) => {
    return dayjs(dateString).format('DD-MMM-YYYY');
  };
  const maxDate = dayjs().endOf('day');

  return (
    <MainCard contentSX={{ p: 2.25, background: darkMode ? '#3A3A5A' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)' }}>
      <Stack spacing={0.5}>
        <Typography variant="h6" color="white">
          Total Distribution
        </Typography>
      </Stack>
      <div className="startend" style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
        <Box sx={{ display: "grid", gap: "0.5rem", color: "white" }}>
          Start date :
          <Button
            variant="contained"
            sx={{
              background: darkMode ? '#2e2e48' : '#f7c345',
              color: "white"
            }}
            onClick={() => {
              setStartDateDialog(true)
            }}
          >
            {selectedDate?.startDate} &nbsp;  <IoCalendarNumber />
          </Button>

          <Dialog
            open={startDateDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => {
              setStartDateDialog(false)
            }}
            aria-describedby="alert-dialog-slide-description"
            maxWidth="sm"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                background: darkMode ? '#3A3A5A' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)',
                color: "white"
              }}
            >
              <DialogTitle>
                <Typography>Start date</Typography>
              </DialogTitle>
              <DialogTitle>
                <Typography sx={{ fontSize: "1.2rem", cursor: "pointer" }} onClick={() => {
                  setStartDateDialog(false)
                }}><RxCross2 /></Typography>
              </DialogTitle>
            </div>
            <Divider sx={{ background: darkMode ? '#3A3A5A' : '#f7c345' }} />
            <DialogContent sx={{ background: darkMode ? '#3A3A5A' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)' }}>
              <DialogContentText id="alert-dialog-slide-description">
                <Box sx={{ color: "#a0a0a5" }}>
                  <Box display='flex' gap={2} sx={{ color: "white", background: darkMode ? '#2e2e48' : '#f7c345', padding: '0.5rem', alignItems: "center", justifyContent: "center" }}>
                    <Typography>Selected date: </Typography>
                    <Typography sx={{ border: `1px solid ${"white"}`, padding: "0.3rem" }}> {formatDisplayDate(selectedDate?.startDate)}</Typography>
                  </Box>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
                      <DemoItem>
                        <DateCalendar
                          defaultValue={dayjs(formattedSixMonthsAgo)}
                          views={['year', 'month', 'day']}
                          onChange={handlecustomStartDateChange}
                          maxDate={maxDate}

                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>

                  <Box sx={{ display: "flex", justifyContent: "right" }}>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          background: darkMode ? '#2e2e48' : '#f7c345',
                          color: "white",
                          "&:hover": {
                            background: darkMode ? '#2e2e48' : '#f7c345',
                            borderColor: "pink",
                            opacity: 0.5,
                          },
                        }}
                        onClick={() => {
                          setStartDateDialog(false)
                        }}
                      >
                        Save
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </Box>
        <Box sx={{ display: "grid", gap: "0.5rem", color: "white" }}>
          End date :
          <Button
            variant="contained"
            sx={{
              background: darkMode ? '#2e2e48' : '#f7c345',
              color: "white"
            }}
            onClick={() => {
              setEndDateDialog(true)
            }}
          >
            {selectedDate?.endDate} &nbsp; <IoCalendarNumber />
          </Button>

          <Dialog
            open={endDateDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => { setEndDateDialog(false) }}
            aria-describedby="alert-dialog-slide-description"
            maxWidth="sm"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                background: darkMode ? '#3A3A5A' : '#f7c345',
                color: "white"
              }}
            >
              <DialogTitle>
                <Typography>End date</Typography>
              </DialogTitle>
              <DialogTitle>
                <Typography sx={{ fontSize: "1.2rem", cursor: "pointer" }} onClick={() => {
                  setEndDateDialog(false)
                }}><RxCross2 /></Typography>
              </DialogTitle>
            </div>
            <Divider sx={{ background: "lightblue" }} />
            <DialogContent sx={{ background: darkMode ? '#3A3A5A' : '#f7c345' }}>
              <DialogContentText id="alert-dialog-slide-description">
                <Box sx={{ color: "#a0a0a5" }}>

                  <Box display='flex' gap={2} sx={{ color: "white", background: darkMode ? '#2e2e48' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)', padding: '0.5rem', alignItems: "center", justifyContent: "center" }}>
                    <Typography>Selected date: </Typography>
                    <Typography sx={{ border: `1px solid ${"white"}`, padding: "0.3rem" }}> {formatDisplayDate(selectedDate?.endDate)}</Typography>
                  </Box>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
                      <DemoItem>
                        <DateCalendar
                          defaultValue={dayjs(formattedToday)}
                          views={['year', 'month', 'day']}
                          onChange={handlecustomEndDateChange}
                          maxDate={maxDate}
                        />
                      </DemoItem>

                    </DemoContainer>
                  </LocalizationProvider>

                  <Box sx={{ display: "flex", justifyContent: "right" }}>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          background: darkMode ? '#2e2e48' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)',
                          color: "white",
                          "&:hover": {
                            background: darkMode ? '#2e2e48' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)',
                            borderColor: "pink",
                            opacity: 0.5,
                          },
                        }}
                        onClick={() => {
                          setEndDateDialog(false)
                        }}
                      >
                        Save
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </Box>
      </div>

      {/* <Box className="calender_style_adjustment">
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
      </Box> */}

    </MainCard>
  );
}
