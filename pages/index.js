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
import api from "../product/api";

export default function Home({ products }) {
  const [show, setShow] = useState("comidas");

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
    setShow(event.target.value);
  };

  const filterByLanguage = products.filter((product) => {
    return product.language === locale && product.maincategory === show;
  });
  const groupedByCategory = filterByLanguage.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, []);

  const groupedArray = Object.entries(groupedByCategory);

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
      {groupedArray.map(([category, productList]) => (
        <ItemContainer key={category} title={category}>
          {productList.map((product) => (
            <Itemsito key={product.id}>{product}</Itemsito>
          ))}
        </ItemContainer>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const products = await api.list();
  return {
    props: {
      products,
    },
  };
};
