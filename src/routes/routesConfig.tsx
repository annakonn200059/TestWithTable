import { MyExpenses, ExpensesAnalysis } from '@pages/index';
import URLS from './urls';
import { Navigate } from 'react-router-dom';

export const routesConfig = [
  {
    path: '/',
    element: <Navigate to={URLS.MY_EXPENSES} replace />,
  },
  {
    path: URLS.MY_EXPENSES,
    element: <MyExpenses />,
    key: 'MyExpenses',
  },
  {
    path: URLS.EXPENSES_ANALYSIS,
    element: <ExpensesAnalysis />,
    key: 'ExpensesAnalysis',
  },
];
