import Grid from '@mui/material/Grid';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MonthlyBarChart from './MonthlyBarChart';
import UniqueVisitorCard from './UniqueVisitorCard';

import Currency from 'components/cards/statistics/Currency';
import Progressbar from './Progressbar';
import DistributionChart from './DistributionChart';

export default function DashboardDefault() {
  return (
    <Grid container rowSpacing={1.5} columnSpacing={1.75} bgcolor={'#2e2e48'} color={'white'}>

      <Grid item xs={12} sm={6} md={7} lg={8}>
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <Currency title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
      <Grid item xs={12} md={7} lg={8}>
        <UniqueVisitorCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <MonthlyBarChart />
      </Grid>
      <Grid item xs={12} lg={6}>
        <DistributionChart />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Progressbar />
      </Grid>

    </Grid>
  );
}
