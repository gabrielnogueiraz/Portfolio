import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cascadia+Code:wght@400;500;600;700&display=swap');

  :root {
    --primary-color: #0077ff;
    --dark-color: #121212;
    --light-color: #f8f8f8;
    --text-color: #333;
    --light-text: #888;
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cascadia Code', monospace;
  }

  body {
    background-color: var(--light-color);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
  }

  a:hover {
    opacity: 0.8;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Dark Mode */
  body.dark-mode {
    background-color: var(--dark-color);
    color: white;
  }

  .dark-mode .logo a,
  .dark-mode .nav-links a {
    color: white;
  }

  .dark-mode .skill-card,
  .dark-mode .timeline-content,
  .dark-mode .contact-form,
  .dark-mode .project-card {
    background-color: #1e1e1e;
    color: white;
  }

  .dark-mode .timeline::after {
    background-color: #333;
  }

  .dark-mode .project-tag {
    background-color: #333;
    color: #ddd;
  }

  .dark-mode .skills,
  .dark-mode .projects {
    background-color: #121212;
  }

  .dark-mode .form-control {
    background-color: #333;
    border-color: #444;
    color: white;
  }

  /* Responsive */
  @media (max-width: 992px) {
    .about-content,
    .contact-content {
      grid-template-columns: 1fr;
    }

    .about-image {
      order: -1;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .mobile-menu {
      display: block;
    }

    .timeline::after {
      left: 31px;
    }

    .timeline-item {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }

    .timeline-item::after {
      left: 22px;
    }

    .right {
      left: 0;
    }
  }

  @media (max-width: 576px) {
    .section-title {
      font-size: 28px;
    }
  }
`;

export default GlobalStyles;
