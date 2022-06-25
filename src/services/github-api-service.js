const BASE_URI = "https://api.github.com/users/";

export const getGithubUser = async (username) => {
  const response = await fetch(`${BASE_URI}${username}`);
  const user = await response.json();
  return user;
};
