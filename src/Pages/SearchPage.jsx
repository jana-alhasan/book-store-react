import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";
import { ShoppingCart, FavoriteBorder } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
const SearchPage = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] };
  return (
    <Grid style={{ width: "90%" }} container spacing={50}>
      {results.map((book) => (
        <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
          <Card style={{ maxWidth: 274, marginTop: "30px" }}>
            <CardMedia
              component="img"
              alt={book.volumeInfo.title || "No Title"}
              height="414px"
              width="274px"
              image={
                book.volumeInfo.imageLinks?.thumbnail ||
                "../images/book-slider/prin-img.png"
              }
            />
            <CardContent style={{ boxShadow: "none" }}>
              <Typography
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
                variant="subtitle1"
              >
                {book.volumeInfo.title || "No Title"}
              </Typography>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
                variant="body2"
                color="text.secondary"
              >
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "No authors"}
              </Typography>
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{ fontSize: "20px", fontWeight: "600" }}
                  variant="body2"
                >
                  ${book.saleInfo?.retailPrice?.amount || "N/A"}
                </Typography>
                <FavoriteBorder />
              </Box>
              <Button
                style={{
                  backgroundColor: "#937DC2",
                  width: "100%",
                  height: "48px",
                  marginTop: "12%",
                  borderRadius: "2px",
                  color: "white",
                }}
              >
                <ShoppingCart />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchPage;
