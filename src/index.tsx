import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRouter from './routes/index.tsx';
import Header from './view/components/Header/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </HashRouter>
  </StrictMode>
);
