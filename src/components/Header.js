import logo from "../images/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" alt="logo" src={logo}></img>
      <h1 className="header__title"> Task List</h1>
    </header>
  );
};
