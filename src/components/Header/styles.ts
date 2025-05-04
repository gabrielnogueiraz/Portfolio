import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 40px 0;
  position: relative;
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
    color: var(--dark-color);
  }
`;

interface NavLinksProps {
  isOpen: boolean;
}

export const NavLinks = styled.nav<NavLinksProps>`
  display: flex;
  gap: 30px;

  a {
    color: var(--text-color);
    font-weight: 500;
    position: relative;

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
    background-color: white;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    z-index: 10;

    .dark-mode & {
      background-color: var(--dark-color);
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
