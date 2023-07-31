import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";

import React from "react";
import Magazalar from "./Magazalar";
import { BasText, SonucText } from "../constants/textstyle";
import DepremInfo from "./DepremInfo";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constants/colors";

function AccordionCard() {
  return (
    <Grid marginTop={"10px"}>
      <Accordion sx={{ backgroundColor: "#1E232B", margin: " 5px 0px" }}>
        {/*Depremler deprem bilgileri */}
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <DepremInfo />
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
