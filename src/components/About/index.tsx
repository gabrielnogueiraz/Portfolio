import React from "react";
import {
  AboutSection,
  SectionTitle,
  AboutContent,
  AboutText,
  ResumeButton,
} from "./styles";

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <SectionTitle>Sobre mim</SectionTitle>
        <AboutContent>
          <AboutText>
            <h3>Desenvolvedor FullStack com foco em resultado e performance</h3>
            <p>
              Sou desenvolvedor fullstack com experiência sólida em criação de
              sistemas internos e ferramentas web que impactam diretamente a
              produtividade de equipes. Tenho domínio em Node.js, TypeScript,
              React e PostgreSQL, atuando desde a concepção da ideia até o
              deploy completo em produção. Atualmente desenvolvo soluções para a
              Indica Assessoria Empresarial, onde lidero projetos que
              automatizam e modernizam processos antes totalmente manuais. Busco
              oportunidades para aplicar meu conhecimento técnico em ambientes
              desafiadores, com foco em performance, confiabilidade e entrega
              real de valor.
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

            <ResumeButton
              href="/Curriculo_pdf.pdf"
              download="Curriculo_Gabriel_Nogueira.pdf"
              target="_blank"
            >
              <span>Download Currículo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </ResumeButton>
          </AboutText>
        </AboutContent>
      </div>
    </AboutSection>
  );
};

export default About;
