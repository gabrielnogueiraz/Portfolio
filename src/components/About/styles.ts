import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 100px 0;
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

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutText = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
    color: var(--light-text);
  }
`;

export const AboutImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 992px) {
    order: -1;
    max-width: 500px;
    margin: 0 auto;
  }
`;