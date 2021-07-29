import { Container } from "@material-ui/core";
import queryString from "query-string";
import { useState } from "react";
import { useEffect } from "react";
import { apiCall } from "../../api";
import Loading from "../../components/Loading"
import CardMovieResult from "../../components/MovieResult";

const PageMovieResult = ({ location }) => {
  const [movies, setMovies] = useState(null)

  const { movieName } = queryString.parse(location.search);

  useEffect(() => {
    const getMovies = async () => {
      const result = await apiCall(`&s=${movieName}`, null, null, "GET");
      const { Search } = result.data;
      setMovies(Search)
      console.log(Search);
    };
    getMovies();
  }, [movieName]);

  return (
    <Container>
      Results
      {movies? movies.map((movie) => <CardMovieResult key={movie.imdbID} {...movie}/>) : <Loading />}
    </Container>);
};

export default PageMovieResult;
