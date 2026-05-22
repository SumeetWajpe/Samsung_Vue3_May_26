export const getProducts = () => {
  return fetch("http://localhost:3500/products").then(response =>
    response.json(),
  );
};
