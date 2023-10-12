import { FC } from "react";
import { Input } from "./ui/input";

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <Input
      type="search"
      placeholder="Search..."
      className="md:w-[100px] lg:w-[300px]"
    />
  );
};

export default Search;
