import { useQuery } from "react-query";
import Seo from "../components/Seo";

const API_KEY = "fbd978aee26f62ff878703caa3fed923";

interface IGetPopularMoviesProps {
  page: number;
  results: IMovieProps[];
  total_pages: number;
  total_results: number;
}

interface IMovieProps {
  id: number;
  original_title: string;
}

const fetchPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  return res.json();
};

export default function Home() {
  const { data, isLoading } = useQuery<IGetPopularMoviesProps>(
    "popularMovies",
    fetchPopularMovies
  );

  return (
    <div>
      <Seo title="Home" />
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        data?.results.map(movie => {
          return (
            <div key={movie.id}>
              <h4>{movie.original_title}</h4>
            </div>
          );
        })
      )}
    </div>
  );
}
