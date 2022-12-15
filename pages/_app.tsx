import type { AppProps } from "next/app";
import { Container } from "../components/utils/Container";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center lg:min-h-[90vh]">
      <Container>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </div>
  );
}

export default MyApp;
