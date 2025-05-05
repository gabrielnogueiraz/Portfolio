import React from 'react';
import { SkillsSection, SectionTitle, SkillsContent, SkillCard, SkillIcon } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faNodeJs 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faTools 
} from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <div className="container">
        <SectionTitle>Habilidades</SectionTitle>
        <SkillsContent>
          <SkillCard>
            <SkillIcon>
              <FontAwesomeIcon icon={faReact} />
            </SkillIcon>
            <h3>Frontend</h3>
            <p>React, TypeScript, Next.js, HTML5, CSS3, JavaScript</p>
          </SkillCard>
          <SkillCard>
            <SkillIcon>
              <FontAwesomeIcon icon={faNodeJs} />
            </SkillIcon>
            <h3>Backend</h3>
            <p>Node.js, Java, Ruby, Express, RESTful APIs</p>
          </SkillCard>
          <SkillCard>
            <SkillIcon>
              <FontAwesomeIcon icon={faDatabase} />
            </SkillIcon>
            <h3>Bancos de Dados</h3>
            <p>PostgreSQL, Firebase, SQLite, MongoDB</p>
          </SkillCard>
          <SkillCard>
            <SkillIcon>
              <FontAwesomeIcon icon={faTools} />
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