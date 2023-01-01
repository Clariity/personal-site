import Script from "next/script";
import type { AppProps } from "next/app";

import { Container } from "../components/utils/Container";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center lg:min-h-[90vh]">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_MEASUREMENT_ID}');`}
      </Script>
      <Container>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </div>
  );
}

export default MyApp;
