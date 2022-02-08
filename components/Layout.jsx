import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>Tomytex - {page}</title>
        <meta name="description" content="App de guitarras" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
