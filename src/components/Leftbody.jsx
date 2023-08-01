import { Box, Grid, Typography } from "@mui/material";
import AccordionCard from "./AccordionCard";

import axios from "axios";
import React, { useEffect, useState } from "react";

function Leftbody() {
  const [eventData, setEventData] = useState([]);

  //bu veriyi Leftbody komponentımızde cagıracagız sımdılık boyle kalsın
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

  // Verileri işlemek için örnek olarak ilk olayın id'sini alalım

  return (
    <Box flex={2} marginRight={"20px"}>
      {/*data adında bir key degerı verdık ve gonderecegım verının stateini ya da degıskenını koydum burada useState'i koyduk
      Aşagıdaki olay sayesinde dizinin her bir elemanına tek tek ulaşıp alttaki komponentlere anlık olarak bunları verdik ve 
      boylece o verılerıne ulastık
      */}
      {eventData?.map((a) => (
        <AccordionCard data={a} />
      ))}
    </Box>
  );
}

export default Leftbody;
