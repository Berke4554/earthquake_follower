import React from "react";
import TopNavBar from "./components/TopNavBar";
import { Box, Divider, Grid, Stack } from "@mui/material";
import Leftbody from "./components/Leftbody";
import Rightbody from "./components/Rightbody";

function App() {
  return (
    <>
      {/*item spacing={1} display={"flex"} p={4} */}
      <TopNavBar />
      <Grid
        container
        justifyContent={"center"}
        spacing={1}
        columns={16}
        sx={{ marginTop: "5px" }}
      >
        {/*leftbody */}
        <Grid item xs={7.8} display={"flex"}>
          <Leftbody />
        </Grid>
        <Divider orientation="vertical" color="#0d1217"></Divider>
        {/*rightbody */}
        <Grid item xs={7.8}>
          <Rightbody />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
