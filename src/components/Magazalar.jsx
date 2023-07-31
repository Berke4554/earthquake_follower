import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { BasText, SonucText } from "../constants/textstyle";

function Magazalar() {
  return (
    <div style={{ display: "flex" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>Magaza</Typography>
          <Typography sx={SonucText}>Magaza 1</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>Location</Typography>
          <Typography sx={SonucText}>12139219039029321902</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>Coordinates</Typography>
          <Typography sx={SonucText}>12h 54m</Typography>
        </Box>
        <FormControl
          sx={{
            //aşagıda kendi özel root ismine ulaştım bunu verıp style atayabıldım bunu yapmasaydın stıl atamama ızın vermıyordu
            //cekırdek stılıne ulasmıs oldum boylece
            "& .MuiTypography-root": BasText,
          }}
        >
          <FormLabel id="demo-form-control-label-placement"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="algılanan"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                />
              }
              label="Algılanan"
              labelPlacement="top"
            />
            <FormControlLabel
              value="algılanmayan"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                />
              }
              label="Algılanmayan"
              labelPlacement="top"
              color=""
            />
            <FormControlLabel
              value="noTespit"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                />
              }
              label="T.Edilemedi"
              labelPlacement="top"
              color=""
            />
            <FormControlLabel
              value="noAktif"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                />
              }
              label="Aktif D."
              labelPlacement="top"
              color="#484B54"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
}

export default Magazalar;
