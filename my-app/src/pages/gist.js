import debounce from "lodash.debounce";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getGists,
  gistsSelector,
  gistsByNameSelector,
  getGistsByName,
} from "../store/gists";
import './gist.css';


export function GistsPage() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { gistError, gistPending, gists } = useSelector(gistsSelector);
  const { gistsByName, gistByNameError, gistByNamePending } =
    useSelector(gistsByNameSelector);

  const searchDebounced = useMemo(() => {
    return debounce((query) => dispatch(getGistsByName(query)), 1500);
  }, [dispatch]);

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists());
      //dispatch(getGists("bogdanq"))
    }
  }, [dispatch, gists]);

  useEffect(() => {
    if (search) {
      searchDebounced(search);
    }
  }, [searchDebounced, search]);

  if (gistPending) {
    return <h1 className={"gist-padge"}>Loading ...</h1>;
  }
  if (gistError) {
    return <h1 className={"gist-padge"}>Error</h1>;
  }

  if (gistByNamePending) {
    return <h1 className={"gist-padge"}>Loading gistByNamePending...</h1>;
  }
  if (gistByNameError) {
    return (
      <div className={"gist-padge"}>
         <h1>ERROR 404</h1>
        <h1>Error gistByNameError</h1>
        <h1>Search</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    );
  }

  return (
    <div className={"gist-padge"}>
      <h1 className={"gist-btn"}>Gists</h1>
      {gists?.map((gist) => (
        <h2 key={gist.url}>{gist.url}</h2>
      ))}

      <button className={"gist-btn"} onClick={() => dispatch(getGists(1))}>1</button>
      <button className={"gist-btn"} onClick={() => dispatch(getGists(2))}>2</button>
      <button className={"gist-btn"} onClick={() => dispatch(getGists(3))}>3</button>

      <hr />

      <h1>Search</h1>
      <input className={"gist-btn"} value={search} onChange={(e) => setSearch(e.target.value)} />
      <hr />

      {gistsByName?.map((gist) => (
        <h2 key={gist.url}>{gist.url}</h2>
      ))}
    </div>
  );
}
