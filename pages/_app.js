import "../styles/globals.css";
import Layout from "../components/layouts/main";
import {appWithTranslation} from "next-i18next"

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
