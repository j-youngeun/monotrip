export function PlaceholderPage({ title, description }) {
  return (
    <main className="page placeholder-page">
      <div className="placeholder-card">
        <span className="placeholder-chip">Coming next</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </main>
  );
}
