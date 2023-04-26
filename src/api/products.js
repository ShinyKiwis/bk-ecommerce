import client from './client';

const getProductsByCategory = (id) => client.get(`/products/${id}`);
const getProductById = (id) => client.get(`/products/info/${id}`);
const getProductByQuery = (query) => client.get(`products/search/${query}`);

export default {
    getProductsByCategory,
    getProductById,
    getProductByQuery,
};