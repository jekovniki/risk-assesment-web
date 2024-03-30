import FetchAPI from "../libraries/fetch";
import { APP_URL } from "../utils/constants";

interface ICase {
    searchId: string;
    status: 'Positive' | 'Negative';
    riskLevel: 'High' | 'Medium' | 'Low';
    reason: string;
    additionalComment: string;
}

export const resolveCase = async (input: ICase) => {
    const response = await FetchAPI.post(APP_URL + '/api/v1/case', input, {
        withCredentials: true
    });

    return response;
}
