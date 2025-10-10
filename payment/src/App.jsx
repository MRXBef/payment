import { useState } from "react";
import reactLogo from "./assets/react.svg";
import qr from "./assets/qr.jpg";
import gopay from "./assets/gopay.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "auto",
          alignItems: "center"
        }}
      >
        <h1 style={{fontSize: "1rem"}}>abfrozen.vercel.app</h1>
        <p style={{marginTop: "", marginBottom: "-10px", fontSize: "0.5rem"}} className="read-the-docs">Powered by:</p>
        <a href="#">
          <img className="logo" style={{width: "40px", height: "20px"}} src={gopay} alt="" />
        </a>

        <div>
          {/* <a href="https://vite.dev" target="_blank"> */}
          <img
            style={{
              transform: "scale(1.5)",
              padding: "5px",
              margin: "20px",
              backgroundColor: "#fff",
            }}
            src={qr}
            className="logo"
            alt="Vite logo"
          />
          {/* </a> */}
        </div>

        <h1 style={{fontSize: "1rem"}}>IDR 147.000</h1>
        <p style={{fontSize: "0.5rem"}} className="read-the-docs">Scan the QR Code and complete payment before 20, October 2025</p>
      </div>
    </>
  );
}

export default App;
