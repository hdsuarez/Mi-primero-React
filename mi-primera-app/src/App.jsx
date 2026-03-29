// ===============================
// IMPORTACIONES
// ===============================

// Importamos React Hook para estado
import { useState } from "react";

// Importamos el componente reutilizable
import ProfileCard from "./components/ProfileCard";

// Importamos la imagen
import perfil from "./assets/perfil.jpg";


// ===============================
// COMPONENTE PRINCIPAL
// ===============================

function App() {

  // ===============================
  // ARRAY DE TAREAS
  // ===============================
  const tareas = [
    "Aprender React",
    "Estudiar JavaScript",
    "Hacer ejercicio",
    "Trabajar en proyectos"
  ];

  // ===============================
  // ESTADO DEL CONTADOR
  // ===============================
  // contador → valor actual
  // setContador → función para actualizarlo
  const [contador, setContador] = useState(0);


  // ===============================
  // RETURN (INTERFAZ)
  // ===============================
  return (

    // Contenedor principal
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      padding: "40px"
    }}>


      {/* ===============================
          TARJETAS
      =============================== */}
      <div style={{
        display: "flex",
        gap: "20px"
      }}>

        <ProfileCard 
          nombre="Hector"
          profesion="Frontend Developer"
          foto={perfil}
        />

        <ProfileCard 
          nombre="Juan"
          profesion="Backend Developer"
          foto={perfil}
        />

        <ProfileCard 
          nombre="Maria"
          profesion="UI Designer"
          foto={perfil}
        />

      </div>


      {/* ===============================
          LISTA DE TAREAS
      =============================== */}
      <div style={{ marginTop: "40px" }}>

        <h2 style={{ textAlign: "center" }}>
          Lista de tareas
        </h2>

        <ul style={{
          listStyle: "none",
          padding: 0,
          width: "300px"
        }}>

          {/* Recorremos el array con map */}
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


      {/* ===============================
          CONTADOR (INTERACTIVO)
      =============================== */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>

        <h2>Contador</h2>

        {/* Valor dinámico */}
        <h1>{contador}</h1>

        {/* Botón sumar */}
        <button 
          onClick={() => setContador(contador + 1)}
        >
          +
        </button>

        {/* Botón restar */}
        <button 
          onClick={() => setContador(contador - 1)}
          style={{ marginLeft: "10px" }}
        >
          -
        </button>

        <button onClick={() => setContador(0)} style={{ marginLeft: "10px"}}>

          Reset

        </button>
      
       

      </div>

    </div>
  );
}


// Exportación del componente
export default App;