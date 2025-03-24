export async function getProducts(API_URL) {
  const response = await fetch(API_URL);
  const results = await response.json();

  const mappedResults = results.map(product => ({
    id: product.id,
    nombre: product.title,
    precio: product.price,
    imagen: product.image,
    categoria: product.category,
  }));

  return mappedResults;
}