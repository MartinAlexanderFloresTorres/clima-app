import { useState } from "react";
import useClima from "../hooks/useClima";

const Formulario = () => {
  const { busquedad, datosBusqueda, consultarClima, cargando } = useClima();
  const { ciudad, pais } = busquedad;
  const [alerta, setAlerta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busquedad).includes("")) {
      setAlerta("Todo los campos son obligatorios");
      return;
    }
    setAlerta("");
    consultarClima(busquedad);
  };

  return (
    <div className="contenedor">
      {alerta && <p className="error">{alerta}</p>}

      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            value={ciudad}
            onChange={datosBusqueda}
            id="ciudad"
            name="ciudad"
            placeholder="Nombre de cuidad"
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select id="pais" name="pais" value={pais} onChange={datosBusqueda}>
            <option value="">--Selecione un país--</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>
        <input type="submit" value={`${!cargando ? "Consultar Clima" : "Consultando..." }`} />
      </form>
    </div>
  );
};

export default Formulario;
