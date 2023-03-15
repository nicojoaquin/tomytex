import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, page }) => {
  return (
    <div className="notranslate">
      <Head>
        <meta name="google" content="notranslate"></meta>
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
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
          integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
