import "../styles/globals.css";
import Layout from "../components/layouts/main";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
