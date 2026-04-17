export function MobileShell({ children }) {
  return (
    <div className="app-shell">
      <div className="device-frame">{children}</div>
    </div>
  );
}
