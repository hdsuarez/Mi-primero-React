// ===============================
// IMPORTACIONES
// ===============================

// Importamos el componente reutilizable
import ProfileCard from "./components/ProfileCard";

// Importamos la imagen desde assets
import perfil from "./assets/perfil.jpg";


// ===============================
// COMPONENTE PRINCIPAL
// ===============================

function App() {

  // ===============================
  // ARRAY DE DATOS (tareas)
  // ===============================
  // Esto es información que luego vamos a mostrar en pantalla

  const tareas = [
    "Aprender React",
    "Estudiar JavaScript",
    "Hacer ejercicio",
    "Trabajar en proyectos"
  ];


  // ===============================
  // RETURN (LO QUE SE VE EN PANTALLA)
  // ===============================

  return (

    // Contenedor principal centrado
    <div style={{
      display: "flex",
      flexDirection: "column", // importante para poner elementos en columna
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5"
    }}>


      {/* ===============================
          SECCIÓN TARJETAS (COMPONENTES)
      =============================== */}

      <div style={{
        display: "flex",
        gap: "20px" // espacio entre tarjetas
      }}>

        {/* Tarjeta 1 */}
        <ProfileCard 
          nombre="Hector"
          profesion="Frontend Developer"
          foto={perfil}
        />

        {/* Tarjeta 2 */}
        <ProfileCard 
          nombre="Juan"
          profesion="Backend Developer"
          foto={perfil}
        />

        {/* Tarjeta 3 */}
        <ProfileCard 
          nombre="Maria"
          profesion="UI Designer"
          foto={perfil}
        />

      </div>


      {/* ===============================
          SECCIÓN LISTA DE TAREAS
      =============================== */}

      <div style={{ marginTop: "40px" }}>

        <h2>Lista de tareas</h2>

        <ul style={{
  listStyle: "none",
  padding: 0,
  width: "300px"
}}>

  {tareas.map((tarea, index) => (

    <li 
      key={index}
      style={{
        backgroundColor: "white",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      {tarea}
    </li>

  ))}

</ul>

      </div>

    </div>
  );
}


// Exportamos el componente principal
export default App;