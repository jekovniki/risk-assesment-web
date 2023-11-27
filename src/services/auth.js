import { encode } from "base-64";
import FetchApi from "../utils/fetch";

export async function signInWithCredentials(credentials) {
    const response = await FetchApi.post(process.env.REACT_APP_SERVER_URL + '/api/v1/auth/sign-in', {
        ...credentials,
        password: encode(credentials.password)
    });
    
    return response;
}

export async function signUp(credentials) {
    const response = await FetchApi.post(process.env.REACT_APP_SERVER_URL + '/api/v1/auth/sign-in', {
        ...credentials,
        password: encode(credentials.password),
        repeatPassword: encode(credentials.password)
    });
    
    return response;
}