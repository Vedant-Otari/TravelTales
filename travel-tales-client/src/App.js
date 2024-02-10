import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./assests/images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    // dispatch();
  },[])
  return (
    <Container maxWidth="lg">
      <AppBar
        sx={{
          borderRadius: 15,
          margin: "30px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        position="static"
        color="inherit"
      >
        <Typography
          sx={{
            color: "rgba(0,183,255, 1)",
          }}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          style={{
            marginLeft: "15px",
          }}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing="3"
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
