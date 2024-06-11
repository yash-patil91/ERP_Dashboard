import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

// const Color = Loadable(lazy(() => import('pages/component-overview/color')));

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const Administrasi = Loadable(lazy(()=> import('pages/Administrasi/index')));
const DatamasterPage = Loadable(lazy(()=> import('pages/Datamaster/index')));
const TransaksiPage = Loadable(lazy(()=> import('pages/Transaksi/index')));
const LaporannPage  = Loadable(lazy(()=> import('pages/Laporan/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/Administrasi',
      element: <Administrasi />
    },
    {
      path: '/Datamaster',
      element: <DatamasterPage/>
    },
    {
      path: '/Transaksi',
      element: <TransaksiPage/>
    },
    {
      path: '/Laporann',
      element: <LaporannPage/>
    },

   
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
  
  ]
};

export default MainRoutes;
