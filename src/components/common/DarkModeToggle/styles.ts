import styled from 'styled-components';

export const ToggleButton = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadow};
  z-index: 10;
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const MoonIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: transparent;
    box-shadow: inset -6px -2px 0 0 #fff;
  }
`;

export const SunIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    left: 7px;
    top: 7px;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid #fff;
    box-sizing: border-box;
    left: 0;
    top: 0;
  }
`;