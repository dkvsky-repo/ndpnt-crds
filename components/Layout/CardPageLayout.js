import styled from 'styled-components';
import propTypes from 'prop-types';

const breakpoint = {
  mobile: '414px',
  tablet: '768px',
  desktop: '1440px',
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: grid;
    grid-template-columns: 325px 325px;
    column-gap: 2rem;
    justify-content: center;
    margin-left: 43px;
    margin-right: 43px;
  }
  @media screen and (min-width: ${breakpoint.desktop}) {
    display: grid;
    grid-template-columns: repeat(3, 325px);
    column-gap: 2rem;
    justify-content: center;
    margin-left: 43px;
    margin-right: 43px;
  }
`;

export default function CardPageLayout({ children }) {
  return <Container>{children}</Container>;
}

CardPageLayout.propTypes = {
  children: propTypes.object.isRequired,
};
