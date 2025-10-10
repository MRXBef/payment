import { useState } from "react";
import reactLogo from "./assets/react.svg";
import qr from "./assets/qr.jpg";
import gopay from "./assets/gopay.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const monthList = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  }

  const month = new Date().getMonth()
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // paddingTop: "20vh",
          width: "100%",
          height: "100vh",
          alignItems: "center"
        }}
      >
        <h1 style={{fontSize: "1.5rem", marginTop: "15vh"}}>abfrozen.vercel.app</h1>
        <p style={{marginTop: "", marginBottom: "-20px", fontSize: "0.5rem"}} className="read-the-docs">Powered by:</p>
        <a href="#">
          <img className="logo" style={{width: "60px", height: "20px"}} src={gopay} alt="" />
        </a>

        <div>
          {/* <a href="https://vite.dev" target="_blank"> */}
          <img
            style={{
              transform: "scale(1.5)",
              padding: "5px",
              margin: "20px",
              backgroundColor: "#fff",
              marginBottom: "25px"
            }}
            src={qr}
            className="logo"
            alt="Vite logo"
          />
          {/* </a> */}
        </div>

        <h1 style={{fontSize: "1rem"}}>IDR 147.000</h1>
        <p style={{fontSize: "0.5rem"}} className="read-the-docs">Scan the QR Code and complete payment before 20, {monthList[month]} {new Date().getFullYear()}</p>
      </div>
    </>
  );
}

export default App;
