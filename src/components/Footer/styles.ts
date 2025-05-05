import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--dark-color);
  color: white;
  padding: 50px 0 20px;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

export const FooterColumn = styled.div`
  p {
    margin-bottom: 20px;
    color: #bbb;
  }
`;

export const ColumnTitle = styled.h3`
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 2px;
    background-color: var(--primary-color);
  }
`;

export const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    color: #bbb;
    transition: var(--transition);
    
    &:hover {
      color: white;
      padding-left: 5px;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

export const SocialLink = styled.a`
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-5px);
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #bbb;
  font-size: 14px;
`;