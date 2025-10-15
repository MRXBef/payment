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
  };

  const month = new Date().getMonth();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // paddingTop: "20vh",
          width: "100%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center", // ⬅️ ini kunci agar sejajar vertikal
            justifyContent: "center",
            width: "100%",
            marginTop: "15vh",
            gap: "10px",
          }}
        >
          <svg
            style={{ transform: "scale(0.7)" }}
            width="40" // kamu bisa ubah ukuran biar proporsional
            height="40"
            viewBox="0 0 76 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000" />
          </svg>

          <h1 style={{ fontSize: "1.5rem", margin: 0 }}>abfrozen.vercel.app</h1>
        </div>
        <p
          style={{ marginTop: "", marginBottom: "-20px", fontSize: "0.5rem" }}
          className="read-the-docs"
        >
          Powered by:
        </p>
        <a href="#">
          <img
            className="logo"
            style={{ width: "60px", height: "20px" }}
            src={gopay}
            alt=""
          />
        </a>

        <div>
          {/* <a href="https://vite.dev" target="_blank"> */}
          <img
            style={{
              transform: "scale(1.5)",
              padding: "5px",
              margin: "20px",
              backgroundColor: "#fff",
              marginBottom: "25px",
            }}
            src={qr}
            className="logo"
            alt="Vite logo"
          />
          {/* </a> */}
        </div>

        <h1 style={{ fontSize: "1rem" }}>IDR 167.000</h1>
        <div style={{paddingLeft: "15px", paddingRight: "15px"}}>
          <p style={{ fontSize: "0.6rem" }} className="read-the-docs">
            Scan the QR Code and Paste the "Transaction_ID" or "Reference_ID"  into the Variable at the configuration code. Do it before {monthList[month]}{" "}
            {new Date().getFullYear()}
            <tr></tr>
            Ignore this if you have already made a payment.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
