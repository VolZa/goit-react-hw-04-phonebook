import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
// import './index.css';rt
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#232323',
    accent: '#6085d3',
    white: '#fdfdfd',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
