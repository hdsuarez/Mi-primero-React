// ===============================
// IMPORTACIONES
// ===============================
import { useState, useEffect, useContext, useMemo, useCallback } from "react";
import { ThemeContext } from "./context/ThemeContext";
import useFetch from "./hooks/useFetch";
import ProfileCard from "./components/ProfileCard";
import UserList from "./components/UserList";
import DashboardLayout from "./components/layout/DashboardLayout";
import Card from "./components/Card";
import perfil from "./assets/perfil.jpg";

// ===============================
// COMPONENTE PRINCIPAL
// ===============================
function App() {

  // 🌗 CONTEXTO GLOBAL
  const { theme, toggleTheme } = useContext(ThemeContext);

  // 🔵 API (custom hook)
  const { data: usuarios, loading, error: errorFetch } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  // 🔍 BUSCADOR
  const [busqueda, setBusqueda] = useState("");

  // ⏰ RELOJ
  const [hora, setHora] = useState(new Date());

  // 📦 TAREAS
  const tareas = ["Aprender React", "Estudiar JS", "Ejercicio", "Proyectos"];

  // 🎯 ESTADOS
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");

  // ⏱️ EFECTO RELOJ
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // 🔥 FILTRO OPTIMIZADO
  const usuariosFiltrados = useMemo(() => {
    return usuarios.filter((u) =>
      u.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [usuarios, busqueda]);

  // 🔥 FUNCIÓN MEMORIZADA
  const resaltarTexto = useCallback((texto, busqueda) => {

    if (!busqueda) return texto;

    const regex = new RegExp(`(${busqueda})`, "gi");

    return texto.split(regex).map((parte, i) =>
      parte.toLowerCase() === busqueda.toLowerCase()
        ? <span key={i} style={{ background: "yellow" }}>{parte}</span>
        : parte
    );

  }, []);

  return (

    // 🔥 USO DEL LAYOUT
    <DashboardLayout theme={theme}>

      {/* HEADER */}
      <h1>Dashboard de Usuarios</h1>
      <p>Proyecto React con Context, Hooks y Optimización</p>

      <div style={{ marginTop: "20px", maxWidth: "600px" }}>
          <p>Este proyecto fue desarrollado con React aplicando conceptos como Context API, Custom Hooks, optimización de rendimiento y consumo de APIs.</p>
      </div>

      {/* BOTÓN TEMA */}
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Modo oscuro" : "☀️ Modo claro"}
      </button>

      {/* 🔥 CARDS RESUMEN */}
      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>

        <Card title="Usuarios" theme={theme}>
          <p>{usuarios.length}</p>
        </Card>

        <Card title="Tareas" theme={theme}>
          <p>{tareas.length}</p>
        </Card>

        <Card title="Contador" theme={theme}>
          <p>{contador}</p>
        </Card>

        <Card title="Hora" theme={theme}>
          <p>{hora.toLocaleTimeString()}</p>
        </Card>

      </div>

      {/* TARJETAS PERFIL */}
      <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
        <ProfileCard nombre="Hector" profesion="Frontend" imagen={perfil}/>
        <ProfileCard nombre="Juan" profesion="Backend" imagen={perfil}/>
      </div>

      {/* FORMULARIO */}
      <div style={{ marginTop: "40px" }}>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
        />
        <p>Hola {nombre}</p>
      </div>

      {/* CONTADOR */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setContador(contador + 1)}>Sumar</button>
      </div>

      {/* BUSCADOR */}
      <div style={{ marginTop: "40px" }}>
        <input
          placeholder="Buscar usuario..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* ESTADOS */}
      {loading && <p>Cargando...</p>}
      {errorFetch && <p>{errorFetch}</p>}

      {/* LISTA OPTIMIZADA */}
      <UserList
        usuarios={usuariosFiltrados}
        busqueda={busqueda}
        resaltarTexto={resaltarTexto}
        theme={theme}
      />

    </DashboardLayout>
  );
}

export default App;