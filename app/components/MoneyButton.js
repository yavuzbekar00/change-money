"use client";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

function MoneyButton({ setMenuOpen, menuOpen, money, clickMoneyOpen, datas }) {
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    setInputValue(datas[money]);
  }, [datas, money]);

  const newMoneyValue = datas[money] * inputValue;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <input
            type="number"
            defaultValue={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              width: "150px",
              height: "40px",
              padding: "5px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#fafbfc",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            placeholder="Enter the value"
          ></input>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              width: "150px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {money}
            <Icon
              style={{ rotate: menuOpen ? "180deg" : "" }}
              icon="bxs:down-arrow"
            ></Icon>
          </button>
        </div>
        {menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              marginTop: "8px",
              backgroundColor: "white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              zIndex: 50,
              height: "300px",
              overflow: "scroll",
              width: "150px",
            }}
          >
            {datas &&
              Object.keys(datas).length > 0 &&
              Object.keys(datas).map((key) => (
                <div
                  key={key}
                  className="money-hover"
                  style={{
                    padding: "12px 16px",
                    textDecoration: "none",
                    color: "black",
                    borderBottom: "1px solid #e5e7eb",
                    cursor: "pointer",
                  }}
                  onClick={() => clickMoneyOpen(key)}
                >
                  {key}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MoneyButton;
