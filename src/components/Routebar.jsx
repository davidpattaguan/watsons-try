import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { CardMedia } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const pages = ["Campaigns"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Routebar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ borderBottom: "1px, solid, black" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography sx={{ color: "text.primary" }}>Campaigns</Typography>
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              color="tertiary"
              href="#outlined-buttons"
              disableElevation
              startIcon={<FilterAltIcon />}
              sx={{ color: "text.primary" }}
            >
              Filter
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="#outlined-buttons"
              disableElevation
              startIcon={<AddCircleOutlineIcon />}
            >
              Link
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Routebar;
