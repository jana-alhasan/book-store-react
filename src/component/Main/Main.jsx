import React from "react";
import styles from "./style.module.css";
import { Typography, Box, Button } from "@material-ui/core";
import { LocalShipping, Star } from "@material-ui/icons";

const Main = () => {
  return (
    <>
      <Box className={styles.cFlex}>
        <Box className={`${styles.BookView} ${styles.hFlex}`}>
          <Box className={`${styles.cFlex} ${styles.information}`}>
            <Box className={styles.augAuth}>
              <Typography variant="body1" className={styles.augPargh}>
                Author of august
              </Typography>
            </Box>
            <Typography variant="h4" className={styles.headerBook}>
              Eric-Emanuel schmitt
            </Typography>
            <Typography variant="body2" className={styles.descriptionOfTheBook}>
              Eric-Emmanuel Schmitt has been awarded more than 20 literary
              prizes and distinctions, and in 2001 he received the title of
              Chevalier des Arts et des Lettres. His books have been translated
              into over 40 languages.
            </Typography>
            <Button className={styles.view}>View his books</Button>
          </Box>
          <Typography variant="body1" className={styles.discount}>
            Autographed books + 30% discount
          </Typography>
          <Box className={styles.thumbinal}>
            <img
              src="../images/main-page/thumb.png"
              className={styles.thumImg}
              alt="Thumbnail"
            />
            <Typography variant="body2" className={styles.limit}>
              *within the stock limit
            </Typography>
          </Box>
        </Box>
        <Box className={`${styles.choices} ${styles.hFlex}`}>
          <LocalShipping className={styles.icon} />
          <Typography variant="body1" className={styles.choiceP}>
            Free shipping over 50$
          </Typography>
          <Box className={styles.verticalLineCh}></Box>
          <Star className={styles.icon} />
          <Typography variant="body1" className={styles.choiceP}>
            Save with loyalty points
          </Typography>
          <Box className={styles.verticalLineCh}></Box>
          <img src="../images/main-page/Book open.svg" alt="Book Open Icon" />
          <Typography variant="body1" className={styles.choiceP}>
            Read a few pages
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Main;
