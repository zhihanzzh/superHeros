import Axios from "axios";

const marvelInstance = Axios.create();
marvelInstance.interceptors.request.use(config => {
  config.url = `https://gateway.marvel.com:443/v1/public/${
    config.url
  }&apikey=7243f6558955bf39581e4f97311bad6c`;

  return config;
});

export const searchForSuperheroes = async superHeroName => {
  const url = `characters?nameStartsWith=${superHeroName}`;
  const httpResponse = await marvelInstance.get(url);

  return httpResponse.data.data.results;
};