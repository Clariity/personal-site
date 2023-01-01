import Head from "next/head";

interface SEOProps {
  description?: string;
  imageURL?: string;
  pathname?: string;
  title: string;
}

export function SEO({ description, imageURL, pathname, title }: SEOProps) {
  const joinedTitle = `${title} • ryangregory.dev`;
  const defaultDescription =
    "Hi I'm Ryan, this is my personal site. It details my experience, education and projects I have worked on.";
  const defaultImageURL = "/logos/logo.png";

  const metaDescription = description || defaultDescription;
  const metaImage = imageURL || defaultImageURL;
  const url = "https://ryangregory.dev" + (pathname || "");

  return (
    <Head>
      <title>{joinedTitle}</title>

      <meta name="title" content={joinedTitle} />
      <meta name="description" content={metaDescription} />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={joinedTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="ryangregory.dev" />
      <meta name="twitter:title" content={joinedTitle} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      <meta name="apple-mobile-web-app-title" content="ryangregory.dev" />
      <meta name="application-name" content="ryangregory.dev" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <link rel="icon" href="/logos/favicon.ico" />
      <link rel="apple-touch-icon" sizes="144x144" href="/logos/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logos/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logos/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/logos/safari-pinned-tab.svg" color="#000000" />
    </Head>
  );
}
