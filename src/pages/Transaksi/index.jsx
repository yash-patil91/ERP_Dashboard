import Grid from '@mui/material/Grid';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MonthlyBarChart from '../dashboard/MonthlyBarChart';
import UniqueVisitorCard from '../dashboard/UniqueVisitorCard';
import React, { useContext } from 'react';
import { DarkModeContext } from '../../components/DarkModeContext';

import Currency from 'components/cards/statistics/Currency';
import Progressbar from '../dashboard/Progressbar';
import DistributionChart from '../dashboard/DistributionChart';
import JurnalUmum from './JurnalUmum';
import Invoice from './Invoice';
import Pembayaran from './Pembayaran';

export default function index() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Grid container rowSpacing={1.5} columnSpacing={1.75} sx={{background:darkMode?"#2e2e48":"#f7c345"}} color={'white'}>

      <Grid item xs={12}>
        <JurnalUmum />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Invoice />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Pembayaran />
      </Grid>
      
    </Grid>
  );
}
