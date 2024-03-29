import React from 'react';

import { Layout, Container, SEO } from '../components';

import years from '../../data/static/cv';

const CVPage = () => (
  <Layout>
    <Container>
      <h4>ALGECIRAS. 1959.</h4>
      Historiador de Arte, especializado en Arte Contemporáneo, Universidad de
      Granada. Especialidades de Diseño Gráfico por la Escuela de Arte de
      Sevilla y Talla en Piedra por la Escuela de Arte de Almería. Realiza
      estudios de Bellas Artes en Santa Isabel de Hungría, Sevilla y en la
      Facultad de Periodismo también de Sevilla. Lleva 20 años viviendo en
      Almería
      <br />
      <br />
      <ul>
        {years.map((x, idx) => (
          <li key={idx}>
            <strong>{x.year}:</strong>
            &nbsp;
            {x.text}
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
);

export default CVPage;

export const Head = () => <SEO title="CV" />;
