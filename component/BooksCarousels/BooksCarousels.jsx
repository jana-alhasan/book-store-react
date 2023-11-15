import React, { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box,Typography } from "@mui/material";
import {makeStyles} from "@material-ui/core";
import styled from "@emotion/styled";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { useFavorites } from "../CustomHooks/useFavorite";
import BookCard from "../BookCard/BookCard";
import SkeletonLoader from "../Skeleton";
import "./BooksCarousels.css";


const booksPerRow = 4;
const booksPerPage = booksPerRow * 2;
let currentPage = 0;

const useStyles = makeStyles((theme) => ({
  swiperContainerWrapper: {
    margin: "0 20px",
    padding: "0 0 7% 0",
  },
  mySwiper: {
    width: "80%",

    "& .swiper-button-next, & .swiper-button-prev": {
      color: "#937dc2",
      "--swiper-navigation-size": "24px",
      border: "1px solid #937dc2",
      borderRadius: "50%",
      padding: "5px 8px",
    },

    "& .swiper-pagination-bullet": {
      backgroundColor: "#636265",
      width: "12px",
      height: "12px",
      position: "relative",
    },

    "& .swiper-pagination-bullet-active": {
      backgroundColor: "#937dc2",
    },
  },
  swiper: {
    padding: "3%",
  },
  cardMediaRoot: {
    objectFit: "initial",
  },
  styledBox: {
    fontSize: "2.3rem",
    fontWeight: 500,
    margin: "5% 11% 0",
  },
}));

const StyledBox = styled(Typography)`
  font-size: 2.3rem;
  font-weight: 500;
  margin: 5% 11% 0;
`;


const swiperSettings = {
  modules: [
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
  ],
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  navigation: true,
  pagination: { clickable: true },
  className: "mySwiper",
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
};

const BooksCarousels = ({ carusalTitle }) => {
  const classes=useStyles();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { favorites, setFavorites, isBookInFavorites, handleFavoriteClick } = useFavorites();

  const memoizedBooks = useMemo(() => books, [books]);

  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${
          process.env.REACT_APP_BOOKS_API
        }?q=science+fiction&filter=paid-ebooks&startIndex=${
          currentPage * booksPerPage
        }&maxResults=10&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const fetchedBooks = data.items || [];
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedFavorites = getStoredFavorites();
    setFavorites(storedFavorites);
    fetchBooks();
  }, [setFavorites]);

  useEffect(() => {
    saveFavoritesToLocalStorage(favorites);
  }, [favorites]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const getStoredFavorites = () => {
    try {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        return JSON.parse(storedFavorites);
      }
      return [];
    } catch (error) {
      console.error("Error parsing favorites from localStorage:", error);
      return [];
    }
  };

  const saveFavoritesToLocalStorage = (favorites) => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites to localStorage:", error);
    }
  };

  return (
    <Box className={classes.swiperContainerWrapper}>
        <StyledBox>{carusalTitle}</StyledBox>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <Swiper {...swiperSettings}>
          {memoizedBooks.length > 0 &&
            memoizedBooks.map((book) => (
              <SwiperSlide key={book.id}>
                <BookCard
                  book={book}
                  isBookInFavorites={isBookInFavorites}
                  handleFavoriteClick={handleFavoriteClick}
                  favorites={favorites}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </Box>
  );
};

export default BooksCarousels;
