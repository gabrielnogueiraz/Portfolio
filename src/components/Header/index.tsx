import React, { useState } from 'react';
import { HeaderContainer, HeaderContent, Logo, NavLinks, MobileMenu } from './styles';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
          <Logo>
            <a href="#home">Gabriel Nogueira</a>
          </Logo>
          <NavLinks isOpen={isMenuOpen}>
            <a href="#home" onClick={handleNavLinkClick}>Home</a>
            <a href="#about" onClick={handleNavLinkClick}>Sobre</a>
            <a href="#skills" onClick={handleNavLinkClick}>Habilidades</a>
            <a href="#experience" onClick={handleNavLinkClick}>Experiência</a>
            <a href="#projects" onClick={handleNavLinkClick}>Projetos</a>
            <a href="#contact" onClick={handleNavLinkClick}>Contato</a>
          </NavLinks>
          <MobileMenu onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </MobileMenu>
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};

export default Header;