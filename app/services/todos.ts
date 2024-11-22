import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

const endpoint = '/todos2'

export const getTodos = async () => {
    try {
        const response: AxiosResponse = await axiosInstance.get(endpoint);
        return response.data;

    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}