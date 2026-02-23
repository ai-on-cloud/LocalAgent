import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <Link to="/products" data-testid="back-link">Back to Products</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/products" data-testid="back-link">&larr; Back to Products</Link>
      <h1 data-testid="product-name">{product.name}</h1>
      <p data-testid="product-price">${product.price.toFixed(2)}</p>
      <p data-testid="product-category">Category: {product.category}</p>
      <p data-testid="product-description">{product.description}</p>
    </div>
  );
}
