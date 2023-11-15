import MainBookSection from "../component/Main/Main";
import BooksCarousels from "../component/BooksCarousels/BooksCarousels";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid container spacing={3} >
     <Grid item xs={12} sm={12} md={12} lg={12}>
        <MainBookSection />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
      <BooksCarousels carusalTitle={"Selected For You"}/>
      <BooksCarousels carusalTitle={"You Must buy it now"} />
      </Grid>
  
     
    </Grid>
  );
};

export default Home;
