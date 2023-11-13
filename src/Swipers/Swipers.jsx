import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { FavoriteBorder, Favorite, ShoppingCart } from '@material-ui/icons'; 
import 'swiper/css';
import { Button} from '@material-ui/core';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.css';

const booksPerRow = 4;
const booksPerPage = booksPerRow * 2;
let currentPage = 0;

const Swipers = () => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const isBookInFavorites = (book) => {
    return favorites.some((favorite) => favorite.id === book.id);
  };
  const handleFavoriteClick = (book) => {
    const isAlreadyFavorite =isBookInFavorites(book);
    if (isAlreadyFavorite) {
      // Remove the book from favorites
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== book.id);
      setFavorites(updatedFavorites);
    } else {
      // Add the book to favorites
      setFavorites((prevFavorites) => [...prevFavorites, book]);
    }
  
  };


  const fetchBooks = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=science+fiction&filter=paid-ebooks&startIndex=${currentPage * booksPerPage}&maxResults=10&key=AIzaSyCHqFdi4kZArpkxKfcG5iJ3Z8dzN256d1o`
    )
      .then((response) => response.json())
      .then((data) => {
        const fetchedBooks = data.items || [];
        setBooks(fetchedBooks);
      });
  };
  useEffect(() => {
    // Load favorites from local storage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
    fetchBooks();
  }, []);
  
  useEffect(() => {
    // Save favorites to local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  
  useEffect(() => {
    fetchBooks();
  }, []);


  return (
    <div className="swiper-container-wrapper">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20} slidesPerView={4}  loop={true} 
      navigation
      pagination={{ clickable: true}} className="mySwiper"
      breakpoints={{
        320: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
  
   >
        {books.map((book) => (
          <SwiperSlide key={book.id}  >
          
            <Card sx={{ maxWidth: 274 , boxShadow:'none'}}>
            <Link to={`/product/${book.id}`} style={{textDecoration:'none'}}>
              <CardMedia
                component="img"
                alt={book.volumeInfo.title || "No Title"}
                height="414px"
                width="274px"
                image={book.volumeInfo.imageLinks?.thumbnail || "../images/book-slider/prin-img.png"}
              />
          
              <CardContent sx={{ boxShadow:'none'}}>
                <Typography sx={{fontSize: '24px',  fontWeight: '600', overflow:'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}} variant="subtitle1">{book.volumeInfo.title || "No Title"}</Typography>
                <Typography sx={{ fontSize: '16px',  fontWeight: '400', overflow:'hidden', whiteSpace: 'nowrap', textOverflow:'ellipsis'}} variant="body2" color="text.secondary">
                  {book.volumeInfo.authors ? book.volumeInfo.authors : "No authors"}
                </Typography>
                </CardContent>
                </Link>
                <CardContent sx={{ boxShadow:'none'}}>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Typography sx={{fontSize: '20px',fontWeight: '600'}} variant="body2" >
                $20.46
                </Typography>
                {isBookInFavorites(book) ? (
                      <Favorite onClick={() => handleFavoriteClick(book)} style={{ color: '#937DC2' }} />
                    ) : (
                      <FavoriteBorder onClick={() => handleFavoriteClick(book)} />
                    )}
                </Box>
                <Button style={{ backgroundColor: '#937DC2', width:'100%' , height:'48px', marginTop:'12%', borderRadius:'2px', color:'white'}}>
                  <ShoppingCart />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
         
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipers;
