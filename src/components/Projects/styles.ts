// src/components/Projects/styles.ts
import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: white;

  .dark-mode & {
    background-color: #121212;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;

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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

export const ProjectCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: var(--transition);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .dark-mode & {
    background-color: #1e1e1e;
    color: white;
  }
`;

export const ProjectImg = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

export const ProjectContent = styled.div`
  padding: 20px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    color: var(--light-text);
    margin-bottom: 15px;
  }
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

export const ProjectTag = styled.span`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 14px;
  color: var(--light-text);

  .dark-mode & {
    background-color: #333;
    color: #ddd;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: var(--primary-color);
    font-weight: 500;
  }
`;