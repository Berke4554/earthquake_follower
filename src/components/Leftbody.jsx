import { Box, Grid, Typography } from "@mui/material";
import AccordionCard from "./AccordionCard";

import axios from "axios";
import React, { useEffect, useState } from "react";

function Leftbody(props) {
  const { data } = props;

  return (
    <Box flex={2} marginRight={"20px"}>
      {/*data adında bir key degerı verdık ve gonderecegım verının stateini ya da degıskenını koydum burada useState'i koyduk
      Aşagıdaki olay sayesinde dizinin her bir elemanına tek tek ulaşıp alttaki komponentlere anlık olarak bunları verdik ve 
      boylece o verılerıne ulastık
      */}
      {data?.map((a, index) => (
        <AccordionCard data={a} index={index} />
      ))}
    </Box>
  );
}

export default Leftbody;
