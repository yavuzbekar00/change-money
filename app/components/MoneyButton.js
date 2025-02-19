"use client";
import React from "react";
import MoneyButtonItem from "./MoneyButtonItem";

function MoneyButton({
  datas,
  input,
  handleChange,
  handleMoneyChange,
  setMenuOpen,
  menuOpen,
  money,
}) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <MoneyButtonItem
        datas={datas}
        handleChange={handleChange}
        handleMoneyChange={handleMoneyChange}
        input={input}
        menuOpen={menuOpen}
        money={money}
        setMenuOpen={setMenuOpen}
      />
    </div>
  );
}

export default MoneyButton;
