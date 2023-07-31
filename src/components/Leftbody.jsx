import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AccordionCard from "./AccordionCard";

function Leftbody() {
  return (
    <Box flex={2} marginRight={"20px"}>
      <AccordionCard />
      <AccordionCard />
      <AccordionCard />
      <AccordionCard />
    </Box>
  );
}

export default Leftbody;
