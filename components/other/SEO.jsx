import React from "react";
import Head from "next/head";

export default function SEO({ description, title, image, location }) {
  const defaultDescription = "My personal site, have a gander";
  const defaultImageURL = "/logo.png";

  const metaDescription = description || defaultDescription;
  const metaImage = image || defaultImageURL;
  const url = location ? "https://ryangregory.dev" + location.pathname : "https://ryangregory.dev";

  return (
    <Head>
      <title> {title} | ryangregory.dev</title>

      <meta name="title" content={`${title} | ryangregory.dev`} />
      <meta name="description" content={metaDescription} />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title} | ryangregory.dev`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="ryangregory.dev" />
      <meta name="twitter:title" content={`${title} | ryangregory.dev`} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      <meta name="apple-mobile-web-app-title" content="ryangregory.dev" />
      <meta name="application-name" content="ryangregory.dev" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Personal Website for Ryan Gregory" />
      <meta charSet="utf-8" />

      <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <script src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"></script>
      <script src="https://unpkg.com/smoothscroll-anchor-polyfill"></script>

      <html lang="en" />
    </Head>
  );
}
