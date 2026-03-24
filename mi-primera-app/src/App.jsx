// src/App.jsx

import ProfileCard from "./components/ProfileCard";
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

      {/* Contenedor de las tarjetas */}
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

    </div>
  );
}

export default App;