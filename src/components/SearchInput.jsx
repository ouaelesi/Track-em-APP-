import React from "react";
import SearchIcon from "../assets/icons/search.png";
const SearchInput = () => {
  return (
    <div className="flex border-2 w-9/12 mx-auto mt-5 rounded-xl px-3 py-2 border-gray-300">
      <img src={SearchIcon}></img>
      <input
        placeholder="Search ..."
        className="bg-transparent outline-none mx-3 "
      ></input>
    </div>
  );
};

export default SearchInput;
