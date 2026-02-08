import React from "react";

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-xl ring-1 ring-orange-400  bg-orange-400/20 px-2 shadow-lg">
      <input
        type="search"
        placeholder="Search..."
        className="flex-1 bg-transparent text-sm outline-none p-1"
      />
      <span className="text-md cursor-pointer">🌍</span>
    </div>
  );
};

export default SearchBar;
