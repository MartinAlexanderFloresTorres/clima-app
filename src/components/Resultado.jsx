import React from "react";
import useClima from "../hooks/useClima";
import { formatearTemperatura } from "../helpers";

const Resultado = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;
  return (
    <div className="contenedor clima">
      <h2>
        El Clima de {name} es: {}{" "}
      </h2>
      <p>
        {formatearTemperatura(main?.temp)}
        <span>&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p>
          Min: {formatearTemperatura(main?.temp_min)}
          <span>&#x2103;</span>
        </p>
        <p>
          Max: {formatearTemperatura(main?.temp_max)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;
