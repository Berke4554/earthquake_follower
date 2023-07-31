import { Box, Typography } from "@mui/material";
import React from "react";
import { BasText, SonucText } from "../constants/textstyle";

function DepremInfo() {
  return (
    <div>
      <Box
        sx={{
          width: window.innerWidth * 0.45,
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <Box
          bgcolor={"blue"}
          width={"50px"}
          height={"50px"}
          marginRight={"10px"}
        ></Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>id</Typography>
          <Typography sx={SonucText}>461478</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>eventDate</Typography>
          <Typography sx={SonucText}>2023-07-26T06:35:09</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>longitude</Typography>
          <Typography sx={SonucText}>35.281</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>latitude</Typography>
          <Typography sx={SonucText}>38.706</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>magnitude</Typography>
          <Typography sx={SonucText}>1.5</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>magnitudeType</Typography>
          <Typography sx={SonucText}>ML</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>location</Typography>
          <Typography sx={SonucText}>İncesu (Kayseri)</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>depth</Typography>
          <Typography sx={SonucText}>7</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default DepremInfo;
