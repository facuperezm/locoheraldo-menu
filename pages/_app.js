import "../styles/globals.css";
import Layout from "../components/layouts/main";
import { Roboto, Passion_One } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const passion_one = Passion_One({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-passion",
});

function MyApp({ Component, pageProps, router }) {
  return (
    <main className={`${passion_one.variable} font-sans ${roboto.variable}`}>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
