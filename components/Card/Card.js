import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { PICSUM_ENDPOINT } from './constants';

const CardWrapper = styled.div`
  background-color: #ffffff;
`;
const CardMedia = styled.div``;
const CardContent = styled.div``;

export default function Card() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  // NextJS offers an alternative where this data can be pre-fetched
  // and cached at build time by using the "getStaticProps" method,
  // making the page load much faster. If we anticipate that this data
  // can be cached using getStaticProps would be best.
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`${PICSUM_ENDPOINT}?page=1&limit=4`);
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
              <img
                src={item.download_url}
                width="326px"
                alt={`Image by ${item.author}`}
              />
            </CardMedia>
            <CardContent>
              {item.author}
              {item.id}
              {item.url}
            </CardContent>
          </CardWrapper>
        ))
      )}
    </>
  );
}
