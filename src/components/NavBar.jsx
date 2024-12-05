import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" sx={{ width: "100%", bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            // color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <img
            style={{ width: "89px" }}
            src="https://cdn.prod.website-files.com/65b00de355f451f99469a575/65c577b435f02f4e764a9c9c_Logo%20(2).png"
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "warning.main" }}
          ></Typography>
          <Button color="info">
            <span style={{ color: "#848F97" }}>call</span>
            <span style={{ color: "#E8F500" }}>+61 234 546</span>
            <MenuIcon sx={{ color: "white" }} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
