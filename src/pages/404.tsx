import * as React from 'react';

import { Layout, Container, SEO } from '../components';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>404: No encontrado...</h1>
      <p>El contenido que estás buscando no existe, lo sentimos.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;

export const Head = () => <SEO title="404: No encontrado..." />;
