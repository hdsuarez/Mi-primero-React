// ===============================
// COMPONENTE REUTILIZABLE
// ===============================
function ProfileCard({ nombre, profesion, imagen }) {

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        width: "250px"
      }}
    >
      <img
        src={imagen}
        alt="perfil"
        style={{
          width: "100px",
          borderRadius: "50%"
        }}
      />

      <h2>{nombre}</h2>
      <p>{profesion}</p>
    </div>
  );
}

export default ProfileCard;