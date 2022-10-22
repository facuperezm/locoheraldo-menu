import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import data from "../db/data";
import { useState } from "react";
import FoodContext from "../context/foodContext";
import Itemsito from "../components/item";

export default function Home() {
  const { en, es } = data;
  const [lang, setLang] = useState(es);
  const [show, setShow] = useState("comidas");
  const [isHidden, setIsHidden] = useState(true);

  const handleShow = (e) => {
    event.preventDefault();
    setShow(e.target.value);
  };

  const handleChangeLang = (e) => {
    event.preventDefault();
    changeDefaultLang(e.target.value);
    console.log(e.target.value);
  };
  const changeDefaultLang = (value) =>
    value === "es" ? setLang(es) : setLang(en);

  return (
    <div>
      <Header />
      <form>
        <button className="" onClick={handleChangeLang} value="en">
          EN
        </button>
        <button onClick={handleChangeLang} value="es">
          ES
        </button>
        <button></button>
      </form>

      <form>
        <button
          className="rounded-full bg-cyan-200 py-1 px-3"
          onClick={handleShow}
          value="comidas"
        >
          Comidas
        </button>
        <button
          className="rounded-full bg-cyan-200 py-1 px-3"
          onClick={handleShow}
          value="bebidas"
        >
          Bebidas
        </button>
      </form>

      <h1 onClick={() => setIsHidden(!isHidden)}>Entradas</h1>
      {isHidden
        ? show === "comidas"
          ? lang.comidas.entradas.map((item) => (
              <div key={item.name}>
                <Itemsito data={item} />
              </div>
            ))
          : lang.bebidas.cocktails.map((item) => (
              <div key={item.name}>
                <Itemsito data={item} />
              </div>
            ))
        : ""}
    </div>
  );
}
