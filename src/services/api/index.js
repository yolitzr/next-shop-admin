const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
    refreshToken: `${API}/api/${VERSION}/auth/refresh-token`,
  },
  products: {
    getAll: (limit = 0, offset = 0) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getDelete: (id) => `${API}/api/${VERSION}/products/${id}`,
    getUpdate: (id) => `${API}/api/${VERSION}/products/${id}`,
    post: `${API}/api/${VERSION}/products`,
  },
  users: {
    getAll: (limit = 0) => `${API}/api/${VERSION}/users?limit=${limit}`,
    getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    getDelete: (id) => `${API}/api/${VERSION}/users/${id}`,
    getUpdate: (id) => `${API}/api/${VERSION}/users/${id}`,
    post: `${API}/api/${VERSION}/users`,
    isAvailable: `${API}/api/${VERSION}/users/is-available`,
  },

  categories: {
    getAll: (limit = 0) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getDelete: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getUpdate: (id) => `${API}/api/${VERSION}/categories/${id}`,
    post: `${API}/api/${VERSION}/categories`,
    getCategoryProduct: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    post: `${API}/api/${VERSION}/files/upload`,
    getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endpoints;
