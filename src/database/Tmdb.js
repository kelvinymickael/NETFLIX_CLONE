/* 
- Lista de Filmes:

- Originais da Netflix
- Recomendados (trending)
- Em alta (top rated)
- Ação
- Comédia
- Terror
- Romance
- Documentários
*/

const basicFetch = async (endpoint) => {
  // Fazendo uma requisição para um serviço externo:
  const res = await fetch(`${import.meta.env.VITE_API_BASE}${endpoint}`);
  // Pegando o JSON dessa requisição:
  const data = await res.json();

  return data;
};

export default {
  // Criando uma função assíncrona:
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`);
          break;
        case "tv":
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`);
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
