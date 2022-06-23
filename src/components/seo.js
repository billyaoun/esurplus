import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Charitable company',
  author = 'William Aoun',
  meta,
  title = 'Charitable company',
}) {
  const metaData = [
    {
      name: `E-Surplus`,
      content: description,
    },
    {
      property: `esurplus`,
      content: title,
    },
    {
      property: `e-surplus`,
      content: description,
    },
    {
      property: `Esurplus`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
