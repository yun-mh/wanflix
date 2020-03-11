import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 200px;
    height: 60px;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, .1);
    margin-bottom: 5px;
`;

const Name = styled.span``;

const Count = styled.span`
    opacity: 0.7;
`;

const Date = styled.span`
    opacity: 0.7;
`;

const Season = ({ name, episode, date }) => {
    return (
        <Card>
            <Name>{name}</Name>
            <Count>{episode} episodes</Count>
            <Date>{date}</Date>
        </Card>
    )
};

export default Season;