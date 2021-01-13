import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { CardWrapper, CardMedia, CardDetails } from './Styles';
import { PICSUM_ENDPOINT } from './constants';

export default function Card() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  // With NextJS' getStaticProps we could make the app more performant.
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios(`${PICSUM_ENDPOINT}`);
        setData(response.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isError && (
        <div>
          <h1>Fetching Problem.</h1>Unable to load page. 🤮
        </div>
      )}
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
