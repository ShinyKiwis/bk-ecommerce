import client from './client';

const getProductsByCategory = (id) => client.get(`/products/${id}`);
const getProductById = (id) => client.get(`/products/info/${id}`);

export default {
    getProductsByCategory,
    getProductById
};