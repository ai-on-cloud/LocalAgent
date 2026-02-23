import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 960, margin: "0 auto", padding: "1rem" }}>
      <nav style={{ display: "flex", gap: "1rem", padding: "0.5rem 0", borderBottom: "1px solid #ccc", marginBottom: "1rem" }}>
        <Link to="/" data-testid="nav-home">Home</Link>
        <Link to="/products" data-testid="nav-products">Products</Link>
        <Link to="/dynamic" data-testid="nav-dynamic">Dynamic</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer style={{ borderTop: "1px solid #ccc", marginTop: "2rem", padding: "1rem 0", color: "#666" }}>
        LocalAgent Test Site
      </footer>
    </div>
  );
}
