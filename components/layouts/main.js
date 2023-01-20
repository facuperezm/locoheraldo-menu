import Head from "next/head";
import Footer from "../Footer";

const Main = ({ children }) => {
  return (
    <div className="text-greenLoco bg-back-image bg-no-repeat bg-cover bg-center bg-fixed font-Roboto">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Bienvenidos a la página web del bar El Loco Heraldo. Aquí podrás ver nuestra carta en inglés y español. Visitanos de miércoles a domingo"
        />
        <meta name="keywords" content="bar, restaurante, comida, bebida" />
        <meta name="author" content="El Loco Heraldo" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png"></link>
        <meta name="apple-mobile-web-app-status-bar" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="El Loco Heraldo" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta property="og:title" content="El Loco Heraldo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://el-loco-heraldo.vercel.app/" />
        <meta property="og:image" content="https://imgur.com/a/7GQODx9" />
        <title>Loco Heraldo</title>
      </Head>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
