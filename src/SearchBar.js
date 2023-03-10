import searchIcon from "./images/search.svg";

const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <form className="searchbar">
      <input
        placeholder="Search in tasks"
        type="text"
        className="searchbar__input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
      <img alt="search icon" className="searchbar__icon" src={searchIcon}></img>
    </form>
  );
};

export default SearchBar;
