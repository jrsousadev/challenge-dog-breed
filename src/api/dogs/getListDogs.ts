import { API_BACKEND } from "../../environments/values";
import { getTokenInCookies } from "../../utils/getTokenInCookies";

export const getListDogs = async () => {
  const authorization: string = getTokenInCookies();

  const listDogs = await fetch(`${API_BACKEND}/list`, { 
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": authorization
    },
  }).then(async response => {
    const data = await response.json();
    return data
  }).catch(err => console.log(err));

  if(!listDogs){
    return null;
  }

  return listDogs;
}