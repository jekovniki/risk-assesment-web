import axios from "axios";

export default class FetchAPI {
    static async get(url, configuration = { 'Content-Type': 'application/json', withCredentials: true }) {
        const response = await axios.get(url, {
            ...configuration,
            withCredentials: true
        });

        return response.data;
    }

    static async post(url, body = {}, headers = { 'Content-Type': 'application/json', withCredentials: true}) {
        const response = await axios.post(url, body, {
            headers, withCredentials: true
        });

        return response.data;
    }

    static async put(url, body = {}, headers = { 'Content-Type': 'application/json', withCredentials: true}) {
        const response = await axios.put(url, body, {
            headers, withCredentials: true
        });

        return response.data;
    }

    static async patch(url, body = {}, headers = { 'Content-Type': 'application/json', withCredentials: true}) {
        const response = await axios.patch(url, body, {
            headers, withCredentials: true
        });

        return response.data;
    }

    static async delete(url, headers = { 'Content-Type': 'application/json', withCredentials: true}) {
        const response = await axios.delete(url, { headers, withCredentials: true });

        return response.data;
    }
}