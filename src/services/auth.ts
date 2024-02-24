import { useMutation } from "react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { encode } from "base-64";

import FetchAPI from "../libraries/fetch";
import { APP_URL } from "../utils/constants";
export interface ICredentials {
    email: string;
    password: string;
}

export interface IRegistration extends ICredentials {
    repeatPassword: string;
    gender: string;
    dateOfBirth: string;
    firstName: string;
    lastName: string;
}

export const signIn = async (credentials: ICredentials) => {
    const response = await FetchAPI.post(APP_URL + '/api/v1/auth/sign-in', credentials, {
        withCredentials: true
    });

    return response;
}

export const signUp = async (credentials: IRegistration) => {
    return await FetchAPI.post(APP_URL + '/api/v1/auth/sign-up', credentials, {
        withCredentials: true
    })

}

export const useLoginMutation = () => {
    const [loading, setLoading] = useState(false);
    const defaultCredentials = { email: "", password: "" };
    const [formError, setFormError] = useState<ICredentials>(defaultCredentials);
    const [errorMessage, setErrorMessage] = useState("");
    const navigation = useNavigate();
    const mutation = useMutation((input: ICredentials) => signIn(input));

    const submitData = async (credentials: ICredentials) => {
        setLoading(true);
        setFormError(defaultCredentials);

        if (!credentials.email) {
            setLoading(false);
            setFormError({ ...defaultCredentials, email: "Email field is mandatory"});
            return;
        }
        if (!credentials.password) {
            setLoading(false);
            setFormError({ ...defaultCredentials, password: "Password field is mandatory" });
            return;
        }
        if (credentials.password.length < 8) {
            setLoading(false);
            setFormError({ ...defaultCredentials, password: "Password should be at least 8 characters" });
            return;
        }

        const encodedPassword = encode(credentials.password);
        try {
            await mutation.mutateAsync({ ...credentials, password: encodedPassword });
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
        navigation("/dashboard");
    }

    return { loading, formError, errorMessage, submitData };
}

export const useRegistrationMutation = () => {
    const [loading, setLoading] = useState(false);
    const defaultRegistration = { 
        email: "", 
        password: "",
        repeatPassword: "",
        gender: "",
        dateOfBirth: "",
        firstName: "",
        lastName: ""
     }
    const [formError, setFormError] = useState<IRegistration>(defaultRegistration);
    const [errorMessage, setErrorMessage] = useState("");
    const navigation = useNavigate();
    const mutation = useMutation((input: IRegistration) => signUp(input));

    const submitData = async (credentials: IRegistration) => {
        setLoading(true);
        setFormError(defaultRegistration);

        if (!credentials.email) {
            setLoading(false);
            setFormError({ ...defaultRegistration, email: "Email field is mandatory"});
            return;
        }
        if (!credentials.firstName) {
            setLoading(false);
            setFormError({ ...defaultRegistration, firstName: "Given name field is mandatory"});
            return;
        }
        if (!credentials.lastName) {
            setLoading(false);
            setFormError({ ...defaultRegistration, lastName: "Family name field is mandatory"});
            return;
        }
        if (!credentials.gender) {
            setLoading(false);
            setFormError({ ...defaultRegistration, gender: "Gender field is mandatory"});
            return;
        }
        if (!credentials.dateOfBirth) {
            setLoading(false);
            setFormError({ ...defaultRegistration, dateOfBirth: "Date of birth field is mandatory"});
            return;
        }
        if (!credentials.password) {
            setLoading(false);
            setFormError({ ...defaultRegistration, password: "Password field is mandatory" });
            return;
        }
        if (credentials.password.length < 8) {
            setLoading(false);
            setFormError({ ...defaultRegistration, password: "Password should be at least 8 characters" });
            return;
        }

        if ((credentials.password === credentials.repeatPassword) === false) {
            setLoading(false);
            setFormError({ ...defaultRegistration, repeatPassword: "Repeat password should match passsword" });
            return;
        }

        const encodedPassword = encode(credentials.password);
        const encodedRepeatPassword = encode(credentials.repeatPassword);
        try {
            await mutation.mutateAsync({ 
                ...credentials, 
                password: encodedPassword, 
                repeatPassword: encodedRepeatPassword 
            });
        } catch (error) {
            console.error(error);
            setLoading(false);
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("We couldn't process your request");
            }
        }
    }

    if (mutation.isSuccess) {
        navigation("/login");
    }

    return { loading, formError, errorMessage, submitData };
}