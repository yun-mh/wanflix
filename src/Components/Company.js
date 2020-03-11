import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    background-color: rgba(255, 255, 255, .1);
    margin-bottom: 5px;
`;

const Logo = styled.div`
    height: 200px;
    background-image: url(${props => props.bgUrl});
    background-position: center center;
    background-repeat: no-repeat;
`;

const Name = styled.span`
    text-align: center;
    padding: 10px 0;
`;

const Company = ({ name, logo }) => {
    return (
        <Card>
            <Logo bgUrl={logo ? `https://image.tmdb.org/t/p/w200/${logo}` : require("../assets/noPosterSmall.png") }></Logo>
            <Name>{name}</Name>
        </Card>
    )
}

export default Company;