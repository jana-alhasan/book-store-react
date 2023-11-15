import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useDebounce from "../CustomHooks/useDebounce";

const SearchResult = () => {
  const [searchTerm, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const debouncedSearchTerm = useDebounce(searchTerm, 200);
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const searches = async () => {
      try {
        setIsLoading(true);
        const respond = await axios.get(process.env.REACT_APP_BOOKS_API, {
          params: {
            q: debouncedSearchTerm,
            maxResults: 10,
          },
        });
        const results = respond.data.items || [];
        setResult(results);

        navigate("/search", { state: { results } });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (debouncedSearchTerm) {
      searches();
    }
  }, [debouncedSearchTerm, navigate,isLoading]);

  return {
    handleInputChange,
    searchTerm,
  };
};

export default SearchResult;
