import Formulario from "./Formulario";
import Spinner from "./Spinner";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";

const AppClima = () => {
  const { resultado, cargando, noResultado } = useClima();

  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {cargando ? (
          <Spinner />
        ) : Object.values(resultado).length > 0 ? (
          <Resultado />
        ) : noResultado ? (
          <p>{noResultado}</p>
        ) : (
          <p>El clima se va a mostrar aquí</p>
        )}
      </main>
    </>
  );
};

export default AppClima;
