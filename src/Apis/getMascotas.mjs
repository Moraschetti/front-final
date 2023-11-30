import axios from "axios";
export const baseUrl = 'http://localhost:3001/';

export const getMascotas = async (pageNumber) => {
  try {
    const response = await axios.get( baseUrl+`pets/filter__${pageNumber}` );
    const data = response.data;
    return data;
  } catch (error) {
    <h1> Error inesperado del servidor </h1>
  }
};
export const getNewPets = async() => {
  try {
    const response = await axios.get( baseUrl +'pets/newPets');
    const data = response.data;
    return data
  } catch (error) {
    <h1> Error inesperado del servidor </h1>
  }
}