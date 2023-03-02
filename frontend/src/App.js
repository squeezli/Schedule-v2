import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './router';
import { Header } from './components/headers/header';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

function App() {
  const [checkedTheme, setCheckedTheme] = React.useState(false);
  const routes = useRoutes()
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  if (checkedTheme) {
    return (
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <main>
            <Router basename={process.env.PUBLIC_URL}>
              <Header setCheckedTheme={setCheckedTheme} checkedTheme={checkedTheme} />
              <Container>
                {routes}
              </Container>
            </Router>
          </main>
        </ThemeProvider>
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <CssBaseline />
        <main>
          <Router basename={process.env.PUBLIC_URL}>
            <Header setCheckedTheme={setCheckedTheme} checkedTheme={checkedTheme} />
            <Container>
              {routes}
            </Container>
          </Router>
        </main>
      </div>
    )
  }
}

export default App;
