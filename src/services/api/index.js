const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
    refreshToken: `${API}/api/${VERSION}/auth/refresh-token`,
  },
  products: {
    getProducts: (limit = 0, offset = 0) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    addProduct: `${API}/api/${VERSION}/products`,
    allProducts: `${API}/api/${VERSION}/products`,
  },
  users: {
    getUsers: (limit = 0) => `${API}/api/${VERSION}/users?limit=${limit}`,
    getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    deleteUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    updateUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    addUser: `${API}/api/${VERSION}/users`,
    isAvailableUser: `${API}/api/${VERSION}/users/is-available`,
  },

  categories: {
    getCategories: (limit = 0) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    deleteCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    addCategorry: `${API}/api/${VERSION}/categories`,
    getCategoryProducts: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    addImage: `${API}/api/${VERSION}/files/upload`,
    getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endpoints;
