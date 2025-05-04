import styled from 'styled-components';

export const SkillsSection = styled.section`
  padding: 100px 0;
  background-color: white;
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

export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

export const SkillCard = styled.div`
  background-color: var(--light-color);
  border-radius: 10px;
  padding: 30px;
  transition: var(--transition);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  p {
    color: var(--light-text);
  }
`;

export const SkillIcon = styled.div`
  font-size: 40px;
  color: var(--primary-color);
  margin-bottom: 20px;
`;