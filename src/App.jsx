// ===============================
// IMPORTACIONES
// ===============================
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import useFetch from "./hooks/useFetch";
import ProfileCard from "./components/ProfileCard";
import perfil from "./assets/perfil.jpg";


// ===============================
// COMPONENTE PRINCIPAL
// ===============================
function App() {

  // ===============================
  // 🌗 CONTEXTO GLOBAL (DÍA 9)
  // ===============================
  const { theme, toggleTheme } = useContext(ThemeContext);

  // ===============================
  // 🔵 CUSTOM HOOK (DÍA 10)
  // ===============================
  const { data: usuarios, loading, error: errorFetch } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  // ===============================
  // 🔵 BUSCADOR (DÍA 8)
  // ===============================
  const [busqueda, setBusqueda] = useState("");

  // ===============================
  // 🟡 HORA (DÍA 6)
  // ===============================
  const [hora, setHora] = useState(new Date());

  // ===============================
  // 📦 TAREAS (DÍA 3)
  // ===============================
  const tareas = [
    "Aprender React",
    "Estudiar JavaScript",
    "Hacer ejercicio",
    "Trabajar en proyectos"
  ];

  // ===============================
  // 🟡 ESTADOS UI
  // ===============================
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");

  // ===============================
  // 🟡 RELOJ (DÍA 6)
  // ===============================
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // ===============================
  // 🔵 FILTRO (DÍA 8)
  // ===============================
  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  // ===============================
  // 🔥 RESALTAR TEXTO
  // ===============================
  function resaltarTexto(texto, busqueda) {

    if (!busqueda) return texto;

    const escapeRegExp = (string) =>
      string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(`(${escapeRegExp(busqueda)})`, "gi");

    const partes = texto.split(regex);

    return partes.map((parte, index) =>
      parte.toLowerCase() === busqueda.toLowerCase()
        ? (
          <span key={index} style={{ backgroundColor: "yellow" }}>
            {parte}
          </span>
        )
        : parte
    );
  }

  // ===============================
  // 🎨 ESTILOS DINÁMICOS (DÍA 9)
  // ===============================
  const estilos = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#121212",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "40px"
  };

  // ===============================
  // UI
  // ===============================
  return (

    <div style={estilos}>

      {/* 🌗 BOTÓN TEMA */}
      <button onClick={toggleTheme} style={{ marginBottom: "20px" }}>
        {theme === "light" ? "🌙 Modo oscuro" : "☀️ Modo claro"}
      </button>

      {/* TARJETAS */}
      <div style={{ display: "flex", gap: "20px" }}>
        <ProfileCard nombre="Hector" profesion="Frontend Developer" imagen={perfil}/>
        <ProfileCard nombre="Juan" profesion="Backend Developer" imagen={perfil}/>
        <ProfileCard nombre="Maria" profesion="UI Designer" imagen={perfil}/>
      </div>

      {/* LISTA */}
      <div style={{ marginTop: "40px" }}>
        <h2>Lista de tareas</h2>

        <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
          {tareas.map((tarea, index) => (
            <li key={index} style={{
              backgroundColor: theme === "light" ? "white" : "#1e1e1e",
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

      {/* USUARIOS */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>Usuarios</h2>

        <input
          type="text"
          placeholder="Buscar usuario..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "5px",
            width: "300px"
          }}
        />

        {loading && <p>Cargando usuarios...</p>}
        {errorFetch && <p style={{ color: "red" }}>{errorFetch}</p>}

        {!loading && !errorFetch && (
          <ul style={{ listStyle: "none", padding: 0, width: "300px" }}>
            {usuariosFiltrados.map((usuario) => (
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
        )}
      </div>

    </div>
  );
}

export default App;