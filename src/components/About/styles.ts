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