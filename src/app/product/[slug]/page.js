import { client } from "../../../../lib/client";
import ProductDetailsClient from "./ProductDetailsClient";

const ProductDetails = async ({ params }) => {
  const { slug } = params;

  // Fetch the product data
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  // Fetch additional products
  const productQuery = `*[_type == "product"]`;
  const products = await client.fetch(productQuery);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetailsClient product={product} products={products} />;
};

export default ProductDetails;
