import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "react-router-dom";
import Swipers from "../../component/Swipers/Swipers";
import axios from "axios";
import "./Product.css";

const Product = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes",
          {
            params: {
              q: bookId,
              key: "AIzaSyCHqFdi4kZArpkxKfcG5iJ3Z8dzN256d1o",
            },
          }
        );

        if (
          response.status === 200 &&
          response.data.items &&
          response.data.items.length > 0
        ) {
          const fetchedBook = response.data.items[0].volumeInfo;

          setBook({
            title: fetchedBook.title || "Chain of Gold: The Last Hours #1",
            authors: fetchedBook.authors
              ? fetchedBook.authors.join(", ")
              : "No Authors",
            price:
              fetchedBook.saleInfo && fetchedBook.saleInfo.retailPrice
                ? `$${fetchedBook.saleInfo.retailPrice.amount}`
                : "12.45$",
            description: fetchedBook.description || "No Description Available",
            imageUrl: fetchedBook.imageLinks
              ? fetchedBook.imageLinks.thumbnail
              : "../images/book-slider/prin-img.png",
          });
        } else {
          console.error("Failed to fetch book details:", response.status);
          // Handle the error, e.g., redirect to an error page or show a message to the user
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBookDetails();
  }, [bookId]);
  if (!book) {
    // If book is still null, return a loading indicator or null
    return null;
  }
  return (
    <>
      <Box component="section">
        <Box className="book-container">
          <Box className="images-to-skip">
            <Box className="book-item">
              <img
                src="../images/book-slider/s3.png"
                className="book-item-img"
                alt="Book Cover 1"
              />
            </Box>
            <Box className="book-item">
              <img
                src="../images/book-slider/s4.png"
                className="book-item-img"
                alt="Book Cover 2"
              />
            </Box>
            <Box className="book-item">
              <img
                src="../images/book-slider/s2.png"
                className="book-item-img"
                alt="Book Cover 3"
              />
            </Box>
            <Box className="book-item">
              <img
                src="../images/book-slider/s1.png"
                className="book-item-img"
                alt="Book Cover 4"
              />
            </Box>
          </Box>

          <Box className="principle-image">
            <img
              src={book.imageUrl}
              className="cover-image"
              alt="Principal Image"
            />
          </Box>
          <Box className="book-details">
            <Typography
              style={{ fontWeight: "700", fontSize: "2rem" }}
              className="title"
            >
              {book.title}
            </Typography>
            <Typography style={{ margin: "1% 0" }} className="author">
              {book.authors}
            </Typography>
            <Box className="rating" id="rating">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <span id="rate-number">4</span>
            </Box>
            <Typography
              style={{ fontWeight: "600", fontSize: "20px", margin: "5% 0 0" }}
              className="price"
            >
              $12.45
            </Typography>
            <Typography style={{ margin: "2% 0" }} className="description">
              {book.description}
            </Typography>
            <Box>
              <IconButton>
                <RemoveIcon
                  style={{ border: "1px solid gray", borderRadius: "50%" }}
                />
              </IconButton>
              <span className="counter">1</span>
              <IconButton>
                <AddIcon
                  style={{ border: "1px solid gray", borderRadius: "50%" }}
                />
              </IconButton>
            </Box>
            <Box className="add-cart-fav">
              <Button
                variant="contained"
                color="secondary"
                className="cart"
                startIcon={<AddShoppingCartIcon />}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="favorite"
                startIcon={<FavoriteIcon />}
              >
                Favorite
              </Button>
            </Box>
            <Box className="more-info">
              <Box className="more-info-right">
                <Typography variant="body2" className="info-title">
                  Publisher :{" "}
                  <span className="info-content" id="publisher">
                    {" "}
                    Maragaret K. Books
                  </span>
                </Typography>
                <Typography variant="body2" className="info-title">
                  Language :{" "}
                  <span className="info-content" id="lang">
                    {" "}
                    English
                  </span>
                </Typography>
                <Typography variant="body2" className="info-title">
                  Print length :{" "}
                  <span className="info-content" id="length">
                    {" "}
                    592 pages
                  </span>
                </Typography>
              </Box>
              <Box className="more-info-left">
                <Typography variant="body2" className="info-title">
                  Publication date :{" "}
                  <span className="info-content" id="date">
                    {" "}
                    March 3, 2020
                  </span>
                </Typography>
                <Typography variant="body2" className="info-title">
                  Reading age : <span className="info-content"> 14+ </span>
                </Typography>
                <Typography variant="body2" className="info-title">
                  Dimensions :{" "}
                  <span className="info-content"> 6 x 1.8 x 9 inches</span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography
        style={{ fontSize: "2.3rem", fontWeight: "500", margin: "7% 11% 0" }}
      >
        Collection
      </Typography>
      <Swipers />
    </>
  );
};

export default Product;
