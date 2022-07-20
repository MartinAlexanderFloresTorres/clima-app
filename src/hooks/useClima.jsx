import { useContext } from "react";
import ClimaContext from "../context/ClimaProvider";

function useClima() {
  return useContext(ClimaContext);
}

export default useClima;
