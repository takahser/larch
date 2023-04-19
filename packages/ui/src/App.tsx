import { useRoutes, RouteObject } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layout/Mainlayout';
import Dashboard from './pages/dashboard/page';
import Network from './pages/network/page';
import CreateNetwork from './pages/network/components/create_network/create_network';
import CreateRelayChain from './pages/network/components/create_network/relaychain';
import CreateParachain from './pages/network/components/create_network/parachain';
import CreateCollator from './pages/network/components/create_network/collator';
import CreateHrmp from './pages/network/components/create_network/hrmp';
import Activity from './pages/activity/page';
import Template from './pages/template/page';
import Setting from './pages/setting/page';
import RunList from './pages/run-list/page';

const routes: RouteObject[] = [

  {
    element: <MainLayout />,
    children: [

      {
        path: ('/'),
        element: <Dashboard />,
      },
      {
        path: ('/dashboard'),
        element: <Dashboard />,
      },
      {
        path: ('/network'),
        element: <Network />,

      },
      {
        path: ('/template/createNetwork/setting'),
        element: <CreateNetwork />,
      },
      {
        path: ('/template/createNetwork/relaychain'),
        element: <CreateRelayChain />,
      },
      {
        path: ('/template/createNetwork/parachain'),
        element: <CreateParachain />,
      },
      {
        path: ('/template/createNetwork/collator'),
        element: <CreateCollator />,
      },
      {
        path: ('/template/createNetwork/hrmp'),
        element: <CreateHrmp />,
      },

      {
        path: ('/setting'),
        element: <Setting />,
      },

      {
        path: ('/run-list'),
        element: <RunList />,
      },

      {
        path: ('/activity'),
        element: <Activity />,
      },

      {
        path: ('/template'),
        element: <Template />,
      },

    ],
  },
];

const App = () => {
  const element = useRoutes(routes);
  return element;
};

export default App;
