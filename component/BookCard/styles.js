// BookCardStyles.js
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    '&.MuiCard-root': { 
    maxWidth: 274,
    marginTop: theme.spacing(3),
    },
  },
  cardContent: {

    '&.MuiCardContent-root': { 
    boxShadow: "none",
    },
  },
  title: {
    '&.MuiTypography-root': { 
    fontSize: "24px",
    fontWeight: "600",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    },
  },
  authors: {
    '&.MuiTypography-root': { 
    fontSize: "16px",
    fontWeight: "400",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    },
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  price: {
    '&.MuiTypography-root': { 
    fontSize: "20px",
    fontWeight: "600",
    }
  },
  fav: {
    color: "#937DC2",
  },
  addButton: {
    '&.MuiButton-contained':{
    backgroundColor: "#937DC2",
    width: "100%",
    height: "48px",
    marginTop: "12%",
    borderRadius: "2px",
    color: "white",
  },
},
}));

export default useStyles;
