"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import MoneyButton from "./components/MoneyButton";
import List from "./components/List";

export default function Home() {
  const [datas, setDatas] = useState({});
  const [fromMenuOpen, setFromMenuOpen] = useState(false);
  const [toMenuOpen, setToMenuOpen] = useState(false);
  const [fromMoney, setFromMoney] = useState("USD");
  const [toMoney, setToMoney] = useState("EUR");
  const [fromInput, setFromInput] = useState(1);
  const [toInput, setToInput] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_W26NjyvBmRgD4D8brUPTc3n3OeZxte5nvKE8Gewe"
        );
        const myData = await response.json();
        setDatas(myData.data);
      } catch (error) {
        console.error("API'den veri çekme hatası:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (datas[fromMoney] && datas[toMoney]) {
      setToInput(calculateToInput(fromInput));
    }
  }, [fromMoney, toMoney, datas, fromInput]);

  const calculateToInput = (value) => {
    if (datas[fromMoney] && datas[toMoney]) {
      return ((value / datas[fromMoney]) * datas[toMoney]).toFixed(4);
    }
    return "";
  };

  const calculateFromInput = (value) => {
    if (datas[fromMoney] && datas[toMoney]) {
      return ((value / datas[toMoney]) * datas[fromMoney]).toFixed(4);
    }
    return "";
  };

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFromInput(value);
    setToInput(calculateToInput(value));
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setToInput(value);
    setFromInput(calculateFromInput(value));
  };

  const handleFromMoneyChange = (currency) => {
    setFromMoney(currency);
    setFromMenuOpen(false);
    setToInput(calculateToInput(fromInput));
  };

  const handleToMoneyChange = (currency) => {
    setToMoney(currency);
    setToMenuOpen(false);
    setToInput(calculateToInput(fromInput));
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "250px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <div style={{ fontSize: "18px" }}>
          {fromInput} <span style={{ fontWeight: "bold" }}>{fromMoney}</span> to{" "}
          <span style={{ fontWeight: "bold" }}>{toMoney}</span> {toInput}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <MoneyButton
            datas={datas}
            handleChange={handleFromChange}
            handleMoneyChange={handleFromMoneyChange}
            input={fromInput}
            menuOpen={fromMenuOpen}
            money={fromMoney}
            setMenuOpen={setFromMenuOpen}
          />
          <MoneyButton
            datas={datas}
            handleChange={handleToChange}
            handleMoneyChange={handleToMoneyChange}
            input={toInput}
            menuOpen={toMenuOpen}
            money={toMoney}
            setMenuOpen={setToMenuOpen}
          />
        </div>
      </div>
      <List datas={datas} />
    </div>
  );
}
