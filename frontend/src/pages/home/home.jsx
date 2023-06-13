import React from "react";
import { Button, Typography, Grid, Card, CardMedia } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../../context/Auth.context";
import collegeImage from "../../assets/college-image.jpg";

export const Home = () => {
  const auth = React.useContext(AuthContext);

  return (
    <>
      <Grid container marginBottom={4} spacing={2}>
        <Grid item xs={12} sx={{ textAlign: "center", mt:3}}>
          <Typography variant="h4" gutterBottom>
            Добро пожаловать в БГПК
          </Typography>
          <Typography variant="body1" gutterBottom>
            Барнаульский государственный педагогический колледж
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardMedia component="img" height="250" image={collegeImage} alt="College" />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="outlined"
                size="large"
                component={RouterLink}
                to={"/group"}
              >
                Расписание групп
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="outlined"
                size="large"
                component={RouterLink}
                to={"/teacher"}
              >
                Расписание преподавателей
              </Button>
            </Grid>
            {auth.isAuthenticated && (
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  component={RouterLink}
                  to={"/add"}
                >
                  Загрузить расписание
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
