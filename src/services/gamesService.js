import axios from "axios";
import * as helper from "./serviceHelper";

let endpoint = "https://my-game-api-project.herokuapp.com/games";


const getGames = () => {
  const config = {
    method: "GET",
    url: endpoint,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content Type": "application/json" },
  };
  return axios(config).then(helper.onGlobalSuccess);
};

const addGame = (payload) => {
    const config = {
      method: "POST",
      data: payload,
      url: endpoint,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
  
    return axios(config).then((response) => {
      console.log("add call", response);
      return { ...payload, id: response.data.item };
    });
  };

  const deleteGame = () => {
    const config = {
      method: "GET",
      url: "https://my-game-api-project.herokuapp.com/games?pageIndex=0&pageSize=10",
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    return axios(config);
  };
  

const searchGame = () => {
  const config = {
    method: "GET",
    url: "https://my-game-api-project.herokuapp.com/games?pageIndex=0&pageSize=10",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  console.log("searching");
  return axios(config);
};

const paginateGame = () => {
  const config = {
    method: "GET",
    url: 'https://my-game-api-project.herokuapp.com/games?pageIndex=0&pageSize=10',
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  console.log("paginating");
  return axios(config);
};

export { getGames, searchGame, paginateGame, addGame, deleteGame };
