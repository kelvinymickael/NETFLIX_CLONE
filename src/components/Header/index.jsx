// CSS:
import "./styles.css";

// Images:
import logoNetflix from "../../assets/netflixLogo.svg";
import avatarProfile from "../../assets/avatarProfile.jpg";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <img src={logoNetflix} alt="Logo da netflix" />
      </div>
      <div className="header--user">
        <img src={avatarProfile} alt="Imagem de perfil do usuário" />
      </div>
    </header>
  );
};

export default Header;
