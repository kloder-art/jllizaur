import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>404: No encontrado...</h1>
      <p>El contenido que estás buscando no existe, lo sentimos.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
