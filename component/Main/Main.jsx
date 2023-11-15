import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import { LocalShipping, Star } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    "&.MuiGrid-container": {
      width: "90%",
      margin: '2% 0 0 12%'
    },
  },
    BookInfo: {
      "&.MuiGrid-container": {
        marginTop: '20%',
      },

    },
 
  augAuth: {
    borderRadius: "3.004px",
    border: "1px solid #937DC2",
    color: "#937DC2",
    fontSize: "16px",
    fontWeight: "400",
    padding: "10% 6%",
    width:'100%',
  },

  augPargh: {
    textAlign: "center",
  },

  headerBook: {
    "&.MuiTypography-root": {
      color: "black",
      fontWeight: "700",
      marginBottom: "1%",
    },
  },
  descriptionOfTheBook: {
    "&.MuiTypography-root": {
      color: "#4D4C4C",
      lineHeight: "24.033px",
      width: "73%",
      // marginBottom: "3%",
    },
  },
  view: {
    "&.MuiButton-contained": {
      borderRadius: "2.003px",
      backgroundColor: "#937DC2",
      color: "white",
      border: "1px solid #937DC2",
      padding: "2% 2%",
      textWrap: 'nowrap',
      marginTop:'6%',
      "&:hover": {
        backgroundColor: "#482c83",
    
      },
      
    },
  },
  discount: {
    "&.MuiTypography-root": {
      color: "rgba(32, 31, 31, 0.8)",
      textTransform: "uppercase",
      fontSize: "20px",
      fontWeight: "400",  
      marginTop: '80%',
    },
  },
 

  limit: {
    color: "#313131",
    fontSize: "16px",
    lineHeight: "24.033px",
    alignSelf: "end",
  },
  choices: {
    "&.MuiGrid-container": {
      gap: "2%",
    },
  },
  choiceP: {
    "&.MuiTypography-root": {
      color: "black",
      fontSize: "24px",
      fontWeight: "600",
    },
  },
  verticalLineCh: {
    backgroundColor: "#937DC2",
    width: "1.001px",
    height: "70.111px",
  },
  icon: {
    "&.MuiSvgIcon-root": {
      fontSize: "50px",
    },
  },
}));

const MainBookSection = () => {
  const classes = useStyles();

  return (
    <Grid container
    justifyContent="center"
    alignItems="center"
     spacing={3} 
    >
      <Grid item md={12} lg={12}>
        <Grid container 
         className={classes.mainGrid}
        justifyContent="center">
          <Grid item xs={12} sm={12} md={4} lg={5}>
            <Grid
              container           
              spacing={5}
              columns={{ xs: 3, sm: 4, md: 5, lg: 3 }}
              className={classes.BookInfo}
             
            >
              <Grid item>
                <Box className={classes.augAuth}>
                  <Typography className={classes.augPargh}>
                    Author of augest
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant="h3" className={classes.headerBook}>
                  Eric-Emanuel schmitt
                </Typography>
                <Typography className={classes.descriptionOfTheBook}>
                  Eric-Emmanuel Schmitt has been awarded more than 20 literary
                  prizes and distinctions, and in 2001 he received the title of
                  Chevalier des Arts et des Lettres. His books have been
                  translated into over 40 languages.
                </Typography>
                
                <Button variant="contained" className={classes.view}>
                  view his boooks
                </Button>
              </Grid>

            
            
            </Grid>
          </Grid>

          <Grid item md={4} lg={1}>
            <Typography className={classes.discount}>
              Autographed books + 30% discount
            </Typography>
          </Grid>

          <Grid item md={4} lg={5}>
            <img src="../images/main-page/thumb.png" alt="Thumbnail" 
          />
          </Grid>
        </Grid>
      </Grid>

      <Grid item lg={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.choices}
        >
          <LocalShipping className={classes.icon} />
          <Typography nowrap variant="body1" className={classes.choiceP}>
            Free shipping over 50$
          </Typography>
          <Box className={classes.verticalLineCh}></Box>
          <Star className={classes.icon} />
          <Typography variant="body1" className={classes.choiceP}>
            Save with loyalty points
          </Typography>
          <Box className={classes.verticalLineCh}></Box>
          <img src="../images/main-page/Book open.svg" alt="Book Open Icon" />
          <Typography variant="body1" className={classes.choiceP}>
            Read a few pages
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default MainBookSection;

// //{" "}
// </Grid>
//       <Grid
//     container
//     direction="row"
//     justifyContent= "center"
//     alignItems= "center"
//    className={classes.choices}
//    >
//       <LocalShipping className={classes.icon} />
//       <Typography nowrap variant="body1" className={classes.choiceP}>
//         Free shipping over 50$
//       </Typography>
//       <Box className={classes.verticalLineCh}></Box>
//       <Star className={classes.icon} />
//       <Typography variant="body1" className={classes.choiceP}>
//         Save with loyalty points
//       </Typography>
//       <Box className={classes.verticalLineCh}></Box>
//       <img src="../images/main-page/Book open.svg" alt="Book Open Icon" />
//       <Typography variant="body1" className={classes.choiceP}>
//         Read a few pages
//       </Typography>
//   </Grid>
//       </Grid>

//        <Box className={classes.augAuth} mt="2%">
//       <Typography className={classes.augPargh}>Author of augest</Typography>
//       </Box>
//       <Typography variant="h3" className={classes.headerBook }>Eric-Emanuel schmitt</Typography>
//       <Typography className={classes.descriptionOfTheBook}>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</Typography>
//       <Button
//       variant="contained"
//       className={classes.view}>view his boooks</Button>

//     <Typography className={classes.discount}>Autographed books + 30% discount</Typography>
//       <Box className={classes.thumbinal}>
//       <img
//           src="../images/main-page/thumb.png"
//           alt="Thumbnail"
//         />
//       </Box>

//   </Grid>

// </Grid >
