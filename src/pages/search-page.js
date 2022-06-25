/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDebounce } from "react-haiku";
import Input from "../components/input/input";
import SearchLoading from "../components/search-states/search-loading";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 1000);
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearch === "") {
      setLoading(false);
      return navigate("/search");
    }
    setLoading(true);

    setTimeout(() => {
      navigate(`/search/${debouncedSearch}`, { replace: true });
      setLoading(false);
    }, 1000);
  }, [debouncedSearch]);

  return (
    <>
      <Input
        name={"search"}
        placeholder={"Username"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? <SearchLoading /> : <Outlet />}
    </>
  );
};

export default SearchPage;
