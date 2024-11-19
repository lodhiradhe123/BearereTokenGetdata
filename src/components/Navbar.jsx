import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-12 bg-slate-400 flex justify-center items-center capitalize ">
      <nav className="w-1/2 flex justify-between font-bold ">
        <Link to="/Home" >Login</Link>
        <Link to="/Addhooks" >Addhooks</Link>
        <Link to="/WebhookData" >WebhookData</Link>
      </nav>
    </div>
  );
}

export default Navbar;
