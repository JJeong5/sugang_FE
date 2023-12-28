import React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";


function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="filter" type="search" variant="standard" placeholder="검색" />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  );
  
}

export default Search;

