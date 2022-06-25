import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getGithubUser } from "../../services/github-api-service";

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  margin-top: 1rem;
`;

const SearchUser = () => {
  const { username } = useParams();
  const [githubUser, setGithubUser] = useState([]);

  useEffect(() => {
    getGithubUser(username).then(setGithubUser);
  }, [username]);

  console.log(githubUser);

  return (
    <>
      <Avatar src={githubUser.avatar_url} alt="github-avatar" />
      <h1>
        {githubUser.name} <AiOutlineStar />
      </h1>
      <p>{githubUser.bio}</p>

      <div>
        <h2>Data faltante</h2>
      </div>
    </>
  );
};

export default SearchUser;
