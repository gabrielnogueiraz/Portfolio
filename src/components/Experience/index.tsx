// src/components/Experience/index.tsx
import React from "react";
import {
  ExperienceSection,
  SectionTitle,
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDate,
} from "./styles";

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  side: "left" | "right";
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    position: "Desenvolvedor FullStack Júnior",
    company: "Indica Assessoria Empresarial",
    period: "Maio 2025 - Atual",
    description:
      "Fui promovido a Desenvolvedor Fullstack Júnior na Indica após um estágio de destaque, no qual liderei projetos como o Painel Forms e o Painel de Certificados. Hoje, atuo no desenvolvimento e manutenção de sistemas internos, usando tecnologias como Node.js, TypeORM, React.js e TypeScript, além de colaborar no planejamento técnico e na melhoria de processos da empresa.",
    side: "right",
  },
  {
    id: 2,
    position: "Desenvolvedor de Software - Estagiário",
    company: "Indica Assessoria Empresarial",
    period: "Dezembro 2024 - Maio 2025",
    description:
      "Desenvolvimento de soluções internas para automação e monitoramento de processos contábeis. Criação e manutenção de sistemas completos, incluindo o Painel Forms Indica e o Painel de Certificados. Implementação de integrações com APIs usando Node.js, React.js, TypeScript, SQLite e PostgreSQL.",
    side: "left",
  },
  {
    id: 3,
    position: "Analista de Suporte de TI",
    company: "Grupo Cercred",
    period: "Julho 2024 - Dezembro 2024",
    description:
      "Suporte técnico a usuários, solucionando problemas de hardware e software. Manutenção em sistemas da Caixa Econômica Federal e gerenciamento de chamados via sistema HelpDesk.",
    side: "right",
  },
  {
    id: 4,
    position: "Analista de Contratos",
    company: "Grupo Cercred",
    period: "Março 2024 - Julho 2024",
    description:
      "Gerenciamento de contratos habitacionais da Caixa Econômica Federal, incluindo amortizações via FGTS e análise/correção de problemas contratuais. Suporte a clientes e negociação de dívidas.",
    side: "left",
  },
];

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
      <div className="container">
        <SectionTitle>Experiência</SectionTitle>
        <Timeline>
          {experienceData.map((item) => (
            <TimelineItem key={item.id} className={item.side}>
              <TimelineContent>
                <TimelineDate>{item.period}</TimelineDate>
                <h3>{item.position}</h3>
                <p>{item.company}</p>
                <p>{item.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
