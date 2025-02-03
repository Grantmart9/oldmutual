"use client";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
const drawerWidth = "100%";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "white" : "transparent",
      color: trigger ? "white" : "black",
      /*
        Brett Toerien: this transistion is causing the header to jump when focus is set on a select box
      */
      // transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      padding: "0px",
    },
  });
};

const Header = (props) => {
  const { window } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  let callButtonUrl = "https://www.oldmutual.co.za/education-call-me-back/";
  // if (campaign === "education") {
  //   callButtonUrl = "https://www.oldmutual.co.za/futuretech-pfa/";
  // }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
      }}
    >
      <div className="fixed h-[100vh] w-full bg-gradient-to-b from-secondaryGreen to-primaryGreen">
        <Image
          src="/mobile-close.svg"
          width={16}
          height={16}
          alt="Close Menu"
          className="float-right mr-5 mt-5 cursor-pointer"
          onClick={handleClose}
        />
        <div className="mx-auto flex h-[100vh] w-full items-center  pl-16">
          <List style={{ width: "70%" }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "left", color: "#FFFFFF" }}>
                <Link href="/">Home</Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "left", color: "#FFFFFF" }}>
                <Link href="/cost-of-education">Cost of Education</Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "left", color: "#FFFFFF" }}>
                <Link href="/how-much-to-save">How much to save</Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "left", color: "#FFFFFF" }}>
                <Link href="/loans-vs-savings">Savings vs Loans</Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "left", color: "#FFFFFF" }}>
                <Link href="/pay-yourself-first">Pay Yourself First</Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "left", color: "#FFFFFF" }}>
                <Link href="/new-calculator">New Calculator</Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <Link
                href={callButtonUrl}
                target="_blank"
                className="ml-3 mt-14 inline-block cursor-pointer rounded-full border border-white px-7 py-4 text-center text-sm font-light text-white"
              >
                CALL ME BACK
              </Link>
            </ListItem>
          </List>
        </div>
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        // backgroundColor: pathname === "/" ? "transparent" : "transparent",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        zIndex: "100",
      }}
    >
      <CssBaseline />
      <ScrollHandler {...props}>
        <AppBar
          component="nav"
          position="fixed"
          sx={{
            maxWidth: "100%",

            backgroundColor: "transparent",
            boxShadow: "none",
            margin: "0 auto",
            right: "auto",
            left: "auto",
            position: "relative",
          }}
        >
          <Toolbar
            sx={{
              width: "1298px",
              maxWidth: "100%",
              backgroundColor: "transparent",
              boxShadow: "none",
              margin: "0 auto",
              right: "auto",
              left: "auto",
              position: "relative",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">
                <Image
                  src="/logo-old-mutual.svg"
                  width={74}
                  height={93}
                  alt="Old Mutual Logo"
                />
              </Link>
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon style={{ color: "#000000", fontSize: "35px" }} />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link
                href="/"
                className="mr-5 text-sm capitalize text-[#707070] hover:text-primaryGreen"
              >
                Home
              </Link>
              <Link
                id="basic-button"
                href="#"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="mr-5 transform-none text-sm capitalize text-[#707070] hover:text-primaryGreen"
              >
                Education Calculators
                <Image
                  className="ml-3 inline-block w-3"
                  src="/dropdown.svg"
                  width={5}
                  height={9}
                  alt="dropdown"
                />
              </Link>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disableScrollLock={true}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                  onMouseLeave: handleClose,
                }}
                style={{ top: "20px" }}
              >
                <Link
                  onClick={handleClose}
                  href="/cost-of-education"
                  className="block pb-5 pl-5 pr-5 pt-5 text-sm text-[#707070] hover:text-primaryGreen"
                >
                  Cost of Education
                </Link>

                <Link
                  onClick={handleClose}
                  href="/how-much-to-save"
                  className="block pb-5 pl-5 pr-5 text-sm text-[#707070] hover:text-primaryGreen"
                >
                  How much to save
                </Link>

                <Link
                  onClick={handleClose}
                  href="/loans-vs-savings"
                  className="block pb-5 pl-5 pr-5 text-sm text-[#707070] hover:text-primaryGreen"
                >
                  Savings vs Loans
                </Link>
                <Link
                  onClick={handleClose}
                  href="/pay-yourself-first"
                  className="block pb-5 pl-5 pr-5 text-sm text-[#707070] hover:text-primaryGreen"
                >                  Pay Yourself First
                </Link>
                <Link
                  onClick={handleClose}
                  href="/new-calculator"
                  className="block pb-5 pl-5 pr-5 text-sm text-[#707070] hover:text-primaryGreen"
                >
                  New Calulator
                </Link>
              </Menu>
              <a
                className="group mb-3 inline-block cursor-pointer rounded-full bg-gradient-to-r from-green-0-100 to-green-0-200  px-11 py-4 text-center text-base font-light text-white md:mb-0 md:ml-3"
                href={callButtonUrl}
                target="_blank"
              >
                CALL ME BACK
              </a>
            </Box>
          </Toolbar>
        </AppBar>
      </ScrollHandler>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
