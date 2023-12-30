import FetchApi from "../utils/fetch";

export async function getPep() {
    const response = await FetchApi.get(process.env.REACT_APP_SERVER_URL + '/api/v1/search/');
    
    return response;
}