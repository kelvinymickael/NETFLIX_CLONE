// CSS:
import "./styles.css";

const FeaturedMovie = ({ item }) => {
  console.log(item);

  let genres = [];
  for (let genre of item.genres) {
    genres.push(genre.name);
  }

  let description = item.overview;

  if (description.length > 200) {
    description = `${description.substring(0, 205)}...`;
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <h1 className="featured--name">{item.original_name}</h1>
          <div className="featured--infos">
            <span className="featured--points">
              {item.vote_average.toFixed(1)} pontos
            </span>
            <span className="featured--year">
              {item.first_air_date.slice(0, 4)}
            </span>
            <span className="featured--seasons">
              {item.number_of_seasons > 1
                ? `${item.number_of_seasons} temporadas`
                : `${item.number_of_seasons} temporada`}
            </span>
          </div>
          <div className="featured--description">
            <p>{description}</p>
          </div>
          <div className="featured--buttons">
            <button className="featured--watchbutton">► Assistir</button>
            <button className="featured--mylistbutton">+ Minha Lista</button>
          </div>
          <div className="featured--genres">
            <strong>Gêneros: </strong>
            <span>{genres.join(", ")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
