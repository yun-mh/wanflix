import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 5px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  width: 60px;
  height: 100px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Name = styled.span``;

const Count = styled.span`
  opacity: 0.7;
`;

const Date = styled.span`
  opacity: 0.7;
`;

const Season = ({ name, episode, date, poster }) => {
  console.log(poster);
  return (
    <Card>
      <Image
        bgUrl={
          poster
            ? `https://image.tmdb.org/t/p/h100${poster}`
            : require("../assets/noPosterSmall.png")
        }
      />
      <Name>{name}</Name>
      <Count>{episode} episodes</Count>
      <Date>{date}</Date>
    </Card>
  );
};

export default Season;
