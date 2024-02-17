import { useQuery } from "react-query";
import FetchAPI from "../../libraries/fetch";

export const getUserInfo = async () => {
    const configValue: string = (process.env.REACT_APP_SERVER_URL as string);
    const response = await FetchAPI.get(configValue + '/api/v1/users/me', {
        withCredentials: true
    });

    if (response.status >= 400) {
        throw response.statusText;
    }

    return response.data;
}

export const useGetUser = () => {
    return useQuery('user', getUserInfo);
}