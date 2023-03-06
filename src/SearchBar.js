import React from "react";

const SearchBar = () => {
  return (
    <form className="searchbar">
      <input type="text" className="searchbar__input"></input>
      <button type="submit" className="searchbar__btn"></button>
    </form>
  );
};

export default SearchBar;
