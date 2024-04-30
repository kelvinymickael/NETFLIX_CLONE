// Data TMDB:
import Tmdb from "./database/Tmdb";

// Components:
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Hooks:
import { useEffect, useState } from "react";

// CSS:
import "./App.css";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Utilizando o Tmdb para pegar a lista dos nossos filmes:
      let movieList = await Tmdb.getHomeList();
      setMovieList(movieList);

      // Pegando o filme em destaque dos originais da netflix:
      let originalsNetflix = movieList.filter(
        (film) => film.slug === "originals"
      );

      console.log(originalsNetflix);

      // Pegando um filme aleatório:
      // Gerando um número aleatório:
      let randomChosen = Math.floor(
        Math.random() * (originalsNetflix[0].items.results.length - 1)
      );

      // Pegando o filme específico que eu quero:
      let chosen = originalsNetflix[0].items.results[randomChosen];

      // Pegando informações adicionais do filme escolhido:
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");

      console.log(chosenInfo);

      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    // Removendo o evento quando a gente sair da página:
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [blackHeader]);

  return (
    <>
      <div className="page">
        <Header black={blackHeader} />

        {featuredData && <FeaturedMovie item={featuredData} />}

        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>

        <Footer />

        {movieList.length == 0 && (
          <div className="loading">
            <img
              src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
              alt="Carregando"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
