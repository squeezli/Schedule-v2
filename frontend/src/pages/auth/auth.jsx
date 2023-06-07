import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

import { useHttp } from "../../hooks/http.hook";
import { useAuth } from "../../hooks/auth.hook";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const AuthPage = () => {
  // const auth = useContext(AuthContext);
  const auth = useAuth()
  const { request } = useHttp();
  const classes = useStyles();
  const [login, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      const data = await request(`/api/auth`, "POST", {
        password,
        login,
      });
      auth.loginAuth(data.token)
    } catch (e) {
        console.log("Error", e);
    }
   };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.container}>
        <Typography component="h1" variant="h5" className={classes.title}>
          Авторизация
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Имя пользователя"
                name="username"
                value={login}
                onChange={handleUsernameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Пароль"
                name="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>
          </form>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>handleSubmit()}
          >
            Войти
          </Button>
      </div>
    </Container>
  );
};
