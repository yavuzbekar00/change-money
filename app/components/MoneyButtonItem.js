import { Icon } from "@iconify/react";
import React from "react";
import Dropdown from "./Dropdown";

function MoneyButtonItem({
  handleChange,
  input,
  setMenuOpen,
  menuOpen,
  money,
  datas,
  handleMoneyChange,
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          type="number"
          value={input}
          onChange={handleChange}
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
        />
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
          />
        </button>
      </div>
      {menuOpen && (
        <Dropdown datas={datas} handleMoneyChange={handleMoneyChange} />
      )}
    </div>
  );
}

export default MoneyButtonItem;
