import perfil from "./assets/perfil.jpg";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5"
    }}>

      <div style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        width: "300px"
      }}>

        <img 
          src={perfil}
          alt="Mi foto"
          style={{
            borderRadius: "50%",
            width: "120px",
            marginBottom: "15px"
          }}
        />

        <h2 style={{ margin: "10px 0" }}>
          Hector
        </h2>

        <p style={{ color: "gray", marginBottom: "20px" }}>
          Frontend Developer
        </p>

        <button style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer"
        }}>
          Contactar
        </button>

      </div>

    </div>
  );
}

export default App;