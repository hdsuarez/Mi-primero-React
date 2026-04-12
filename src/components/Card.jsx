// ===============================
// COMPONENTE REUTILIZABLE CARD
// ===============================
function Card({ title, children, theme }) {
  return (
    <div
      style={{
        borderRadius: "10px",
        padding: "20px",
        width: "250px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        backgroundColor: theme === "light" ? "white" : "#1e1e1e",
      }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Card;