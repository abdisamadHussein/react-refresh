import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import FavoritesContext from "../../../store/favorites-contex";

const Header = styled.header`
  backgroundcolor: red;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #77002e;
  padding: 0 10%;
`;

const Logo = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
  li {
    margin-left: 3rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fcb8d2;
  &:hover {
    color: white;
  }
  &:active {
    color: white;
  }
`;

const Badge = styled.span`
  background-color: #cc2062;
  color: white;
  border-radius: 12px;
  padding: 0 1rem;
  margin-left: 0.5rem;
`;
const Index = () => {
  const { totalFavorites } = useContext(FavoritesContext);
  return (
    <Header>
      <Logo>React Meetups</Logo>
      <nav>
        <Ul>
          <li>
            <StyledLink to="/">All Meetups</StyledLink>
          </li>
          <li>
            <StyledLink to="/new-meetup">Add New Meetup</StyledLink>
          </li>
          <li>
            <StyledLink to="/favorites">
              {" "}
              Favorites
              <Badge>{totalFavorites}</Badge>
            </StyledLink>
          </li>
        </Ul>
      </nav>
    </Header>
  );
};

export default Index;
