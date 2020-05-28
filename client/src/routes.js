import React from 'react';

const Hourly = React.lazy(() => import('./views/Trends/Hourly/Hourly'));
const Daily = React.lazy(() => import('./views/Trends/Daily/Daily'));
const Monthly = React.lazy(() => import('./views/Trends/Monthy/Monthly'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Health = React.lazy(() => import('./views/PlantData/PlantGraphs/PlantGraphs'));
const Sector = React.lazy(() => import('./views/PlantData/Sectorwise/Sectorwise'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/plant', exact: true, name: 'Plant Health', component: Health },
  { path: '/plant/health', name: 'Health', component: Health },
  { path: '/plant/sector', name: 'Sectorwise Map', component: Sector },
  { path: '/trends/daily', name: 'Daily', component: Daily },
  { path: '/trends/hourly', name: 'Hourly', component: Hourly },
  { path: '/trends/monthly', name: 'Monthly', component: Monthly },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
