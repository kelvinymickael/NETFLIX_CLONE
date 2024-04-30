// Hooks:
import { useState } from "react";

// Material-ui:
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

// CSS:
import "./styles.css";

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleClickLeftArrow = () => {
    let valueScrollLeft = scrollX + Math.round(window.innerWidth / 2);
    if (valueScrollLeft > 0) {
      valueScrollLeft = 0;
    }
    setScrollX(valueScrollLeft);
  };

  const handleClickRightArrow = () => {
    let valueScrollRight = scrollX - Math.round(window.innerHeight / 2);
    let listWidth = items.results.length * 154;
    if (window.innerWidth - listWidth > valueScrollRight) {
      valueScrollRight = window.innerWidth - listWidth;
    }
    setScrollX(valueScrollRight);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleClickLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleClickRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: `${scrollX}px`,
            minWidth: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((result, key) => (
              <div className="movieRow--item" key={key}>
                {/* Capa do filme: */}
                <img
                  src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
                  alt={result.original_name}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
