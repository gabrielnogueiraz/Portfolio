// src/components/Contact/styles.ts
import styled from 'styled-components';

export const ContactSection = styled.section`
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

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: flex-start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  p {
    margin-bottom: 20px;
    color: var(--light-text);
  }
`;

export const ContactDetails = styled.div`
  margin-top: 30px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  h4 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 0;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const ContactForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);

  .dark-mode & {
    background-color: #1e1e1e;
    color: white;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormControl = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 16px;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  .dark-mode & {
    background-color: #333;
    border-color: #444;
    color: white;
  }

  &[as="textarea"] {
    resize: vertical;
    min-height: 150px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 500;
  transition: var(--transition);
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 119, 255, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;


// ...existing code...

// Adicione ao final do arquivo
export const FormStatus = styled.div<{ isError: boolean }>`
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 6px;
  text-align: center;
  background-color: ${(props) => (props.isError ? "#ffebee" : "#e8f5e9")};
  color: ${(props) => (props.isError ? "#c62828" : "#2e7d32")};
  border: 1px solid ${(props) => (props.isError ? "#ef9a9a" : "#a5d6a7")};
  font-weight: 500;
`;