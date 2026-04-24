import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RootLayout from './layout/layout';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RootLayout>
        <App />
      </RootLayout>
    </React.StrictMode>,
  );
}
