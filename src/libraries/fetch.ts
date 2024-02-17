import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class FetchAPI {
    static async get<T>(url: string, configuration: AxiosRequestConfig = { headers: { 'Content-Type': 'application/json' } }): Promise<AxiosResponse<T>> {
        const response: AxiosResponse<T> = await axios.get(url, {
            ...configuration,
            withCredentials: true
        });

        return response;
    }

    static async post<T>(url: string, body: any = {}, headers: AxiosRequestConfig['headers'] = { 'Content-Type': 'application/json' }): Promise<AxiosResponse<T>> {
        const response: AxiosResponse<T> = await axios.post(url, body, {
            headers,
            withCredentials: true
        });

        return response;
    }

    static async put<T>(url: string, body: any = {}, headers: AxiosRequestConfig['headers'] = { 'Content-Type': 'application/json' }): Promise<AxiosResponse<T>> {
        const response: AxiosResponse<T> = await axios.put(url, body, {
            headers,
            withCredentials: true
        });

        return response;
    }

    static async patch<T>(url: string, body: any = {}, headers: AxiosRequestConfig['headers'] = { 'Content-Type': 'application/json' }): Promise<AxiosResponse<T>> {
        const response: AxiosResponse<T> = await axios.patch(url, body, {
            headers,
            withCredentials: true
        });

        return response;
    }

    static async delete<T>(url: string, headers: AxiosRequestConfig['headers'] = { 'Content-Type': 'application/json' }): Promise<AxiosResponse<T>> {
        const response: AxiosResponse<T> = await axios.delete(url, {
            headers,
            withCredentials: true
        });

        return response;
    }
}
