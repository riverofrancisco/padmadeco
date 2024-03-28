import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
//import { ModeSwitcher } from "../../redux/portfolio/actions";

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  CssBaseline,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  SwipeableDrawer,
  List,
  ListItemIcon,
  Link,
  LinearProgress,
  useScrollTrigger,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
//import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
//import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import Searcher from "./Searcher";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
//import LanguageButton from "./LanguageButton";
import ElevationScroll from "./NavbarEffect";
//import { Colours } from "../../Theme/theme";

//// PROGRESS BAR
const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  height: 4,
  zIndex: theme.zIndex.drawer - 1,
}));

export default function NavBar() {
  const [scrolling, setScrolling] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const handleScroll = () => {
    const scrollMax =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    const progress = (scrollTop / scrollMax) * 100;
    setScrollProgress(progress);
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  //// LANGUAGE INFO
  const ItemsEN = ["sales", "employees", "dashBoard"];
  // const currentLanguage = useAppSelector((state) => state.global.language);
  const [Items, setItems] = React.useState(ItemsEN);
  /*  const handleItems = () => {
    if (currentLanguage === "en") {
      setItems(ItemsEN);
    } else if (currentLanguage === "es") {
      setItems(ItemsES);
    }
  }; */

  ///

  //// REDUX DARK/LIGHTMODE
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const currentMode = useAppSelector((state) => state.global.mode);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [section, setSection] = React.useState("");
  ////DARK MODE
  /* onst [isDarkMode, setIsDarkMode] = React.useState(true);
  const [colorNav, setColorNav] = React.useState(Colours.Celeste);

  const handleColor = (mode: boolean) => {
    if (mode) {
      setColorNav(Colours.Negro);
    } else {
      setColorNav(Colours.Celeste);
    }
  };

  const handleToggleDarkMode = () => {
    dispatch(ModeSwitcher());
    console.log(currentMode);
    handleColor(isDarkMode);
    setIsDarkMode(!isDarkMode);
  }; */

  ////SCROLLING WITH CLICK
  /* function scrollToTextField(id: string) {
    if (mobileOpen) setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = -60; // ajuste de posición para la barra de navegación
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setSection(id);
    }
  }
*/
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  ////RESPONSIVE MENU
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setMobileOpen(open);
    };

  React.useEffect(() => {
    // handleItems();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <StyledLinearProgress
        variant="determinate"
        value={scrollProgress}
        color="secondary"
      />
      <SwipeableDrawer
        anchor="top"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: "auto" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {Items.map((it) => {
              return (
                <ListItem key={it} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${it}`);
                    }}
                  >
                    {it}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </SwipeableDrawer>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <React.Fragment>
          <CssBaseline />
          <ElevationScroll>
            <AppBar
              component="nav"
              sx={{
                px: "10%",
                transition: "background-color 0.3s ease, padding 0.3s ease",
                bgcolor: !scrolling ? "transparent" : "purple",
                py: !scrolling ? 1 : 0,
              }}
            >
              <Toolbar
                sx={{
                  px: { xs: 5, md: 5 },
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  ml={0.5}
                  sx={{
                    display: { xs: "flex", sm: "flex", md: "none" },
                    opacity: 0.8,
                    transition: "0.3s ease", // Transición suave para el efecto de borde
                    "&:hover": {
                      cursor: "pointer",
                      opacity: 1,
                      transitionDelay: "0.02s",
                    },
                  }}
                >
                  <img
                    width={45}
                    src={
                      "https://d22fxaf9t8d39k.cloudfront.net/725c40f909c3ac656356863e228ebf2ef527346960fe07b8ff17a120581fb931128546.jpeg"
                    }
                    alt="logo"
                  />

                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer(true)}
                    sx={{
                      mr: 2,
                      display: { xs: "flex", sm: "flex", md: "none" },
                      flexGrow: 0,
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    opacity: 0.8,
                    transition: "0.3s ease", // Transición suave para el efecto de borde
                    "&:hover": {
                      cursor: "pointer",
                      opacity: 1,
                      transitionDelay: "0.02s",
                    },
                  }}
                >
                
                  <Box
                    ml={0.5}
                    sx={{
                      display: "flex",
                    }}
                  >
                    <img
                      width={45}
                      src={
                        "https://d22fxaf9t8d39k.cloudfront.net/725c40f909c3ac656356863e228ebf2ef527346960fe07b8ff17a120581fb931128546.jpeg"
                      }
                      alt="logo"
                    />
                  </Box>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  {Items.map((item) => (
                    <Box key={item}>
                      {" "}
                      <Box
                        sx={{
                          py: 0.5,
                          px: 1,
                          color: !scrolling ? "purple" : "whitesmoke",
                          opacity: 0.7,
                          borderBottom: "0px solid transparent",
                          transition:
                            "opacity 0.3s ease-in, border-bottom 0.3s ease-out", // Transición suave para el efecto de borde
                          "&:hover": {
                            opacity: 1,
                            borderBottom: "1px solid",
                            transitionDelay: "0.05s",
                            cursor: "pointer",
                          },
                        }}
                        onClick={() => {
                          navigate(`/${item}`);
                        }}
                      >
                        <Typography variant="subtitle1">{item}</Typography>
                      </Box>{" "}
                    </Box>
                  ))}
                </Box>
                {/* <Box display="flex">
                  <IconButton
                    color="secondary"
                    onClick={handleToggleDarkMode}
                    sx={{
                      display: "flex",
                      my: 0.5,
                      py: 1,
                    }}
                  >
                    {isDarkMode ? (
                      <LightModeRoundedIcon />
                    ) : (
                      <DarkModeRoundedIcon />
                    )}
                  </IconButton>
                  <LanguageButton />
                </Box> */}
              </Toolbar>
            </AppBar>
          </ElevationScroll>
        </React.Fragment>
      </Box>
    </Box>
  );
}
