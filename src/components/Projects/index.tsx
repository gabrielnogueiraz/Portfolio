import React, { useState } from "react";
import { Project } from "../../types";
import {
  ProjectsSection,
  SectionTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImg,
  ProjectContent,
  ProjectTags,
  ProjectTag,
  ProjectLinks,
  ProjectCompanyBadge,
  Modal,
  ModalContent,
  CloseButton,
  ModalImage,
  CarouselControls,
  CarouselButton,
  CarouselDots,
  CarouselDot,
  ProjectImgCarousel,
} from "./styles";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Pomodoro Tasks",
    description:
      "PomodoroTasks Um gerenciador de tarefas com timer Pomodoro integrado, projetado para aumentar sua produtividade através do método Pomodoro e também do método Kanban uma abordagem visual e ágil para gerenciar tarefas e fluxos de trabalho.",
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/401",
      "/api/placeholder/600/402",
    ],
    tags: ["React", "TypeScript", "Node.js", "SQLite"],
    isCorporate: false,
    demoLink: "https://pomodoro-tasks-frontend.vercel.app/",
    githubLink: "https://github.com/gabrielnogueiraz/PomodoroTasks-Frontend",
  },
  {
    id: 2,
    title: "Painel de Certificados",
    description:
      "Sistema de gestão de vencimentos com envio automático de e-mails para controle de certificados.",
    images: [
      "/images/painel-certificados.png",
    ],
    tags: ["Node.js", "PostgreSQL", "Typescript", "Google Sheets API"],
    isCorporate: true,
  },
  {
    id: 3,
    title: "Integração Questor API",
    description:
      "Implementação de integrações com a API do sistema Questor para automação de processos contábeis.",
    images: ["/api/placeholder/600/400"],
    tags: ["TypeScript", "Node.js", "REST API"],
    isCorporate: true,
  },
];

const Projects: React.FC = () => {
  // Estado para o modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Estados para os carrosséis dos cards
  const [cardHoverStates, setCardHoverStates] = useState<{
    [key: number]: boolean;
  }>({});
  const [cardImageIndexes, setCardImageIndexes] = useState<{
    [key: number]: number;
  }>({});

  // Funções para o modal
  const openModal = (project: Project, initialImageIndex: number = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(initialImageIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  // Funções para os carrosséis dos cards
  const handleCardMouseEnter = (projectId: number) => {
    setCardHoverStates((prev) => ({ ...prev, [projectId]: true }));
  };

  const handleCardMouseLeave = (projectId: number) => {
    setCardHoverStates((prev) => ({ ...prev, [projectId]: false }));
  };

  const nextCardImage = (
    e: React.MouseEvent,
    projectId: number,
    projectImages: string[]
  ) => {
    e.stopPropagation();
    setCardImageIndexes((prev) => ({
      ...prev,
      [projectId]:
        prev[projectId] === projectImages.length - 1
          ? 0
          : (prev[projectId] || 0) + 1,
    }));
  };

  const prevCardImage = (
    e: React.MouseEvent,
    projectId: number,
    projectImages: string[]
  ) => {
    e.stopPropagation();
    setCardImageIndexes((prev) => ({
      ...prev,
      [projectId]:
        prev[projectId] === 0
          ? projectImages.length - 1
          : (prev[projectId] || 0) - 1,
    }));
  };

  const goToCardImage = (projectId: number, index: number) => {
    setCardImageIndexes((prev) => ({ ...prev, [projectId]: index }));
  };

  // Obter o índice atual da imagem para um card
  const getCurrentCardImageIndex = (projectId: number) => {
    return cardImageIndexes[projectId] || 0;
  };

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionTitle>Projetos</SectionTitle>
        <ProjectsGrid>
          {projectsData.map((project) => {
            const currentCardImageIndex = getCurrentCardImageIndex(project.id);
            const isHovering = cardHoverStates[project.id] || false;
            const hasMultipleImages = project.images.length > 1;

            return (
              <ProjectCard key={project.id}>
                <ProjectImg
                  onMouseEnter={() => handleCardMouseEnter(project.id)}
                  onMouseLeave={() => handleCardMouseLeave(project.id)}
                  onClick={() => openModal(project, currentCardImageIndex)}
                >
                  <ProjectImgCarousel>
                    {project.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${project.title} - Imagem ${idx + 1}`}
                        style={{
                          opacity: idx === currentCardImageIndex ? 1 : 0,
                          zIndex: idx === currentCardImageIndex ? 2 : 1,
                        }}
                      />
                    ))}
                  </ProjectImgCarousel>

                  {project.isCorporate && (
                    <ProjectCompanyBadge>
                      Projeto Corporativo
                    </ProjectCompanyBadge>
                  )}

                  {/* Controles do carrossel (apenas visíveis no hover e se houver múltiplas imagens) */}
                  {hasMultipleImages && isHovering && (
                    <CarouselControls>
                      <CarouselButton
                        onClick={(e) =>
                          prevCardImage(e, project.id, project.images)
                        }
                        className="prev"
                      >
                        &#10094;
                      </CarouselButton>
                      <CarouselButton
                        onClick={(e) =>
                          nextCardImage(e, project.id, project.images)
                        }
                        className="next"
                      >
                        &#10095;
                      </CarouselButton>
                    </CarouselControls>
                  )}

                  {/* Pontos indicadores do carrossel */}
                  {hasMultipleImages && (
                    <CarouselDots>
                      {project.images.map((_, idx) => (
                        <CarouselDot
                          key={idx}
                          active={idx === currentCardImageIndex}
                          onClick={(e) => {
                            e.stopPropagation();
                            goToCardImage(project.id, idx);
                          }}
                        />
                      ))}
                    </CarouselDots>
                  )}
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
                    {project.demoLink ? (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    ) : project.isCorporate ? (
                      <span className="unavailable">Demo indisponível</span>
                    ) : null}

                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    ) : project.isCorporate ? (
                      <span className="unavailable">Código privado</span>
                    ) : null}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            );
          })}
        </ProjectsGrid>
      </div>

      {/* Modal para visualização das imagens */}
      {selectedProject && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalImage
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} - Imagem ${currentImageIndex + 1}`}
            />

            {/* Controles do carrossel modal */}
            {selectedProject.images.length > 1 && (
              <>
                <CarouselControls className="modal-controls">
                  <CarouselButton onClick={prevImage} className="prev">
                    &#10094;
                  </CarouselButton>
                  <CarouselButton onClick={nextImage} className="next">
                    &#10095;
                  </CarouselButton>
                </CarouselControls>

                <CarouselDots className="modal-dots">
                  {selectedProject.images.map((_, idx) => (
                    <CarouselDot
                      key={idx}
                      active={idx === currentImageIndex}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                    />
                  ))}
                </CarouselDots>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </ProjectsSection>
  );
};

export default Projects;
