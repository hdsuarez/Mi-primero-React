// ===============================
// LAYOUT PRINCIPAL
// ===============================
function DashboardLayout({ children, theme }) {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#121212",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh"
      }}
    >
      {children}
    </div>
  );
}

export default DashboardLayout;