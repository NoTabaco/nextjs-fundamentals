import { useQuery } from "react-query";
import Seo from "../components/Seo";

interface IGetPopularMoviesProps {
  page: number;
  results: IMovieProps[];
  total_pages: number;
  total_results: number;
}

interface IMovieProps {
  id: number;
  original_title: string;
  poster_path: string;
}

const fetchPopularMovies = async () => {
  const res = await fetch(`/api/movies`);
  return res.json();
};

export default function Home() {
  const { data, isLoading } = useQuery<IGetPopularMoviesProps>(
    "popularMovies",
    fetchPopularMovies
  );

  return (
    <div className="container">
      <Seo title="Home" />
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        data?.results.map(movie => (
          <div key={movie.id} className="movie">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))
      )}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
