import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1 data-testid="heading-home">LocalAgent Test Site</h1>
      <p>This site is used for browser automation integration testing.</p>
      <ul>
        <li><Link to="/products" data-testid="link-products">Browse Products</Link></li>
        <li><Link to="/dynamic" data-testid="link-dynamic">Dynamic Content</Link></li>
      </ul>
    </div>
  );
}
