import { useEffect, useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const breakpoint = {
  mobile: '414px',
  tablet: '768px',
  desktop: '1440px',
};

const ThemeToggler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 325px;
  position: absolute;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  .toggle-wrapper {
    background-color: #e8e8e8;
    border-radius: 2rem;
  }
  .light,
  .dark {
    padding: 1rem;
  }
  .on {
    padding: 1rem;
    background-color: #d2d2d2;
    border-radius: 50%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
  min-width: 325px;
  &.light-theme {
    background-color: #f5f5f7;
  }
  &.dark-theme {
    background-color: #222222;
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
    display: grid;
    grid-template-columns: 325px 325px;
    column-gap: 2rem;
    justify-content: center;
  }
  @media screen and (min-width: ${breakpoint.desktop}) {
    display: grid;
    grid-template-columns: repeat(3, 325px);
    column-gap: 2rem;
    justify-content: center;
  }
`;

export default function CardPageLayout({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const handleClick = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <>
      <ThemeToggler>
        <div className="toggle-wrapper">
          <span className={`light ${!isDark ? 'on' : ''}`} onClick={handleClick}>
            ☀️
          </span>
          <span className={`dark  ${isDark ? 'on' : ''}`} onClick={handleClick}>
            🌜
          </span>
        </div>
      </ThemeToggler>
      <Container
        className={`card-page container ${isDark ? 'dark-theme' : 'light-theme'}`}
      >
        {children}
      </Container>
    </>
  );
}

CardPageLayout.propTypes = {
  children: propTypes.object.isRequired,
};
