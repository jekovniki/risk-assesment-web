import FetchAPI from "../../libraries/fetch";
import { APP_URL } from "../../utils/constants";

export interface ICredentials {
    email: string;
    password: string;
}

export const signIn = async (credentials: ICredentials) => {
    const response = await FetchAPI.post(APP_URL + '/api/v1/auth/sign-in', credentials, {
        withCredentials: true
    });

    if (response.status >= 400) {
        throw response.statusText;
    }

    return response.data;
}