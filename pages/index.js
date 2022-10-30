import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useTransition } from "react";
import { useRouter } from "next/router";
import es from "../locales/es";
import en from "../locales/en";
import Header from "../components/Header";
import Itemsito from "../components/item";
import ItemContainer from "../components/itemContainer";

export default function Home() {
  const [show, setShow] = useState("comidas");
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    const path = locale + router.pathname;
    router.replace(path, path, { locale });
  };

  const handleFood = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setShow(event.target.value);
  };

  return (
    <div className="flex-col justify-center m-auto items-center p-1">
      <Header copy={t.header} />
      <div className="flex flex-col justify-center m-auto items-center">
        <select
          onChange={changeLanguage}
          defaultValue={locale}
          className="text-black text-shadow-2xl text-lg bg-transparent text-center mb-4 border rounded-full p-1"
        >
          <option className="text-black" value="es">
            ES
          </option>
          <option className="text-black" value="en">
            EN
          </option>
        </select>

        <form className="mb-4">
          <button
            className="rounded-full bg-greenLoco text-white py-1 px-3 mx-1"
            onClick={handleFood}
            value="comidas"
          >
            {t.food}
          </button>
          <button
            className="rounded-full bg-greenLoco text-white py-1 px-3 mx-1"
            onClick={handleFood}
            value="bebidas"
          >
            {t.drinks}
          </button>
        </form>
      </div>
      {show === "bebidas" ? (
        <div>
          <ItemContainer title={t.cocktails}>
            {t.bebidas.cocktails.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
          <ItemContainer title={t.bebidasSinAlcohol}>
            {t.bebidas.bebidasSinAlcohol.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
          <ItemContainer title={t.cervezasVinos}>
            {t.bebidas.bebidasSinAlcohol.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
        </div>
      ) : (
        <div>
          <ItemContainer title={t.entradas}>
            {t.comidas.entradas.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
          <ItemContainer title={t.picadas}>
            {t.comidas.picadas.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
          <ItemContainer title={t.entrepanes}>
            {t.comidas.entrepanes.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
          <ItemContainer title={t.alplato}>
            {t.comidas.alplato.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
          <ItemContainer title={t.ensaladas}>
            {t.comidas.ensaladas.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
          <ItemContainer title={t.delmar}>
            {t.comidas.delmar.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
          <ItemContainer title={t.pizzas}>
            {t.comidas.pizzas.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
          <ItemContainer title={t.adicionales}>
            {t.comidas.adicionales.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
          <ItemContainer title={t.postres}>
            {t.comidas.postres.map((item) => (
              <Itemsito key={item.name}>{item}</Itemsito>
            ))}
          </ItemContainer>
        </div>
      )}
    </div>
  );
}
