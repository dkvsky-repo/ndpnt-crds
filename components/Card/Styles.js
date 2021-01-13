import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  width: 325px;
  margin-bottom: 2rem;
  transition: transform 0.5s;
  transition-timing-function: ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CardMedia = styled.div``;

export const CardDetails = styled.div`
  padding: 0.5rem 0.5rem 1.5rem;
  .card-heading {
    border-bottom: solid 1px #e0e0e0;
    padding-bottom: 8px;
    margin-bottom: 16px;
    &__title {
      font-size: var(--fs-lg);
      font-weight: var(--fw-semi-bold);
      line-height: 24px;
    }
    &__text {
      font-size: var(--fs-md);
    }
  }
  .card-body {
    display: grid;
    grid-template-columns: 64px 1fr;
    column-gap: 1rem;
    row-gap: 0.5rem;
    font-size: var(--fs-sm);
    &__data-heading {
      font-weight: var(--fw-semi-bold);
    }
    &__data-content {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;
