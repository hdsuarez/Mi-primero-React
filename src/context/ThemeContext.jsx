// ===============================
// IMPORTACIONES
// ===============================
import { createContext, useState, useEffect } from "react";

// ===============================
// CREACIÓN DEL CONTEXTO
// ===============================
export const ThemeContext = createContext();

// ===============================
// PROVIDER GLOBAL
// ===============================
export function ThemeProvider({ children }) {

  // Estado global del tema
  // Se inicializa leyendo localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Guardar el tema cada vez que cambie
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}