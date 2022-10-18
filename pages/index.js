import Head from "next/head";
import Image from "next/image";
import Food from "../components/Food";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import data from "../db/data";
import { useState } from "react";
import FoodContext from "../context/foodContext";

export default function Home() {
  const { en, es } = data;
  const [lang, setLang] = useState(es);

  const handleChangeLang = (e) => {
    event.preventDefault();
    changeDefaultLang(e.target.value);
    console.log(e.target.value);
  };
  const changeDefaultLang = (value) =>
    value === "es" ? setLang(es) : setLang(en);

  return (
    <div>
      <select onChange={handleChangeLang} defaultValue="def" name="" id="">
        <option disabled value="def">
          Language
        </option>
        <option className="" value="EN">
          English
        </option>
        <option className="" value="ES">
          Español
        </option>
      </select>
      <form>
        <button onClick={handleChangeLang} value="en">
          EN
        </button>
        <button onClick={handleChangeLang} value="es">
          ES
        </button>
        <button></button>
      </form>

      <h1>Entradas</h1>
      {lang.comidas.entradas.map((item) => (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <h2>
            {item.descripcion}
            {item.precio}
          </h2>
        </div>
      ))}
    </div>
  );
}
