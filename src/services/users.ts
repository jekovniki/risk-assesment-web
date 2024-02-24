import { useQuery } from "react-query";
import FetchAPI from "../libraries/fetch";
import { APP_URL } from "../utils/constants";

const getUserInfo = async () => {
    const response = await FetchAPI.get(APP_URL + '/api/v1/users/me', {
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