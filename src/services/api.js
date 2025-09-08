import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Products API
export const productsAPI = {
  // Get all products
  getProducts: () => api.get('/products/'),
  
  // Get single product
  getProduct: (id) => api.get(`/products/${id}/`),
  
  // Create product
  createProduct: (productData) => api.post('/products/', productData),
  
  // Update product
  updateProduct: (id, productData) => api.put(`/products/${id}/`, productData),
  
  // Delete product
  deleteProduct: (id) => api.delete(`/products/${id}/`),
  
  // Upload images
  uploadImages: (id, formData) => api.post(`/products/${id}/upload_images/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  
  // Set primary image
  setPrimaryImage: (id, imageId) => api.post(`/products/${id}/set_primary_image/`, { image_id: imageId }),
};

// Categories API
export const categoriesAPI = {
  // Get all categories
  getCategories: () => api.get('/categories/'),
  
  // Create category
  createCategory: (categoryData) => api.post('/categories/', categoryData),
};

export default api;
