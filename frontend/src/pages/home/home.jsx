import React from "react";
import { Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { Link as RouterLink } from 'react-router-dom';
import {AuthContext} from '../../context/Auth.context';

export const Home = () => {
  const auth = React.useContext(AuthContext)
  return (
    <>
      <Grid container marginBottom={43} spacing={1} columns={1} bgcolor={''} sx={{marginTop:'10px',width:'500px',}}>
        {/* <Text>Расписание</Text> */}
        <Grid  xs={6} md={8}>
          <Button xs={6} md={8} variant="outlined" spacing={3} size="large" component={RouterLink} to={"/group"}>Группы</Button>
        </Grid>
        <Grid  xs={6} md={4}>
          <Button xs={6} md={8} variant="outlined" spacing={3} size="large" bgcolor={"white"} component={RouterLink} to={"/teacher"}>Преподаватели</Button>
        </Grid>
        {/* <Grid  xs={6} md={4}>
          <Button xs={6} md={8} variant="outlined" size="large" component={RouterLink} to={"/classroom"}>Аудитории</Button>
        </Grid> */}
        {auth.isAuthenticated&&(

          <Grid  xs={6} md={4}>
          <Button xs={6} md={8} variant="outlined" size="large" component={RouterLink} to={"/add"}>Загрузить расписание</Button>
        </Grid>
          )}
      </Grid>
    </>
  )
}
