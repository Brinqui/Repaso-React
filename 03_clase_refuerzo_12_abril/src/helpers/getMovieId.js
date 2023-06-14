const getMovieId = async (movieId) => {
    const apikey = "4ed8682099c1464af23d96c906f5ef45";
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export default getMovieId;
  