// src/components/Experience/styles.ts
import styled from "styled-components";

export const ExperienceSection = styled.section`
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
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    background-color: #e0e0e0;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }

  @media (max-width: 768px) {
    &::after {
      left: 31px;
    }
  }
`;

export const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background-color: var(--light-color);
    border: 4px solid var(--primary-color);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &.left {
    left: 0;
  }

  &.right {
    left: 50%;
  }

  &.right::after {
    left: -10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;

    &::after {
      left: 22px;
    }

    &.right {
      left: 0;
    }
  }
`;

export const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);

  h3 {
    margin-bottom: 10px;
  }

  p {
    color: var(--light-text);
  }

  .dark-mode & {
    background-color: #1e1e1e;
    color: white;
  }
`;

export const TimelineDate = styled.div`
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 5px;
`;
