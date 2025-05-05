// src/components/Contact/index.tsx
import React, { useState, FormEvent } from 'react';
import {
  ContactSection,
  SectionTitle,
  ContactContent,
  ContactInfo,
  ContactDetails,
  ContactItem,
  ContactIcon,
  ContactForm,
  FormGroup,
  FormControl,
  Button
} from './styles';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio do formulário
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <ContactSection id="contact">
      <div className="container">
        <SectionTitle>Contato</SectionTitle>
        <ContactContent>
          <ContactInfo>
            <p>
              Interessado em trabalhar juntos? Estou sempre aberto a discutir
              novos projetos, ideias criativas ou oportunidades para fazer parte
              da sua equipe.
            </p>
            <ContactDetails>
              <ContactItem>
                <ContactIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </ContactIcon>
                <div>
                  <h4>Email</h4>
                  <p>gabriel.nogueira00810@gmail.com</p>
                </div>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </ContactIcon>
                <div>
                  <h4>Localização</h4>
                  <p>Juiz de Fora, Minas Gerais, Brasil</p>
                </div>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </ContactIcon>
                <div>
                  <h4>LinkedIn</h4>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/gabrielnogueiraz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/gabrielnogueiraz
                    </a>
                  </p>
                </div>
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormControl
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="text"
                name="subject"
                placeholder="Assunto"
                value={formData.subject}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                as="textarea"
                name="message"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </ContactForm>
        </ContactContent>
      </div>
    </ContactSection>
  );
};

export default Contact;