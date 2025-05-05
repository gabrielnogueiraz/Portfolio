// src/components/Projects/index.tsx
import React from 'react';
import {
  ProjectsSection,
  SectionTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImg,
  ProjectContent,
  ProjectTags,
  ProjectTag,
  ProjectLinks
} from './styles';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: 'Painel Forms Indica',
    description: 'Sistema integrado com Google Sheets e Google Drive para automação e monitoramento de processos contábeis.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'TypeScript', 'Google API'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Painel de Certificados',
    description: 'Sistema de gestão de vencimentos com envio automático de e-mails para controle de certificados.',
    image: '/api/placeholder/600/400',
    tags: ['Node.js', 'PostgreSQL', 'Email API'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Integração Questor API',
    description: 'Implementação de integrações com a API do sistema Questor para automação de processos contábeis.',
    image: '/api/placeholder/600/400',
    tags: ['TypeScript', 'Node.js', 'REST API'],
    demoLink: '#',
    githubLink: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionTitle>Projetos</SectionTitle>
        <ProjectsGrid>
          {projectsData.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImg>
                <img src={project.image} alt={project.title} />
              </ProjectImg>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
};

export default Projects;