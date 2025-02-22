import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about-us" },
    { text: "Our Tradition", path: "/our-tradition" },
    { text: "Yoga Chakra", path: "/yoga-chakra" },  // Added the Yoga Chakra link
    { text: "Courses", path: "/courses" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Box 
                component="img"
                src="/static/images/Logo.jpg"
                alt="Kathmandu Yoga Logo"
                sx={{ 
                  height: 50, 
                  mr: 2,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}
              />
            </Link>
          </Typography>
          {/* Hamburger Menu for Mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Regular Navbar for Desktop */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((link) => (
              <Button color="inherit" component={Link} to={link.path} key={link.text}>
                {link.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {navLinks.map((link) => (
            <ListItem button component={Link} to={link.path} key={link.text} onClick={toggleDrawer(false)}>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
