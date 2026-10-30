import { API_URL } from "./api/apiConstant";
import api from "./api/apiInstance";

export const authLogin = async (payload) => {

    try {
        const result = await api.post(API_URL.login, payload, {
            withCredentials: true,
        });
        const token = result.data.accessToken;
        localStorage.setItem("token", token);
        return result.data;
    }
    catch (e) {
        console.log(e.response?.status);
        throw e;
    }
};
export const fetchProucts = async (page = 1) => {
    try {
        const limit = 8;
        const skip = (page - 1) * limit;

        // const {limit, skip} = req.param;

        const result = await api.get(`${API_URL.products}?limit=${limit}&skip=${skip}`);

        return result.data;

    } catch (err) {
        throw err;
    }
};

export const fetchAllProucts = async () => {
    try {
        const result = await api.get(`${API_URL.products}?limit=${194}&skip=${0}`);
        // console.log(result.data.products);

        return result.data;

    } catch (err) {
        throw err;
    }
};