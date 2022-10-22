import Head from "next/head";
// import Footer from "../Footer";

const Main = ({ children }) => {
  return (
    <div className="bg-back-image bg-no-repeat bg-cover bg-center bg-fixed font-Roboto flex justify-center">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>LocoHeraldo</title>
      </Head>
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
