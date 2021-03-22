import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/core/SearchIcon";

function PeopleSearch({ onSearch }) {
  const [text, setText] = useState("");

  return (
    <form>
      <InputBase
        placeholder="People Search"
        value={text}
        onCHange={(e) => setText(e.target.value)}
        autofocus
      />
      <IconButton onClick={() => onSearch(text)}>
        <SearchIcon />
      </IconButton>
    </form>
  );
}

export default PeopleSearch;
