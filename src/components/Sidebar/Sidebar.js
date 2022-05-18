import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import HelpIcon from "@mui/icons-material/Help";

//import Logo from "./Logo.js";
import navbarList from "../NavList/NavList";
//import StyledAvatar from "./StyledAvatar";
import CustomizedProgressBars from "../UI/CustomizedProgressBars";

const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
  (paddingIconButton + marginIconButton) * 2 + iconFontSize;

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  function toogleOpen() {
    setOpen(!open);
  }

  const drawerContent = (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "42px",
            width: "auto",
            backgroundColor: "transparent",
            margin: "14px 14px",
            padding: "12px 0px",
            borderBottom: "1px solid lightgray",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              display: open ? "none" : { xs: "none", sm: "initial" },
              marginBottom: "9px",
            }}
          >
            {/*<Logo /> */}
          </Box>
          <Typography
            variant="h1"
            noWrap={true}
            gutterBottom
            className="main-title"
            sx={{
              display: { xs: "none", sm: "initial" },
              fontSize: "18px",
              fontWeight: 600,
              color: "black",
              width: "154px",
              marginLeft: open ? "0px" : "8px",
              paddingBottom: "3px",
            }}
          >
            Nupco
          </Typography>

          <Button
            onClick={toogleOpen}
            sx={{
              minWidth: "initial",
              padding: "10px",
              color: "white",
              borderRadius: "8px",
              backgroundColor: open ? "transparent" : "transparent",
              "&:hover": {
                backgroundColor: "orange",
              },
            }}
          >
            <MenuIcon
              sx={{ fontSize: "20px", color: open ? "lightGray" : "lightGray" }}
            ></MenuIcon>
          </Button>
        </Box>

        <List dense={true}>
          {navbarList.map((key, index) => (
            <Tooltip
              key={index}
              title={open ? key.desc : ""}
              placement={"right"}
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "gray",
                    color: "white",
                    marginLeft: "22px !important",
                    boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
                  },
                },
              }}
            >
              <ListItemButton
                sx={{
                  margin: "6px 14px",
                  padding: "12px",
                  paddingLeft: open ? "11px" : "12px",
                  borderRadius: "20px",
                  "&:hover": {
                    outline: "1px solid orange",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "46px",
                  }}
                >
                  <key.icon
                    sx={{ fontSize: !open ? "25px" : "20px", color: "black" }}
                  />
                </ListItemIcon>

                <ListItemText
                  primary={key.desc}
                  secondary={key.secondDesc}
                  primaryTypographyProps={{
                    fontWeight: key.status ? "bold" : "normal",
                    fontFamily: "'Raleway', sans-serif !important",
                  }}
                  secondaryTypographyProps={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                  }}
                  sx={{
                    display: "inline",
                    margin: "0px",
                    overflowX: "hidden",
                    color: "black",
                    whiteSpace: "nowrap",
                  }}
                />
                {key.status === true ? (
                  <CheckCircleOutlineOutlinedIcon
                    size="small"
                    sx={{ width: "20px", height: "20px", color: "green" }}
                  />
                ) : (
                  <></>
                )}
              </ListItemButton>
            </Tooltip>
          ))}
          <Divider variant="middle" light={true} />
        </List>
        <Box
          sx={{
            padding: "15px",
            flexShrink: 0,
            display: open ? "none" : { xs: "none", sm: "initial" },
          }}
        >
          <Typography
            component="span"
            variant="body2"
            sx={{
              display: "inline-block",
              color: "black",
              fontFamily: "'Raleway', sans-serif",
              marginTop: "20px",
              fontSize: ".9em",
            }}
          >
            You finished{" "}
            <Typography sx={{ fontWeight: "bold", display: "inline-block" }}>
              10%
            </Typography>{" "}
            of the application
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "0 1rem",
            alignItems: "center",
          }}
        >
          <CustomizedProgressBars />
        </Box>
      </Box>
      <Box
        sx={{
          margin: "14px 14px",
          padding: "12px 4px",
          borderTop: "1px solid lightgray",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <HelpIcon sx={{ color: "#DC7633", fontSize: "35px" }} />
          <Typography
            variant="body2"
            sx={{
              flexShrink: 0,
              display: open ? "none" : { xs: "none", sm: "initial" },
            }}
          >
            Do you have an issue?
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Get support
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open
          ? { xs: "0px", sm: drawerWidthClose }
          : { xs: drawerWidthClose, sm: drawerWidthOpen },
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: open
            ? theme.transitions.duration.leavingScreen
            : theme.transitions.duration.enteringScreen,
        }),
        "& .MuiDrawer-paper": {
          justifyContent: "space-between",
          overflowX: "hidden",
          width: open
            ? { xs: "0px", sm: drawerWidthClose }
            : { xs: drawerWidthClose, sm: drawerWidthOpen },
          borderRight: "0px",
          backgroundColor: "#F7F9F9",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}
