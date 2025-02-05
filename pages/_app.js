import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { store } from "../app/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../public/components/header";
import Menu, { menuConfig } from "../public/components/menu";
import { Menu as MenuMUI } from "@mui/material/Menu";
import {
  Avatar,
  IconButton,
  Popover,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItemNew from "../public/components/menu/MenuItem";
import { useRouter } from "next/router";

// import wallpaper from '../public/icons/wallpaperflare.com_wallpaper.jpg'

function MyApp({ Component, pageProps }) {
  // const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (!open) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter(); // Use useRouter hook
  const [selected, setSelected] = useState("");
  // Set selected based on current route
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if window is available
      console.log(router.pathname, " asdf ", window.location.pathname);
      const currentMenu = menuConfig.find(
        (item) => item.route === window.location.pathname
      );
      if (currentMenu) {
        setSelected(currentMenu.key);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]); // Re-run when pathname changes

  // Handle menu item click
  const handleMenuClick = (key, route) => {
    setSelected(key);
    router.push(route); // Navigate using Next.js router
  };
  return (
    <Provider store={store}>
      <>
        <Head>
          <link rel="icon" type="image/png" href="/icons/favicon.png/" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <script src="path/to/dist/feather.js" /> */}
          <title>Mayur Patankar</title>
        </Head>
        <div
          style={{
            backgroundImage: `url('https://i.pinimg.com/originals/ec/0c/60/ec0c6065a57df10774c81d2385149531.png')`, // Reference the image in the public folder
            backgroundSize: "cover", // Make sure the image covers the entire background
            backgroundPosition: "center", // Center the background image
            minHeight: "100vh", // Ensure it takes up the full height of the page
            minWidth: "100vw",
            margin: 0,
            padding: 0,
          }}
        >
          {/* <div className='row'>
        <Header />
      </div> */}
          {isMobile ? (
            <div className="container-fluid">
              <div
                style={{
                  padding: "5px",
                }}
              >
                <div className="row mt-5">
                  <div className="col-1">
                    <IconButton onClick={handleClick}>
                      <Avatar>
                        <MenuIcon />
                      </Avatar>
                    </IconButton>
                    <Popover
                      open={open}
                      onClose={handleClose}
                      anchorEl={anchorEl}
                    >
                      {menuConfig.map((elem) => (
                        <MenuItemNew
                          key={elem.key}
                          data={elem}
                          selected={selected}
                          onClick={() => handleMenuClick(elem.key, elem.route)}
                        />
                      ))}
                    </Popover>
                  </div>
                  <div className="col-11">
                    <Component {...pageProps} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="container-fluid"
              style={{
                minHeight: "100vh",
              }}
            >
              <div
                className="row"
                style={{
                  minWidth: "100vw",
                }}
              >
                <div
                  className="col-lg-1 col-md-2 col-sm-1 col-xs-1"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Menu className="mx-5 my-5" />
                </div>
                <div className="col-lg-10 col-md-8 col-sm-10 col-xs-9">
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    </Provider>
  );
}

export default MyApp;
