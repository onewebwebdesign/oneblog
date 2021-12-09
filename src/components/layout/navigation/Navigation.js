import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = (props) => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <NavLink to="/">
          <img src="" alt="logo" />
        </NavLink>
      </LogoWrapper>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/articles">Articles</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Navigation;

const NavWrapper = styled.nav`
  width: 280px;
  height: 100%;
  background: lightgreen;
`;

const LogoWrapper = styled.div``;
