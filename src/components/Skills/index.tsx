import React from 'react';
import { SkillsSection, SectionTitle, SkillsContent, SkillCard, SkillIcon } from './styles';

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <div className="container">
        <SectionTitle>Habilidades</SectionTitle>
        <SkillsContent>
          <SkillCard>
            <SkillIcon>
              <i className="fab fa-react"></i>
            </SkillIcon>
            <h3>Frontend</h3>
            <p>React, TypeScript, Next.js, HTML5, CSS3, JavaScript</p>
          </SkillCard>
          <SkillCard>
            <SkillIcon>
              <i className="fab fa-node-js"></i>
            </SkillIcon>
            <h3>Backend</h3>
            <p>Node.js, Java, Ruby, Express, RESTful APIs</p>
          </SkillCard>
          <SkillCard>
            <SkillIcon>
              <i className="fas fa-database"></i>
            </SkillIcon>
            <h3>Bancos de Dados</h3>
            <p>PostgreSQL, Firebird, SQLite</p>
          </SkillCard>
          <SkillCard>
            <SkillIcon>
              <i className="fas fa-tools"></i>
            </SkillIcon>
            <h3>DevOps & Ferramentas</h3>
            <p>Docker, Git, Metodologias Ágeis, Office 365</p>
          </SkillCard>
        </SkillsContent>
      </div>
    </SkillsSection>
  );
};

export default Skills;