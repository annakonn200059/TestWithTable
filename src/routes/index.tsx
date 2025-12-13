import { Route, Routes } from 'react-router-dom';

import { routesConfig } from './routesConfig';
import PageWrapper from '@/view/components/PageWrapper';

const AppRouter = () => {
  const routeComponents = routesConfig.map((route) => (
    <Route
      path={route.path}
      element={<PageWrapper>{route.element}</PageWrapper>}
      key={route.key}
    />
  ));

  return <Routes>{routeComponents}</Routes>;
};

export default AppRouter;
