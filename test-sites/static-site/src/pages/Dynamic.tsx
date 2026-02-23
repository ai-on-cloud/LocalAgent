import { useState, useEffect } from "react";

export function Dynamic() {
  const [delayedVisible, setDelayedVisible] = useState(false);
  const [veryDelayedVisible, setVeryDelayedVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDelayedVisible(true), 500);
    const t2 = setTimeout(() => setVeryDelayedVisible(true), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div>
      <h1 data-testid="heading-dynamic">Dynamic Content</h1>
      <p>This page renders content after delays to test wait/polling behavior.</p>

      {!delayedVisible && (
        <div data-testid="loading-spinner" style={{ padding: "1rem", color: "#999" }}>
          Loading...
        </div>
      )}

      {delayedVisible && (
        <div data-testid="delayed-content" style={{ padding: "1rem", background: "#e8f5e9", marginBottom: "1rem" }}>
          This content appeared after 500ms.
        </div>
      )}

      {veryDelayedVisible && (
        <div data-testid="very-delayed-content" style={{ padding: "1rem", background: "#e3f2fd" }}>
          This content appeared after 2 seconds.
        </div>
      )}
    </div>
  );
}
