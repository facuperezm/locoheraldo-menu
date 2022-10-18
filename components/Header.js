import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";

function Header() {
  return (
    <div>
      <header className="main__header">
        <Image className="logo" src={logo} alt="loco heraldos logo" />
        <h1>
          EL LOCO <br />
          <span className="heraldo">HERALDO</span>
        </h1>
        <h4>✨Un bar que ama el arte en todas sus dimensiones✨</h4>
        <div className="languages">
          <a className="hide">ES</a>
          <a className="hide">EN</a>
          <a className="hide">PT</a>
        </div>
        <div>
          <a href="#" className="btn-food">
            Bebidas
          </a>
          <a href="#" className="btn-beverage">
            Comidas
          </a>
        </div>
      </header>
      ;
    </div>
  );
}

export default Header;
