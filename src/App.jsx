import React, { useEffect, useState } from "react";
import TopNavBar from "./components/TopNavBar";
import { Box, Divider, Grid, Stack } from "@mui/material";
import Leftbody from "./components/Leftbody";
import Rightbody from "./components/Rightbody";
import axios from "axios";

function App() {
  const [eventData, setEventData] = useState([]);

  //bu veriyi App.jsx 'de cagıracagız
  useEffect(() => {
    //  json server kullanarak olusturdugumuz serverımızın url'si
    const url = "http://localhost:8000/earthquake";

    // Axios ile JSON verilerini çekme
    axios
      .get(url)
      .then((response) => {
        console.log("eventData:", response.data[0].deprem);
        setEventData(response.data[0].deprem);
      })
      .catch((error) => {
        console.error("Veri çekilirken hata oluştu:", error);
      });
  }, []); // Boş dizi kullanarak sadece bileşen yüklendiğinde bir kere çalışmasını sağlarız

  if (!eventData) {
    return <div>Veriler yükleniyor...</div>;
  }

  return (
    <>
      {/*item spacing={1} display={"flex"} p={4} */}
      <TopNavBar />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "15px",
          marginLeft: "1.5%",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Onay Bekleyenler
      </Box>
      <Grid
        container
        justifyContent={"center"}
        spacing={1}
        columns={16}
        sx={{ marginTop: "5px" }}
      >
        {/*leftbody */}
        <Grid item xs={7.8} display={"flex"}>
          <Leftbody data={eventData} />
        </Grid>
        <Divider orientation="vertical" color="#0d1217"></Divider>
        {/*rightbody */}
        <Grid item xs={7.8}>
          <Rightbody data={eventData} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
