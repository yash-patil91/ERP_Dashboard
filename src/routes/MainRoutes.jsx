import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import PrivateRoute from 'components/PrivateRoutes';

// const Color = Loadable(lazy(() => import('pages/component-overview/color')));

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const Administrasi = Loadable(lazy(()=> import('pages/Administrasi/index')));
const DatamasterPage = Loadable(lazy(()=> import('pages/Datamaster/index')));
const TransaksiPage = Loadable(lazy(()=> import('pages/Transaksi/index')));
const LaporannPage  = Loadable(lazy(()=> import('pages/Laporan/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <PrivateRoute><Dashboard /></PrivateRoute>,
  children: [
    {
      path: '/Administrasi',
      element: <PrivateRoute>
      <Administrasi />
    </PrivateRoute>
    },
    {
      path: '/Datamaster',
      element: <PrivateRoute><DatamasterPage/></PrivateRoute>
    },
    {
      path: '/Transaksi',
      element: <PrivateRoute><TransaksiPage/></PrivateRoute>
    },
    {
      path: '/Laporann',
      element: <PrivateRoute><LaporannPage/></PrivateRoute>
    },

   
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <PrivateRoute><DashboardDefault /></PrivateRoute>
        }
      ]
    },
  
  ]
};

export default MainRoutes;
