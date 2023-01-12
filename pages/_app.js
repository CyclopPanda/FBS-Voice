import "../styles/globals.css";
import Nav from "../components/Nav"
import Content from "../components/Content";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );

}

export default MyApp;
