import { useMutation } from "react-query";
import { useState } from "react";

import FetchAPI from "../libraries/fetch";
import { APP_URL } from "../utils/constants";

interface ISearch {
    search: string;
    schema: string;
    page?: number | undefined;
    limit?: number | undefined;
    nationality: string;
    country: string;
    gender: string;
    byAlias: boolean;
}

export const search = async (input: ISearch) => {
    const response = await FetchAPI.post(APP_URL + '/api/v1/search', input, {
        withCredentials: true
    });

    return response;
}

export const getSearchHistory = async () => {
    const response = await FetchAPI.get(APP_URL + '/api/v1/search/history', {
        withCredentials: true
    });

    return response;
}

export const getSearchOptionsGender = async () => {
    const response = await FetchAPI.get(APP_URL + '/api/v1/search-options/genders', {
        withCredentials: true
    });

    return response;
}

export const getSearchOptionsEntities = async () => {
    const response = await FetchAPI.get(APP_URL + '/api/v1/search-options/entities', {
        withCredentials: true
    });

    return response;
}

export const useSearchMutation = () => {
    const [loading, setLoading] = useState(false);
    const defaultSearch = { 
        search: "", 
        schema: "", 
        nationality: "", 
        country: "",
        gender: "",
        name: "",
        byAlias: false,
        firstName: "",
        position: ""
     };
    const [formError, setFormError] = useState<ISearch>(defaultSearch);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState<Record<string, any> | undefined>(undefined);
    const mutation = useMutation((input: ISearch) => search(input));

    const submitData = async (input: ISearch) => {
        setLoading(true);
        setFormError(defaultSearch);

        if (!input.search) {
            setLoading(false);
            setFormError({ ...defaultSearch, search: "Search field is mandatory"});
            return;
        }

        try {
            await mutation.mutateAsync(input);
        } catch (error) {
            console.error(error);
            setLoading(false);
            const hasResponse = error as any;

            if (hasResponse && typeof hasResponse?.response?.data?.error === 'string') {
                setErrorMessage(hasResponse?.response?.data?.error);
            } else if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("We couldn't process your request");
            }
        }
    }

    if (mutation.isSuccess) {
        setSuccess(mutation.data);
    }

    return { loading, formError, errorMessage, submitData, success };
}