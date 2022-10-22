import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";

function Header() {
  return (
    <div className="text-center flex align-center flex-col justify-center">
      <header className="p-4 flex flex-col text-center justify-self-center">
        <div className="mb-1 max-w-sm w-2/4 align-center m-auto">
          <Image
            className="logo"
            src={logo}
            alt="loco heraldos logo"
            layout="responsive"
          />
        </div>
        <h1 className="font-bold">EL LOCO HERALDO</h1>
        <h4>✨Un bar que ama el arte en todas sus dimensiones✨</h4>
      </header>
    </div>
  );
}

export default Header;
