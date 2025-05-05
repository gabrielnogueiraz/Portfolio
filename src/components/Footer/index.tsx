import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { 
  FooterContainer, 
  FooterContent, 
  FooterColumn, 
  ColumnTitle, 
  FooterLinks, 
  FooterSocial, 
  SocialLink, 
  Copyright 
} from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterColumn>
            <ColumnTitle>Gabriel Nogueira</ColumnTitle>
            <p>
              Desenvolvedor FullStack com foco em React, TypeScript, Node e
              PostgreSQL, criando soluções robustas e eficientes.
            </p>
            <FooterSocial>
              <SocialLink href="https://github.com/gabrielnogueiraz" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/gabrielnogueiraz" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </SocialLink>
              <SocialLink href="mailto:gabriel.nogueira00810@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
              </SocialLink>
            </FooterSocial>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Links</ColumnTitle>
            <FooterLinks>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#experience">Experiência</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Formação</ColumnTitle>
            <FooterLinks>
              <li><a href="#">Análise e Desenvolvimento de Sistemas</a></li>
              <li><a href="#">Desenvolvedor Javascript - OneBitCode</a></li>
              <li><a href="#">CS50 - Harvard</a></li>
              <li><a href="#">React.js e Next.js</a></li>
              <li><a href="#">Boa Vizinhança - Língua Inglesa</a></li>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>
        
        <Copyright>
          <p>&copy; {new Date().getFullYear()} Gabriel Nogueira. Todos os direitos reservados.</p>
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;