import SearchIcon from "../assets/icons/search.png";

const SearchInput = () => {
  return (
    <div className="flex gap-x-4 items-center border-2 mx-auto mt-5 rounded-xl px-3 py-2 border-black">
      <img src={SearchIcon} alt="search" width={20} height={20} />
      <input
        placeholder="Search ..."
        className="bg-transparent outline-none mx-3 flex-1"
      ></input>
    </div>
  );
};

export default SearchInput;
