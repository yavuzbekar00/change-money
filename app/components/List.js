import React from "react";

function List({ datas }) {
  return (
    <div>
      {Object.keys(datas).length > 0 &&
        Object.keys(datas).map((key) => (
          <div
            key={key}
            style={{
              display: "flex",
              minWidth: "500px",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
              backgroundColor: "#fff",
              boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.05)",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <div>{key}</div>
            <div>{datas[key]}</div>
          </div>
        ))}
    </div>
  );
}

export default List;
