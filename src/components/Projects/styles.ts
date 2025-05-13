import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: ${(props) => props.theme.background};
  transition: var(--transition);
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  color: ${(props) => props.theme.text};
  transition: var(--transition);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
  }

  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const ProjectCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.cardBackground};
  transition: var(--transition);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const ProjectImg = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.15);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.08);
  }
`;

export const ProjectImgCarousel = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.5s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.08);
  }
`;

export const CarouselControls = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  z-index: 3;

  &.modal-controls {
    padding: 0 20px;
  }
`;

export const CarouselButton = styled.button`
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  &.prev {
    margin-right: auto;
  }

  &.next {
    margin-left: auto;
  }

  .modal-controls & {
    width: 40px;
    height: 40px;
    font-size: 22px;
  }
`;

// Pontos indicadores para o carrossel
export const CarouselDots = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 3;

  &.modal-dots {
    bottom: -30px;
  }
`;

export const CarouselDot = styled.button<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: ${(props) =>
    props.active ? "white" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: white;
    transform: scale(1.2);
  }

  .modal-dots & {
    width: 10px;
    height: 10px;
  }
`;

export const ProjectCompanyBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 20px;
  z-index: 2;
  font-weight: 500;
  backdrop-filter: blur(4px);
`;

export const ProjectContent = styled.div`
  padding: 20px;

  h3 {
    margin-bottom: 10px;
    color: ${(props) => props.theme.text};
    font-size: 20px;
    transition: var(--transition);
  }

  p {
    color: ${(props) => props.theme.lightText};
    margin-bottom: 15px;
    font-size: 15px;
    line-height: 1.5;
    transition: var(--transition);
  }
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
`;

export const ProjectTag = styled.span`
  background-color: ${(props) => props.theme.tagBackground};
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 13px;
  color: ${(props) => props.theme.tagText};
  font-weight: 500;
  transition: var(--transition);
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 5px;

  a {
    color: var(--primary-color);
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  .unavailable {
    color: ${(props) => props.theme.mutedText};
    font-style: italic;
    font-size: 14px;
    cursor: default;
  }
`;

// Componentes para o modal
export const Modal = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 30px;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  position: relative;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -20px;
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  z-index: 1010;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
  object-fit: contain;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;
