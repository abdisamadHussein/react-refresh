import React, { useContext } from "react";
import styled from "styled-components";
import FavoritesContext from "../../../store/favorites-contex";

const Item = styled.div`
  margin: 1rem 0;
`;

const Image = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  text-align: center;
  padding: 1rem;
  h3 {
    font-size: 1.25rem;
    color: #2c292b;
  }
`;

const Actions = styled.div`
  padding: 1.5rem;
  text-align: center;
  button {
    font: inherit;
    cursor: pointer;
    color: #77002e;
    border: 1px solid #77002e;
    background-color: transparent;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    &:hover {
      background-color: #ffe2ed;
    }
    &active {
      background-color: #ffe2ed;
    }
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const Index = ({ meetup }) => {
  const { id, meetupTitle, meetupImage, address, description } = meetup;
  const favoritesCtx = useContext(FavoritesContext);
  const isFavorite = favoritesCtx.isFavorite(id);

  const handleFavorite = () => {
    if (isFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite(meetup);
    }
  };
  return (
    <Item>
      <Card>
        <Image>
          <img src={meetupImage} alt={meetupTitle} />
        </Image>
        <Content>
          <h3>{meetupTitle}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </Content>
        <Actions>
          <button onClick={handleFavorite}>
            {isFavorite ? "Remove from Favorites" : "Tofavorites"}
          </button>
        </Actions>
      </Card>
    </Item>
  );
};

export default Index;
