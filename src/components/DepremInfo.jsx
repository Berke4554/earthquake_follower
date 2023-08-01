import { Box, Typography } from "@mui/material";
import { BasText, SonucText } from "../constants/textstyle";
import React, { useEffect, useState } from "react";

function DepremInfo(props) {
  const { veri } = props;
  console.log("2.veriiii:", veri);

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
          bgcolor={veri?.magnitude > 1.5 ? "#9F251D" : "#178257"}
          color={"white"}
          width={"50px"}
          height={"50px"}
          marginRight={"10px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"bold"}
        >
          {veri?.magnitude}
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>id</Typography>
          <Typography sx={SonucText}>{veri?.id}</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>eventDate</Typography>
          <Typography sx={SonucText}>
            {veri?.eventDate.split("T")[0] +
              " " +
              veri?.eventDate.split("T")[1]}
          </Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>longitude</Typography>
          <Typography sx={SonucText}>{veri?.longitude}</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>latitude</Typography>
          <Typography sx={SonucText}>{veri?.latitude}</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>magnitude</Typography>
          <Typography sx={SonucText}>{veri?.magnitude}</Typography>
        </Box>

        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>location</Typography>
          <Typography sx={SonucText}>{veri?.location}</Typography>
        </Box>
        <Box
          className="box-info"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"50px"}
        >
          <Typography sx={BasText}>depth</Typography>
          <Typography sx={SonucText}>{veri?.depth}</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default DepremInfo;
