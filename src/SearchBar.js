const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <form className="searchbar">
      <input
        type="text"
        className="searchbar__input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
      <button type="submit" className="searchbar__btn"></button>
    </form>
  );
};

export default SearchBar;
