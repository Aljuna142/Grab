/*// apiConfig.js
const API_BASE_URL = 'http://localhost:5000/api/v1/stores';

export const getStoreSalesUrl = (storeName) => {
    return `${API_BASE_URL}/${storeName}/sales`;
};*/

const API_BASE_URL = 'http://localhost:5000/api/v1/stores';

export const getStoreSalesUrl = (storeName) => {
    return `${API_BASE_URL}/${storeName}/sales`;
};

export const updateSaleUrl = (storeName, saleId) => {
    return `${API_BASE_URL}/${storeName}/sales/${saleId}`;
};

export const deleteSaleUrl = (storeName, saleId) => {
    return `${API_BASE_URL}/${storeName}/sales/${saleId}`;
};
