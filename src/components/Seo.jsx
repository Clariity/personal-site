import React from "react";
import Helmet from "react-helmet";

const SEO = ({ description, title, image, location }) => {
  const defaultDescription = "My person site, have a gander";
  const defaultImageURL = "./logo192.png";

  const metaDescription = description || defaultDescription;
  const metaImage = image || defaultImageURL;
  const url = location
    ? "https://ryangregory.dev" + location.pathname
    : "https://ryangregory.dev";

  return (
    <Helmet>
      <title>ryangregory.dev | {title}</title>

      <meta name="title" content={`ryangregory.dev | ${title}`} />
      <meta name="description" content={metaDescription} />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`ryangregory.dev | ${title}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="ryangregory.dev" />
      <meta name="twitter:title" content={`ryangregory.dev | ${title}`} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
