import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaGlobe, FaFacebook, FaFacebookF } from 'react-icons/fa';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import ExternalLink from '../components/ExternalLink';

const StyledContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 490px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

const StyledBlock = styled.div`
  margin-bottom: 2rem;
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    display: block;
    &:first-child {
      margin-top: 0;
    }
  }
  p {
    margin-bottom: 0.5rem;
  }
`;

const ContactPage = () => (
  <Layout>
    <SEO title={'Contacto'} />
    <Container>
      <StyledContact>
        <div>
          <StyledBlock>
            <span className="title">
              Estudio (Javier López Lizaur Academia)
            </span>
            <p>
              <ExternalLink href="https://www.instagram.com/jllizauracademia/">
                <FaInstagram />
              </ExternalLink>
              &nbsp;
              <ExternalLink href="https://www.facebook.com/AtcAcademiaArte">
                <FaFacebookF />
              </ExternalLink>
              &nbsp;
              <ExternalLink href="https://academia.jllizaur.art">
                <FaGlobe />
              </ExternalLink>
            </p>
            <p>
              <ExternalLink href="https://goo.gl/maps/cS2BXf6Pmno">
                C/ Altamira, 54. Bajo, dx. 04005. Almería. España.
              </ExternalLink>
            </p>
          </StyledBlock>
          <StyledBlock>
            <span className="title">Correo electrónico:</span>
            <a href="mailto:javierlopezlizaur15@gmail.com">
              javierlopezlizaur15@gmail.com
            </a>
          </StyledBlock>
          <StyledBlock>
            <span className="title">Teléfono</span>
            <a href="tel:+34670653878">+34 670 88 44 15</a>
          </StyledBlock>
        </div>
        <div>
          <StyledBlock>
            <span className="title">Gestora de arte</span>Maribel Úbeda (
            <a href="mailto:maribel.ubeda@gmail.com">maribel.ubeda@gmail.com</a>
            )
          </StyledBlock>
          <StyledBlock>
            <span className="title">Desarrollo Web</span>Javier López Úbeda (
            <a href="mailto:jlopezcur@gmail.com">jlopezcur@gmail.com</a>)
          </StyledBlock>
        </div>
      </StyledContact>
    </Container>
  </Layout>
);

export default ContactPage;
