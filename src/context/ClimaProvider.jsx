import { createContext, useState } from "react";
import axios from "axios";

const ClimaContext = createContext();

function ClimaProvider({ children }) {
  const [busquedad, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  const [noResultado, setNoResultado] = useState("")

  const datosBusqueda = (e) => {
    setBusqueda({ ...busquedad, [e.target.name]: e.target.value.trimStart() });
  };

  const consultarClima = async (datos) => {
    try {
      setNoResultado("")
      setCargando(true);
      const { ciudad, pais } = datos;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;

      const { data } = await axios(url);
      const { lat, lon } = data[0];

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

      const { data: clima } = await axios(urlClima);
      setResultado(clima);
    } catch (error) {
      console.error(error);
      setNoResultado("No hay resultados")
      setResultado({});
    }
    setCargando(false);
  };
  return (
    <ClimaContext.Provider
      value={{
        busquedad,
        datosBusqueda,
        consultarClima,
        resultado,
        cargando,
        noResultado
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
}
export { ClimaProvider };
export default ClimaContext;
