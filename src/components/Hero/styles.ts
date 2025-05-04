import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

export const HeroContent = styled.div`
  max-width: 700px;

  h1 {
    font-size: 56px;
    line-height: 1.2;
    margin-bottom: 20px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 36px;
    }

    @media (max-width: 576px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 20px;
    margin-bottom: 30px;
    color: var(--light-text);

    @media (max-width: 576px) {
      font-size: 18px;
    }
  }
`;

export const Highlight = styled.span`
  color: var(--primary-color);
`;

export const HeroButtons = styled.div`
  .button {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 500;
    transition: var(--transition);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 119, 255, 0.2);
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 40px;

  a {
    color: var(--light-text);
    transition: var(--transition);

    &:hover {
      color: var(--primary-color);
    }
  }
`;