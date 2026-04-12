import React from "react";

function UserList({ usuarios, busqueda, resaltarTexto, theme }) {

  console.log("🔄 Renderizando UserList");

  return (
    <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
      {usuarios.map((usuario) => (
        <li key={usuario.id} style={{
          backgroundColor: theme === "light" ? "white" : "#1e1e1e",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px"
        }}>
          <strong>{resaltarTexto(usuario.name, busqueda)}</strong>
          <br />
          <small>{usuario.email}</small>
        </li>
      ))}
    </ul>
  );
}

// 🔥 AQUÍ ESTÁ LA MAGIA
export default React.memo(UserList);