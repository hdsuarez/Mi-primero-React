// ===============================
// IMPORTACIONES
// ===============================
import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import perfil from "./assets/perfil.jpg";


// ===============================
// COMPONENTE PRINCIPAL
// ===============================
function App() {

  // ===============================
  // 🔵 ESTADOS API
  // ===============================
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState(null); // 🔥 nuevo (manejo de error)

  // ===============================
  // 🟡 ESTADO HORA
  // ===============================
  const [hora, setHora] = useState(new Date());

  // ===============================
  // DATOS FIJOS
  // ===============================
  const tareas = [
    "Aprender React",
    "Estudiar JavaScript",
    "Hacer ejercicio",
    "Trabajar en proyectos"
  ];

  // ===============================
  // ESTADOS UI
  // ===============================
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");

  // ===============================
  // 🟡 RELOJ
  // ===============================
  useEffect(() => {

    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);

  }, []);

  // ===============================
  // 🔵 FETCH API (MEJORADO)
  // ===============================
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar usuarios");
        }
        return response.json();
      })
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorFetch(error.message);
        setLoading(false);
      });

  }, []);

  // ===============================
  // UI
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

      {/* TARJETAS */}
      <div style={{ display: "flex", gap: "20px" }}>
        <ProfileCard nombre="Hector" profesion="Frontend Developer" foto={perfil}/>
        <ProfileCard nombre="Juan" profesion="Backend Developer" foto={perfil}/>
        <ProfileCard nombre="Maria" profesion="UI Designer" foto={perfil}/>
      </div>

      {/* LISTA */}
      <div style={{ marginTop: "40px" }}>
        <h2>Lista de tareas</h2>
        <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
          {tareas.map((tarea, index) => (
            <li key={index} style={{
              backgroundColor: "white",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px"
            }}>
              {tarea}
            </li>
          ))}
        </ul>
      </div>

      {/* CONTADOR */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>Contador</h2>
        <h1>{contador}</h1>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)} style={{ marginLeft: "10px" }}>-</button>
        <button onClick={() => setContador(0)} style={{ marginLeft: "10px" }}>Reset</button>
      </div>

      {/* FORMULARIO */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>Formulario</h2>

        <input 
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            if (e.target.value === "") {
              setError("El nombre es obligatorio");
            } else {
              setError("");
            }
          }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>Hola, {nombre}</p>
      </div>

      {/* HORA */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>Hora actual</h2>
        <h3>{hora.toLocaleTimeString()}</h3>
      </div>

      {/* 🔵 USUARIOS */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>Usuarios</h2>

        {/* 🔥 LOADING */}
        {loading && <p>Cargando usuarios...</p>}

        {/* 🔥 ERROR */}
        {errorFetch && <p style={{ color: "red" }}>{errorFetch}</p>}

        {/* 🔥 LISTA */}
        {!loading && !errorFetch && (
          <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
            {usuarios.map((usuario) => (
              <li key={usuario.id} style={{
                backgroundColor: "white",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px"
              }}>
                <strong>{usuario.name}</strong>
                <br />
                <small>{usuario.email}</small>
              </li>
            ))}
          </ul>
        )}

      </div>

    </div>
  );
}

export default App;