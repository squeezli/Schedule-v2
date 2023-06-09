import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./router";
import { Header } from "./components/headers/header";
import { AuthContext } from "./context/Auth.context";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useAuth } from "./hooks/auth.hook";
import { MessageProvider } from "./context/Message.context";

function App() {
  const { token, login, logout, userId, rules, ready } = useAuth();

  const isAuthenticated = !!token;

  const [checkedTheme, setCheckedTheme] = React.useState(false);
  const routes = useRoutes(token, isAuthenticated);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  if (!ready) {
    // return <div>fsdfsd</div>;
  } else if (checkedTheme) {
    return (
      <AuthContext.Provider
        value={{ token, login, logout, userId, isAuthenticated, rules, checkedTheme}}
      >
        <MessageProvider>
          <div className="App">
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <main>
                <Router basename={process.env.PUBLIC_URL}>
                  <Header
                    setCheckedTheme={setCheckedTheme}
                    checkedTheme={checkedTheme}
                    isAuthenticated={isAuthenticated}
                  />
                  <Container>{routes}</Container>
                </Router>
              </main>
            </ThemeProvider>
          </div>
        </MessageProvider>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider
        value={{ token, login, logout, userId, isAuthenticated, rules }}
      >
        <MessageProvider>
        <div className="App">
          <CssBaseline />
          <main>
            <Router basename={process.env.PUBLIC_URL}>
              <Header
                setCheckedTheme={setCheckedTheme}
                checkedTheme={checkedTheme}
                isAuthenticated={isAuthenticated}
              />
              <Container>{routes}</Container>
            </Router>
          </main>
        </div>

        </MessageProvider>
      </AuthContext.Provider>
    );
  }
}

export default App;
