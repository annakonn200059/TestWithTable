import React, { Suspense } from 'react';

const MyExpenses = React.lazy(() => import(/* @vite-ignore */ './MyExpenses'));

export default () => (
  <Suspense fallback={null}>
    <MyExpenses />
  </Suspense>
);
