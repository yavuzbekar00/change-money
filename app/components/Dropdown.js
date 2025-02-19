import React from "react";

function Dropdown({ datas, handleMoneyChange }) {
  return (
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
      {Object.keys(datas).map((key) => (
        <div
          key={key}
          style={{
            padding: "12px 16px",
            textDecoration: "none",
            color: "black",
            borderBottom: "1px solid #e5e7eb",
            cursor: "pointer",
          }}
          onClick={() => handleMoneyChange(key)}
        >
          {key}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
