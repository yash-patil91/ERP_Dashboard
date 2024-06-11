// assets
import { DashboardOutlined } from '@ant-design/icons';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  // title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: DashboardOutlinedIcon,
      breadcrumbs: false
    },
  ]

};
const administrasi = {
  id: 'group-administrasi',
  // title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'administrasi',
      title: 'Administrasi',
      type: 'item',
      url: '/Administrasi',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]

};

const Datamaster = {
  id: 'group-Datamaster',
  // title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'Datamaster',
      title: 'Data Master',
      type: 'item',
      url: '/Datamaster',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};
const Transaksi = {
  id: 'group-Datamaster',
  // title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'Transaksi',
      title: 'Transaksi',
      type: 'item',
      url: '/Transaksi',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

const Laporan = {
  id: 'group-Datamaster',
  // title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'Laporan',
      title: 'Laporan',
      type: 'item',
      url: '/Laporann',
      icon: SettingsOutlinedIcon,
      breadcrumbs: false
    }
  ]
};

export {dashboard, administrasi, Datamaster, Transaksi,Laporan };
