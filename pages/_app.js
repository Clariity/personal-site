import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <div className="fill-height-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
