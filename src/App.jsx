import React from "react";
import Logincomponent from "./components/Logincomponent";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Addhooks from "./components/Addhooks";
import WebhookData from "./components/WebhookData";

function App() {
  return <>
     <Navbar/>
     <Routes>
      <Route path="/Home" element={<Logincomponent/>} />
      <Route path="/Addhooks" element={<Addhooks/>} />
      <Route path="/WebhookData" element={<WebhookData/>} />
     </Routes>

  </>;
}

export default App;
