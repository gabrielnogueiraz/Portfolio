import React from 'react';
import { AboutSection, SectionTitle, AboutContent, AboutText, AboutImage } from './styles';

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <SectionTitle>Sobre mim</SectionTitle>
        <AboutContent>
          <AboutText>
            <h3>Desenvolvedor FullStack com foco em resultado e performance</h3>
            <p>
              Olá! Sou Gabriel Nogueira, Desenvolvedor FullStack com experiência
              prática em React, TypeScript, Node e PostgreSQL, atuando no
              desenvolvimento de software na Indica Assessoria Empresarial.
            </p>
            <p>
              Atualmente estou cursando Análise e Desenvolvimento de Sistemas e
              busco aplicar e expandir minhas habilidades técnicas em projetos
              desafiadores, contribuindo para o desenvolvimento de soluções
              robustas e eficientes.
            </p>
            <p>
              Minha experiência inclui o desenvolvimento de soluções completas,
              integrações com APIs e automatização de processos. Tenho
              capacidade para conduzir todo o ciclo de desenvolvimento, desde o
              levantamento de requisitos até o deploy das aplicações.
            </p>
          </AboutText>
          <AboutImage>
            <img src="/api/placeholder/500/500" alt="Gabriel Nogueira" />
          </AboutImage>
        </AboutContent>
      </div>
    </AboutSection>
  );
};

export default About;