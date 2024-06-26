import React, { useEffect,useContext } from "react";
import ApexCharts from "apexcharts";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MainCard from 'components/MainCard';
import { DarkModeContext } from '../../components/DarkModeContext';


export default function DistributionChart() {
  const { darkMode } = useContext(DarkModeContext);

    useEffect(() => {
        const options = {
          chart: {
            height: 200,
            type: "area",
            toolbar: {
              show: false // hide the toolbar
            }
          },
          dataLabels: {
            enabled: false
          },
          series: [
            {
              name: "Series 1",
              data: [170,160,175,180,185,165,180]
            }
          ],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 190]
            },
             colors: ['#4800F4']
          },
          xaxis: {
            categories: [
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
              "Sun"
            ],
            labels: {
              style: {
                colors: "#ffffff" // change label color to white
              }
            },
            axisBorder: {
              show: false // hide the x-axis border
            }
          },
          yaxis: {
            labels: {
              style: {
                colors: "#ffffff" // change label color to white
              }
            }
          },
          grid: {
            show: false // hide grid lines
          }
        };
    
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    
        // Cleanup function to destroy the chart when the component is unmounted
        return () => {
          chart.destroy();
        };
      }, []); 

    return (
        <MainCard contentSX={{ p: 2.25, background: darkMode ? '#3A3A5A' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)' }}>
            <Stack spacing={0.5}>
                <Typography variant="h6" color="white">
                    Total Distribution
                </Typography>
            </Stack>
            <div id="chart"></div>
        </MainCard>
    );
}
