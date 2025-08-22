import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { lazy } from 'react';
import PrivateRoute from './components/Route/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
