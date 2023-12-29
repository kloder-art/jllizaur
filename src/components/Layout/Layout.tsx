import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Go2Top } from '../Go2Top';
import '../../styles/styles.scss';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header title={title} />
      <main>{children}</main>
      <Footer title={title} />
      <Go2Top />
    </>
  );
};
