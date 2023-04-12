const getPersonajes = async () => {
  const url = "https://swapi.dev/api/people/";
  try {
    const response = await fetch(url);
    const datos = await response.json();
    console.log(datos);
    return datos.results;
  } catch (error) {
    console.log(error);
  }
};

export default getPersonajes;