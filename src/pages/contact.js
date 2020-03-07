import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';

const StyledContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    display: block;
  }
`;

const ContactPage = () => (
  <Layout>
    <SEO title={'Contacto'} />
    <Container>
      <StyledContact>
        <div>
          <span className="title">Estudio (Academia ATC)</span>
          <a
            href="https://goo.gl/maps/cS2BXf6Pmno"
            target="_blank"
            rel="noopener noreferrer"
          >
            C/ Altamira, 54. Bajo, dx. 04005. Almería. España.
          </a>
          <span className="title">Correo electrónico:</span>
          <a href="mailto:javierlopezlizaur15@gmail.com">
            javierlopezlizaur15@gmail.com
          </a>
          <span className="title">Teléfono</span>
          <a href="tel:670653878">670 88 44 15</a>
        </div>
        <div>
          <span className="title">Gestora de arte</span>Sol Úbeda (
          <a href="mailto:solubeda@gmail.com">solubeda@gmail.com</a>)
          <span className="title">Desarrollo Web</span>Javier López Úbeda (
          <a href="mailto:jlopezcur@gmail.com">jlopezcur@gmail.com</a>)
        </div>
      </StyledContact>
    </Container>
  </Layout>
);

export default ContactPage;
