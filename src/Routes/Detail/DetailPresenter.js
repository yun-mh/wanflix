import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { css } from "styled-components";
import Loader from "Components/Loader";
import Video from "Components/Video";
import Company from "Components/Company";
import Season from "Components/Season";
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
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(4px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 30px;
`;

const Title = styled.span`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const IMDBItem = styled.a`
  background-color: #e4b715;
  border-radius: 4px;
  padding: 2px 5px;
  color: black;
  font-weight: 800;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const CollectionItem = styled(Link)`
  background-color: lightgray;
  border-radius: 4px;
  padding: 2px 5px;
  color: black;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
  margin-bottom: 12px;
`;

const TabCategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  margin-bottom: 16px;
  width: 50%;
  background-color: ${({ theme: { theme } }) => theme.bodyTransparent};
`;

const TabCategory = styled.div`
  cursor: pointer;
  &:hover {
    color: gray;
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
    `}
`;

const DetailInfoContainer = styled.div`
  display: flex;
  width: 50%;
  max-height: 65%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: auto;
`;

const DetailPresenter = ({
  result,
  isMovie,
  error,
  loading,
  videos,
  production_companies,
  production_countries,
  spoken_languages,
  seasons,
  origin_country,
  toggleCompanies,
  toggleCountries,
  toggleLanguages,
  toggleVideos,
  toggleSeasons,
  toggleOriginCountry,
}) =>
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
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Wanflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        ></Cover>
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>ᐧ</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time} min
            </Item>
            <Divider>ᐧ</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>ᐧ</Divider>
            <Item>
              <span role="img" aria-label="rating">
                ⭐️
              </span>{" "}
              {result.vote_average}/10
            </Item>
            <Divider>ᐧ</Divider>
            <Item>
              <IMDBItem
                onClick={() => {
                  window.open(
                    `https://www.imdb.com/title/${
                      result.imdb_id
                        ? result.imdb_id
                        : result.external_ids.imdb_id
                    }`,
                    "_blank"
                  );
                }}
              >
                IMDb
              </IMDBItem>
            </Item>
            {result.belongs_to_collection ? (
              <>
                <Divider>ᐧ</Divider>
                <CollectionItem
                  to={`/collection/${result.belongs_to_collection.id}`}
                >
                  Collection
                </CollectionItem>
              </>
            ) : (
              ""
            )}
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <TabCategoriesContainer>
            {result.videos && result.videos.results.length > 0 ? (
              <TabCategory onClick={toggleVideos}>Videos</TabCategory>
            ) : (
              ""
            )}
            {isMovie === false &&
            result.origin_country &&
            result.origin_country.length > 0 ? (
              <TabCategory onClick={toggleOriginCountry}>Countries</TabCategory>
            ) : (
              ""
            )}
            {result.production_companies &&
            result.production_companies.length > 0 ? (
              <TabCategory onClick={toggleCompanies}>Companies</TabCategory>
            ) : (
              ""
            )}
            {result.production_countries &&
            result.production_countries.length > 0 ? (
              <TabCategory onClick={toggleCountries}>Countries</TabCategory>
            ) : (
              ""
            )}
            {result.spoken_languages && result.spoken_languages.length > 0 ? (
              <TabCategory onClick={toggleLanguages}>Languages</TabCategory>
            ) : (
              ""
            )}
            {isMovie === false &&
            result.seasons &&
            result.seasons.length > 0 ? (
              <TabCategory onClick={toggleSeasons}>Seasons</TabCategory>
            ) : (
              ""
            )}
          </TabCategoriesContainer>
          <DetailInfoContainer>
            {videos && result.videos.results.length > 0
              ? result.videos.results.map((video) => (
                  <Video key={video.id} path={video.key} />
                ))
              : ""}
            {production_companies && result.production_companies.length > 0
              ? result.production_companies.map((company) => (
                  <Company
                    key={company.id}
                    name={company.name}
                    logo={company.logo_path}
                  />
                ))
              : ""}
            {production_countries && result.production_countries.length > 0
              ? result.production_countries.map((country) => (
                  <span key={country.name}>{country.name}</span>
                ))
              : ""}
            {spoken_languages && result.spoken_languages.length > 0
              ? result.spoken_languages.map((language) => (
                  <span key={language.name}>{language.name}</span>
                ))
              : ""}
            {origin_country && result.origin_country.length > 0
              ? result.origin_country.map((country, index) => (
                  <span key={index}>{country}</span>
                ))
              : ""}
            {seasons
              ? result.seasons.map((season) => (
                  <Season
                    key={season.id}
                    name={season.name}
                    episode={season.episode_count}
                    poster={season.poster_path}
                    date={season.air_date}
                  />
                ))
              : ""}
          </DetailInfoContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
