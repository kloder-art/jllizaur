import * as React from 'react';

type Props = {
  title?: string;
  description?: string;
};

export const SEO: React.FC<Props> = ({ title, description }) => {
  const finalTitle = `${title ? `${title} | ` : ''}Javier López Lizaur`;
  const finalDescription =
    description ?? 'Javier López Lizaur Artist Portfolio';
  const author = 'Javier López Úbeda <jlopezcur@gmail.com>';
  return (
    <>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="og:title" content={finalTitle} />
      <meta name="og:description" content={finalDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
    </>
  );
};
