import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 40px 0;
  position: relative;
  background-color: ${props => props.theme.header};
  transition: var(--transition);
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  a {
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.text};
    transition: var(--transition);
  }
`;

interface NavLinksProps {
  isOpen: boolean;
}

export const NavLinks = styled.nav<NavLinksProps>`
  display: flex;
  gap: 30px;

  a {
    color: ${props => props.theme.text};
    font-weight: 500;
    position: relative;
    transition: var(--transition);

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: var(--primary-color);
      transition: var(--transition);
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.card};
    padding: 20px;
    box-shadow: ${props => props.theme.shadow};
    z-index: 10;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  cursor: pointer;
  color: ${props => props.theme.text};
  transition: var(--transition);

  @media (max-width: 768px) {
    display: block;
  }
`;