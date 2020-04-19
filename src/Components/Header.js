import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Theme = styled.div`
  width: 250px;
`;

const Menu = styled.div`
  width: 250px;
  display: flex;
`;

const Item = styled.div`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const Logo = styled.h1`
  height: 50px;
  font-size: 30px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Theme>test</Theme>
      <Item>
        <Logo>wanflix</Logo>
      </Item>
      <Menu>
        <Item current={pathname === "/" || pathname.includes("movie/")}>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname === "/tv" || pathname.includes("show/")}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </Menu>
    </List>
  </Header>
));
