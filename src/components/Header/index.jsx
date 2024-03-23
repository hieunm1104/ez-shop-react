import CodeIcon from "@mui/icons-material/Code";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Register from "../../features/Auth/components/Register";
import Login from "../../features/Auth/components/Login";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle, Close } from "@mui/icons-material";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/Auth/userSlice";
export default function Header() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("login");
  const [anchorEl, setAnchorEl] = useState(null);
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleCloseMenu = () => {
    setAnchorEl(null);
  }
  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="title">Ez shop</Link>
          </Typography>
          <NavLink to="/todos" activeClassName="active-menu">
            <Button color="inherit" className="btn-header">Todos</Button>
          </NavLink>
          <NavLink to="/albums" activeClassName="active">
            <Button color="inherit" className="btn-header">Albums</Button>
          </NavLink>
          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}
          {
            isLoggedIn && (
             <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircle/>
             </IconButton>
            )
          }
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
      <Dialog open={open} onClose={handleClose} className="dialog">
        <IconButton className="icon-close" onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === "login" && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode("register")}>
                  Register here
                </Button>
              </Box>
            </>
          )}
          {mode === "register" && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode("login")}>
                  Login here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
