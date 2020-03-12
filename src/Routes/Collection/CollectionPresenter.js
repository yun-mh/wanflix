import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Poster from "Components/Poster";
import Message from "Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(4px);
  opacity: 0.5;
  z-index: 0;
`;

const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  position: relative;
  z-index: 1;
  margin-bottom: 50px;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
`;

const Data = styled.div`
  margin-left: 30px;
`;

const Title = styled.span`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  opacity: 0.7;
  line-height: 1.5;
  margin-top: 30px;
`;

const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  position: relative;
  z-index: 1;
`;

const CollectionPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Wanflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    error && <Message color="#e74c3c" text={error} />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.name}{" "}| Wanflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <ContentHeader>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        >
        </Cover>
        <Data>
          <Title>
            {result.name ? result.name : ""}
          </Title>
          <Overview>
            {result.overview ? result.overview : ""}
          </Overview>
        </Data>
      </ContentHeader>
      <ContentBody>
        <Section title="Movies included">
          {result.parts && result.parts.length > 0 &&       
              result.parts.map(movie => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  year={movie.release_date && movie.release_date.substring(0, 4)}
                  isMovie={true}
                />
              ))
          }
        </Section>
      </ContentBody>
    </Container>
  );

CollectionPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
}

export default CollectionPresenter;