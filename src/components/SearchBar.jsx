import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const searchInputRef = useRef(null);

  const handleClearSearch = () => {
    setSearchQuery("");
    searchInputRef.current.focus();
  };

  const handleSearchIconClick = () => {
    searchInputRef.current.focus();
  };

  return (
    <div className="absolute top-[9%] left-[50%] sm:left-[24%] transform -translate-x-1/2 sm:translate-x-0 flex items-center bg-white/10 rounded-md px-3 py-2 w-full sm:w-1/3 max-w-[450px]">
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search Song, Artist"
        className="flex-1 bg-transparent text-white placeholder-white/50 outline-none px-2 tracking-wider font-extralight"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery ? (
        <FaTimes
          className="text-white/50 cursor-pointer text-xl sm:text-xl md:text-2xl p-1 "
          onClick={handleClearSearch}
        />
      ) : (
        <LuSearch
          className="text-white/50 cursor-pointer text-xl sm:text-2xl md:text-3xl p-1 "
          onClick={handleSearchIconClick}
        />
      )}
    </div>
  );
};

export default SearchBar;
