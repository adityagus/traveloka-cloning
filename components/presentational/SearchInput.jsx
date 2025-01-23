"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const onSearch = (event) => {
    event.preventDefautt();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
    console.log("current query", encodedSearchQuery);
  };
  return (
    <form className=" bg-fuchsia-400 flex justify-center w-2/3" onSubmit={onSearch}>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="px-5 ру-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 Obg-zinc-8"
        placeholdere="what are you looking for?"
      />
    </form>
  );
};
export default SearchInput;
