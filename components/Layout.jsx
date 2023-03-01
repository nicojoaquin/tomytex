import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Página oficial de Tomytex - Especialista en telas deportivas y distribuidor de telas Modelo"
        />
        <meta
          name="keywords"
          content="tela, telas, TELA, TELAS, MODELO, modelo, TEXTIL, textil, deportivo, DEPORTIVO, deportivas, DEPORTIVAS, SET, MODAL, POLAR, set, modal, polar, distribuidor, telas deportivas, TELAS DEPORTIVAS, tomytex, TOMYTEX, ONCE, once "
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <title>Tomytex - {page}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
