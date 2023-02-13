import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './router';
import { Header } from './components/headers/header';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

function App() {
  const routes = useRoutes()
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
          <main>
            <Router>
              <Header />
              <Container>
                {routes}
              </Container>
            </Router>
          </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
