import { useState } from "react";
import { Outlet } from "react-router-dom";
import Input from "../components/input/input";

const SearchPage = () => {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <>
      <Input
        name={"search"}
        placeholder={"Username"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Outlet />
    </>
  );
};

export default SearchPage;
