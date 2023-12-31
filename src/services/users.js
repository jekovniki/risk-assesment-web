import FetchApi from "../utils/fetch";

export async function getUserInformation() {
    const response = await FetchApi.get(process.env.REACT_APP_SERVER_URL + '/api/v1/users/me', {
        withCredentials: true
    });
    
    return response;
}