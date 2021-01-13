import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { PICSUM_ENDPOINT } from './constants';

const CardWrapper = styled.div`
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
const CardMedia = styled.div``;

const CardDetails = styled.div`
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

export default function Card() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  // If it is okay to cache this data, NextJS offers better
  // alternatives, i.e. getStaticProps; to make the page/app
  // more performant.
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`${PICSUM_ENDPOINT}`);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data.map((item) => (
          <CardWrapper key={item.id}>
            <CardMedia>
              <Image
                src={item.download_url}
                width={326}
                height={112}
                objectFit="none"
                // arbitrary value to handle vertical images
                // it would be best to curate image orientation
                // but the API didn't seem to offer it
                objectPosition="center 65%"
                alt={`Photo by ${item.author}`}
              />
            </CardMedia>
            <CardDetails>
              <div className="card-heading">
                <p className="card-heading__title">Lorum Ipsom</p>
                <p className="card-heading__text">Lorum Ipsom</p>
              </div>
              <div className="card-body">
                <div className="card-body__data-heading">Author</div>
                <div className="card-body__data-content">{item.author}</div>
                <div className="card-body__data-heading">ID</div>
                <div className="card-body__data-content">{item.id}</div>
                <div className="card-body__data-heading">URL</div>
                <div className="card-body__data-content">
                  <Link href={item.url}>{item.url}</Link>
                </div>
              </div>
            </CardDetails>
          </CardWrapper>
        ))
      )}
    </>
  );
}
