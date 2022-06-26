import { FaStar } from "react-icons/fa";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const Card = styled.div`
  display: flex;
  height: 56px;
  width:300px;
  gap:0.5rem;
`;

const CardName = styled.div`
  height: 100%;
  width:190px;
`;

const FavoritesPage = (favorites) => {

  return (
    <>
      {favorites.favorites.map((fav) => {
        return(
        <Card key={fav.username}>
          <img src={fav.avatar_url} alt={fav.id}/>
          <CardName>
            <h3>{fav.name}</h3>
            <p>{fav.username}</p>
          </CardName>
          <FaStar size={25} color={'gold'}/>
        </Card>
        )
      })}
    </>
  );
};

export default FavoritesPage;