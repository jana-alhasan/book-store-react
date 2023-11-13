import React, { useState } from "react";
import SearchBar from "../Search/Search";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import {
  ShoppingCart,
  Favorite,
  Person,
  Menu as MenuIcon,
  Search,
  Brightness1,
  ImportContactsTwoTone,
  Phone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
  },

  logo: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "5px",
    alignItems: "center",
    position: "relative",
    width: "17%",
    [theme.breakpoints.down("sm")]: {
      width: "25%", // Adjusted width for tablet screens
    },

    [theme.breakpoints.down("xs")]: {
      width: "42%", // Adjusted width for mobile screens
    },
  },
  cap: {
    fontSize: "12.017px",
    color: "rgba(147, 125, 194, 0.60)",
  },
  logoImg: {
    height: "12px",
    width: "12px",
    backgroundImage:
      "linear-gradient(180deg, #937DC2 0%, #964FE7 35.21%, #D9A8EC 77.92%, #C689C6 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    marginTop: "6px",
  },
  logoText: {
    display: "flex",
    textWrap: "nowrap",
  },
  circleIcon: {
    color: "transparent",
  },
  book: {
    position: "absolute",
    fontSize: "9px",
    color: "gray",
    left: "31px",
  },
  menuBar: {
    alignItems: "center",
    borderBottom: "1px solid #937DC2",
    backgroundColor: "white",
    boxShadow: "none",
    position: "relative",
  },
  menuItem: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "black",
    width: "80%",
    margin: "0.2% 0",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  vLine: {
    backgroundColor: "#937DC2",
    width: "1.001px",
    height: "40.111px",
  },
  search: {
    color: "red",
    width: "24%",
    borderBottom: "none",
  },
  rightMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "40%",
    color: "var(--nav-bar-text, #7B7881)",
  },
  rightMenuIcon: {
    fontSize: "14px",
  },
  menuIcon: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#937DC2",
    width: "10%",
    [theme.breakpoints.down("sm")]: {
      width: "28%",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "end",
      width: "28%",
    },
  },
  secondHead: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
    color: "var(--body-text, #4D4C4C)",
  },
  call: {
    color: "#937DC2",
    border: " 1px solid #937DC2",
    marginLeft: "5%",
  },
  phone: {
    color: "#937DC2",
  },
  seconditem: {
    justifyContent: "space-between",
    width: "80%",
    color: "var(--body-text, #4D4C4C)",
  },
  RsecondHead: {
    width: "30%",
    justifyContent: "flex-end",
    display: "flex",
    alignItems: "center",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  searchIcon: {
    position: "relative",
    right: "21px",
  },
}));
const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar className={classes.menuBar}>
        <Toolbar className={classes.menuItem}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Box className={classes.logo}>
              <Typography className={classes.logoText}>
                B-W
                <Box className={classes.logoImg}>
                  <Brightness1 className={classes.circleIcon} />
                </Box>
                rld
              </Typography>
              <ImportContactsTwoTone className={classes.book} />
              <Box className={classes.vLine}></Box>
              <Typography className={classes.cap}>
                We Love <br />
                Books{" "}
              </Typography>
            </Box>
          </Link>
          {(isMobile || isTablet) && (
            <IconButton>
              <Search className={classes.searchIcon} />
            </IconButton>
          )}
          {!isMobile && !isTablet && <SearchBar className={classes.search} />}
          {!isTablet && (
            <>
              <Box className={classes.rightMenu}>
                <Typography className={classes.rightMenuIcon}>
                  Privacy Policy
                </Typography>
                <Typography className={classes.rightMenuIcon}>
                  Warranty
                </Typography>
                <Typography className={classes.rightMenuIcon}>
                  Shopping
                </Typography>
                <Typography className={classes.rightMenuIcon}>
                  Returns
                </Typography>
              </Box>
            </>
          )}
          {isTablet && !isMobile && (
            <>
              <Box className={classes.RsecondHead}>
                <Phone className={classes.phone} />
                <Typography> +445 87 999 000 </Typography>
              </Box>
            </>
          )}
          <Box className={classes.menuIcon}>
            <ShoppingCart />
            {!isMobile && (
              <>
                <Box className={classes.vLine}></Box>
                <Favorite />
                <Box className={classes.vLine}></Box>
                <Person />
              </>
            )}
          </Box>

          {isTablet && (
            <>
              <IconButton onClick={handleDrawerOpen} edge="end">
                <MenuIcon />
              </IconButton>
              <Drawer
                className={classes.drawer}
                variant="temporary"
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerClose}
                classes={{ paper: classes.drawerPaper }}
              >
                <IconButton onClick={handleDrawerClose} edge="end">
                  <MenuIcon />
                </IconButton>
                <List>
                  <ListItem button>
                    <ListItemText primary="Privacy Policy" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Warranty" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Shopping" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Returns" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
      {!isMobile && !isTablet && (
        <AppBar className={classes.menuBar}>
          <Toolbar className={classes.seconditem}>
            <Box className={classes.secondHead}>
              <Typography>The must read</Typography>
              <Typography>News </Typography>
              <Typography>Promotion of the mount </Typography>
              <Typography> Plublishs </Typography>
              <Typography>Subscribe to the newsletter </Typography>
            </Box>
            {!isTablet && (
              <Box className={classes.RsecondHead}>
                <Phone className={classes.phone} />
                <Typography> +445 87 999 000 </Typography>
                <Button className={classes.call}>Request a Call</Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Header;
