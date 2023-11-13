import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate}from "react-router-dom";

import {

  IconButton,
  InputAdornment,
  TextField,
 
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchBar = () => {
  const [searchTerm, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  // Adjust the delay according to your needs (e.g., 200 milliseconds)
  const debouncedSearchTerm = useDebounce(searchTerm, 200);

  useEffect(() => {
    const searches = async () => {
      const respond = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: debouncedSearchTerm,
            maxResults: 10,
          },
        }
      );
      const results = respond.data.items || [];
      setResult(results);

      navigate("/search", { state: { results } });
    };

    if (debouncedSearchTerm) {
      searches();
    } else {
      navigate("/");
    }
  }, [debouncedSearchTerm, navigate]);

  return (  
    <>
  <TextField
    size="small"
    label="Type any book here"
    variant="filled"
    value={searchTerm}
    onChange={(e) => setSearch(e.target.value)}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton>
            <Search />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
 
    </>
  

);
}
 
export default SearchBar;