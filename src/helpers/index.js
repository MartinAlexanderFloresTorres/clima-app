/**
 * Funcion que retorna los temperatura de kelvin
 * @param {*} temperatura 
 * @returns temperatura
 */
export const formatearTemperatura = (temperatura = 0) => {
  const kelvin = 273.15
  return parseInt(temperatura - kelvin)
}