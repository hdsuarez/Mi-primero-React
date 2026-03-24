// ProfileCard.jsx

function ProfileCard({ nombre, profesion, foto }) {
  return (
    <div style={{
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "300px"
    }}>
      
      {/* Imagen dinámica que viene por props */}
      <img 
        src={foto}
        alt="foto"
        style={{
          borderRadius: "50%",
          width: "100px",
          marginBottom: "10px"
        }}
      />

      {/* Texto dinámico */}
      <h2>{nombre}</h2>
      <p>{profesion}</p>

    </div>
  );
}

export default ProfileCard;