import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";

function Header({ copy }) {
  return (
    <div className="text-center flex align-center flex-col">
      <header className="p-4 flex flex-col text-center justify-self-center">
        <div className="mb-1 max-w-sm w-2/4 align-center m-auto border-box">
          <Image className="logo" src={logo} alt="loco heraldos logo" />
        </div>
        <h1 className="mt-4 font-bold font-serif text-[3.5rem] leading-10 tracking-[0.1rem]">
          EL LOCO HERALDO
        </h1>
        <h2 className="mt-4 font-bold">{copy}</h2>
      </header>
    </div>
  );
}

export default Header;
