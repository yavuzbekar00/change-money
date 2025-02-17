"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(
          "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_W26NjyvBmRgD4D8brUPTc3n3OeZxte5nvKE8Gewe"
        )
          .then((response) => response.json())
          .then((myData) => setDatas(myData.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(datas);
  return (
    <div>
      {datas && Object.keys(datas).length > 0 ? (
        Object.keys(datas).map((key) => (
          <div key={key}>
            <h1>{key}</h1>
            <div>{datas[key]}</div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
