import { useRef, useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskList from "./TaskList";

function SearchBar() {
  const [query, setQuery] = useState("");
  // useRef to persist reference to the search input
  const searchRef = useRef(null);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={handleSearch}
      />
      <TaskList query={query} />
    </div>
  );
}

export default SearchBar;