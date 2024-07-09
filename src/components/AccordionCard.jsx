import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
} from "@mui/material";

import React from "react";
import Magazalar from "./Magazalar";
import DepremInfo from "./DepremInfo";

function AccordionCard(props) {
  //key'i data olan props'u tut demek bunu bi üstteki componentimizden aldık
  const { data, index } = props;
  return (
    <Grid marginTop={"10px"}>
      <Accordion sx={{ backgroundColor: "#1E232B", margin: " 5px 0px" }}>
        {/*Depremler deprem bilgileri */}
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <DepremInfo veri={data} />
        </AccordionSummary>

        {/*Mağazalar mağaza bilgileri */}
        <AccordionDetails>
          <Magazalar />
          <Divider
            color="#484B54"
            sx={{ marginBottom: "5px", marginTop: "5px" }}
          />
          <Magazalar />
          <Divider
            color="#484B54"
            sx={{ marginBottom: "5px", marginTop: "5px" }}
          />
          <Box style={{ display: "flex", justifyContent: "end" }}>
            <Button sx={{ marginTop: "10px" }} variant="contained" size="small">
              Kaydet
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}

export default AccordionCard;
