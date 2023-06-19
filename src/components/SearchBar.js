import React from "react";
import { SearchNormal1 } from "iconsax-react";

const SearchBar = () => {
  return (
    <div className="flex gap-2 bg-bg-light h-[45px] items-center p-4 min-w-[420px] rounded-md">
      <SearchNormal1 />
      <input
        placeholder="Search for anything..."
        className="bg-inherit outline-none"
      />
    </div>
  );
};

export default SearchBar;
