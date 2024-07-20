const axios = require('axios');
import { API_BASE_URL } from "../utils/api";


export const womenProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/category/women\'s%20clothing`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const menProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/category/men\'s%20clothing`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const allProducts = async () => {
    try {
        const [womensProducts, mensProducts] = await Promise.all([womenProducts(), menProducts()]);
        const combinded  = [...womensProducts, ...mensProducts];
        return shuffleArray(combinded);
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}