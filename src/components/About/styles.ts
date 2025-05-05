import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 100px 0;
  background-color: ${props => props.theme.background};
  transition: var(--transition);
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  color: ${props => props.theme.text};
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

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const AboutText = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: ${props => props.theme.text};
    transition: var(--transition);
  }

  p {
    margin-bottom: 20px;
    color: ${props => props.theme.lightText};
    font-size: 16px;
    line-height: 1.8;
    transition: var(--transition);
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: 600;
  margin-top: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 119, 255, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 119, 255, 0.3);
    opacity: 1;
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(0, 119, 255, 0.2);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateY(2px);
  }
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;