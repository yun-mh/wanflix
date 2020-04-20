import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { light } from "./Theme";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: ${({ theme: { theme } }) => theme.bodyTransparent};
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.3);
`;

const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Theme = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const ButtonLabel = styled.span`
  margin: 0 0.5rem 0 1rem;
`;

const Button = styled.button`
  background: ${({ theme: { theme } }) => theme.selected};
  border: 1.5px solid rgba(54, 53, 55, 0.8);
  border-radius: 1rem;
  cursor: pointer;
  font-size: 0.5rem;
  overflow: hidden;
  width: 3rem;
  height: 1.2rem;
  outline: none;
  transition: all 0.3s linear;

  span {
    width: inherit;
    height: auto;
  }
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

export default withRouter(({ location: { pathname } }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Header>
      <List>
        <Theme>
          <ButtonLabel>Dark Mode</ButtonLabel>
          <Button onClick={toggleTheme}>
            <span>{theme === light ? "ON" : "OFF"}</span>
          </Button>
        </Theme>
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
  );
});
