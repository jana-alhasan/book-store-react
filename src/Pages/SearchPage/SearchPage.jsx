import React from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useFavorites } from "../../component/CustomHooks/useFavorite";
import BookCard from "../../component/BookCard/BookCard";
import useStyles from "./styles"; 





const SearchPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const { results } = location.state|| { results: [] };
  const { favorites, isBookInFavorites, handleFavoriteClick } = useFavorites();
  


  return (
    <Grid className={classes.root} container spacing={3}>
      {results.map((book) => (
        <Grid key={book.id} item xs={12} sm={6} md={4} lg={3}>
          <BookCard
            book={book}
            isBookInFavorites={isBookInFavorites}
            handleFavoriteClick={handleFavoriteClick}
            favorites={favorites}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchPage;
