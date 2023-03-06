import Router from "next/router";
import NProgress from "nprogress";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/normalize.css";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import "react-image-gallery/styles/css/image-gallery.css";

NProgress.configure({
  minimum: 0.5,
  easing: "ease",
  speed: 500,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
