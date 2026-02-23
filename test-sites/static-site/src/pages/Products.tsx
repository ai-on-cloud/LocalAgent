import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export function Products() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(products);

  function handleSearch() {
    const q = query.toLowerCase().trim();
    if (q === "") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      ));
    }
  }

  return (
    <div>
      <h1 data-testid="heading-products">Products</h1>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          data-testid="search-input"
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
        />
        <button data-testid="search-button" onClick={handleSearch}>Search</button>
      </div>
      <p data-testid="results-count">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
      <table data-testid="results-table" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id} data-testid={`product-row-${p.id}`}>
              <td style={tdStyle}><Link to={`/products/${p.id}`} data-testid={`product-link-${p.id}`}>{p.name}</Link></td>
              <td style={tdStyle}>{p.category}</td>
              <td style={tdStyle}>${p.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle: React.CSSProperties = { textAlign: "left", borderBottom: "2px solid #ccc", padding: "0.5rem" };
const tdStyle: React.CSSProperties = { borderBottom: "1px solid #eee", padding: "0.5rem" };
