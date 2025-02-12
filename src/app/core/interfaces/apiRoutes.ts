export const ApiRoutes = {
  home: {
    categories: 'categories',
    bestSeller: 'best-seller',
    products: 'products',
  },
  product:{
    products:'products',
    singleProduct: (id: string) => `/products/${id}`,

  }
};
