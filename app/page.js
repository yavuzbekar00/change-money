"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [datas, setDatas] = useState([]);
  const [fromMenuOpen, setfromMenuOpen] = useState(false);
  const [fromMoney, setFromMoney] = useState("USD");
  const [toMenuOpen, setToMenuOpen] = useState(false);
  const [toMoney, setToMoney] = useState("USD");
  const [fromInput, setFromInput] = useState();
  const [toInput, setToInput] = useState();

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

  useEffect(() => {}, [datas, fromMoney, toMoney]);

  const clickFromMoneyButton = (key) => {
    setFromMoney(key);
    setfromMenuOpen(!fromMenuOpen);
  };
  const clickToMoneyButton = (key) => {
    setToMoney(key);
    setToMenuOpen(!toMenuOpen);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "200px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          boxShadow: " 0px 0px 7px 0px rgba(0,0,0,0.15)",
        }}
      >
        <div>1 TRY to EUR</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          {/* from money */}
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
                  value={fromInput}
                  onChange={(e) => setFromInput(e.target.value)}
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
                  onClick={() => setfromMenuOpen(!fromMenuOpen)}
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
                  {fromMoney}
                  <Icon
                    style={{ rotate: fromMenuOpen ? "180deg" : "" }}
                    icon="bxs:down-arrow"
                  ></Icon>
                </button>
              </div>
              {fromMenuOpen && (
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
                        onClick={() => clickFromMoneyButton(key)}
                      >
                        {key}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* to money */}

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
                  value={toInput}
                  onChange={(e) => setToInput(e.target.value)}
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
                  onClick={() => setToMenuOpen(!toMenuOpen)}
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
                  {toMoney}
                  <Icon
                    style={{ rotate: toMenuOpen ? "180deg" : "" }}
                    icon="bxs:down-arrow"
                  ></Icon>
                </button>
              </div>
              {toMenuOpen && (
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
                        onClick={() => clickToMoneyButton(key)}
                      >
                        {key}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
