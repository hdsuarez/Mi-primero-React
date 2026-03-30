// ===============================
// IMPORTACIONES
// ===============================

// Hook de React para manejar estado dinámico
import { useState } from "react";

// Componente reutilizable
import ProfileCard from "./components/ProfileCard";

// Imagen local
import perfil from "./assets/perfil.jpg";


// ===============================
// COMPONENTE PRINCIPAL
// ===============================

function App() {

  // ===============================
  // ARRAY DE TAREAS (DATOS FIJOS)
  // ===============================
  const tareas = [
    "Aprender React",
    "Estudiar JavaScript",
    "Hacer ejercicio",
    "Trabajar en proyectos"
  ];

  // ===============================
  // ESTADO CONTADOR (DÍA 4)
  // ===============================
  // contador → valor actual
  // setContador → función que lo actualiza
  const [contador, setContador] = useState(0);

  // ===============================
  // 🟡 ESTADO INPUT (DÍA 5)
  // ===============================
  // nombre → guarda lo que el usuario escribe
  // setNombre → actualiza ese valor en tiempo real
  const [nombre, setNombre] = useState("");

  // ===============================
  // 🟡 ESTADO ERROR (VALIDACIÓN)
  // ===============================
  // error → guarda mensaje si algo está mal
  const [error, setError] = useState("");


  // ===============================
  // INTERFAZ (UI)
  // ===============================
  return (

    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      padding: "40px"
    }}>


      {/* ===============================
          TARJETAS (DÍA 2)
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
          LISTA DE TAREAS (DÍA 3)
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

          {/* Convertimos array → HTML */}
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
          CONTADOR (DÍA 4)
      =============================== */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>

        <h2>Contador</h2>

        <h1>{contador}</h1>

        {/* Sumar */}
        <button onClick={() => setContador(contador + 1)}>
          +
        </button>

        {/* Restar */}
        <button 
          onClick={() => setContador(contador - 1)}
          style={{ marginLeft: "10px" }}
        >
          -
        </button>

        {/* Resetear */}
        <button 
          onClick={() => setContador(0)} 
          style={{ marginLeft: "10px"}}
        >
          Reset
        </button>

      </div>


      {/* ===============================
          🟡 FORMULARIO (DÍA 5)
      =============================== */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>

        <h2>Formulario</h2>

        {/* INPUT CONTROLADO */}
        <input 
          type="text"
          placeholder="Escribe tu nombre"

          // React controla el valor
          value={nombre}

          // Se ejecuta en cada tecla
          onChange={(e) => {

            // Guardamos lo que escribe el usuario
            setNombre(e.target.value);

            // ===============================
            // VALIDACIÓN
            // ===============================
            if (e.target.value === "") {
              setError("El nombre es obligatorio");
            } else {
              setError("");
            }

          }}
        />

        {/* MENSAJE DE ERROR (CONDICIONAL) */}
        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        {/* MOSTRAR NOMBRE EN VIVO */}
        <p>Hola, {nombre}</p>

      </div>

    </div>
  );
}


// Exportación
export default App;