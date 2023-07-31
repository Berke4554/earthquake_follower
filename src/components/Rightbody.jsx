import { Box, Grid } from "@mui/material";
import React from "react";

function Rightbody() {
  return (
    <Box flex={2} paddingLeft={"20px"} marginTop={"10px"}>
      <Box
        width={"100%"}
        height={window.innerHeight * 0.85}
        bgcolor={"red"}
      ></Box>
    </Box>
  );
}

export default Rightbody;
