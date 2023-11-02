import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleOnChange = (e: { target: { value: string } }) => {
    setSearchQuery(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && searchQuery) {
      navigate(searchQuery);
    }
  };

  const handleSearch = () => {
    if (searchQuery) {
      navigate(searchQuery);
    }
  };

  return (
    <div className="flex flex-col justify-end items-center h-[50vh] mb-2 max-w-screen border-10  overflow-x-hidden">
      <h1 className="text-[48px] mb-10">News Lister</h1>
      <div className="flex justify-center items-center gap-x-2">
        <input
          type="text"
          placeholder="Enter Search text here"
          className="border rounded-[100px] p-3 w-[500px] m-1"
          onChange={(e) => handleOnChange(e)}
          onKeyDown={(e) => handleEnter(e)}
        />
        <button
          className="bg-green-500 w-fit text-white rounded-[100px] px-4 py-3"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};
