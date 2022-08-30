import React from "react";
import { useState } from "react";
import "../styles/navbar.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useAuth } from "../context/AuthContextProvider";
import logo from "../assets/icons/logo_black.svg";

import Popper from "@mui/material/Popper";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { usePost } from "../context/PostContextProvider";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const LoginContext = React.createContext();
export const useLogin = () => React.useContext(LoginContext);

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openLog, setOpenLog] = React.useState(false);
  const handleOpenLog = () => setOpenLog(true);
  const handleCloseLog = () => setOpenLog(false);

  const { register, login, logout } = useAuth();
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const [username, SetUsername] = useState();
  const [passwordConfirm, SetPasswordConfirm] = useState();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const { getPosts } = usePost();

  useEffect(() => {
    setSearchParams({
      search: search,
    });
  }, [search]);

  useEffect(() => {
    getPosts();
  }, [searchParams]);

  useEffect(()=>{
    setSearchParams({
      search: '',
    })
  }, [])

  // console.log(email, password, username, passwordConfirm);

  function handleRegister() {
    register(email, username, password, passwordConfirm);
  }

  function handleLogin() {
    login(email, password);
  }

  function handleLog() {
    handleOpenLog();
    handleClose();
  }
  function handleSign() {
    handleOpen();
    handleCloseLog();
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const openPopper = Boolean(anchorEl);
  const id = openPopper ? "simple-popper" : undefined;

  return (
    <header>
      <div className="container">
        <div className="header__logo">
          <a onClick={() => navigate("/")}>
            <img src={logo} alt="" className="header-logo" />
          </a>
        </div>
        <div className="header__search">
          <input type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
          <button>Search</button>
        </div>

        <div className="header__block-right">
          <div className="header__profile_section">
            <Link to="/upload">
              <button className="header__upload-btn">+ <span>Upload</span></button>
            </Link>
            <div className="header__chat-icon">
              <img
                src="https://play-lh.googleusercontent.com/cF_oWC9Io_I9smEBhjhUHkOO6vX5wMbZJgFpGny4MkMMtz25iIJEh2wASdbbEN7jseAx"
                alt=""
              />
            </div>
            <div className="header__profile-avatar">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="header__login"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <button className="header__upload-btn">+ Upload</button>
            {localStorage.getItem("username") ? (
              <div>
                <button
                  style={{ marginLeft: "10%" }}
                  aria-describedby={id}
                  type="button"
                  onClick={handleClick}
                >
                  {localStorage.getItem("username")}
                </button>
                <Popper id={id} open={openPopper} anchorEl={anchorEl}>
                  <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                    <Button
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      Sign out
                    </Button>
                  </Box>
                </Popper>
              </div>
            ) : (
              <button onClick={handleOpen} className="header__btn-login">
                Log in
              </button>
            )}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={style}
                style={{
                  width: "400px",
                  height: "600px",
                  border: "none",
                  borderRadius: "5%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ margin: "0 auto" }}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Sign up
                </Typography>
                <Typography>email</Typography>
                <TextField
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                  className="input"
                  sx={{ paddingBottom: "5%" }}
                  placeholder="email"
                ></TextField>
                <Typography>username</Typography>
                <TextField
                  value={username}
                  onChange={(e) => SetUsername(e.target.value)}
                  className="input"
                  sx={{ paddingBottom: "5%" }}
                  placeholder="username"
                ></TextField>
                <Typography onChange={(e) => SetPassword(e.target.value)}>
                  password
                </Typography>
                <TextField
                  value={password}
                  onChange={(e) => SetPassword(e.target.value)}
                  className="input"
                  sx={{ paddingBottom: "5%" }}
                  placeholder="password"
                ></TextField>
                <Typography
                  onChange={(e) => SetPasswordConfirm(e.target.value)}
                >
                  confirm password
                </Typography>
                <TextField
                  value={passwordConfirm}
                  onChange={(e) => SetPasswordConfirm(e.target.value)}
                  className="input"
                  sx={{ paddingBottom: "5%" }}
                  placeholder="confirm password"
                ></TextField>
                <Typography
                  className="link"
                  onClick={handleLog}
                  style={{ fontSize: "1.6vmin" }}
                >
                  already have an account?
                </Typography>

                <Button
                  sx={{ marginTop: "20%" }}
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => {
                    handleRegister();
                    navigate("/");
                    handleClose();
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Modal>
          </div>
          <div>
            <Modal
              open={openLog}
              onClose={handleCloseLog}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={style}
                style={{
                  width: "400px",
                  height: "600px",
                  border: "none",
                  borderRadius: "5%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ margin: "0 auto" }}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Sign in
                </Typography>
                <Typography>email</Typography>
                <TextField
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                  className="input"
                  sx={{ paddingBottom: "5%" }}
                  placeholder="email"
                ></TextField>
                <Typography onChange={(e) => SetPassword(e.target.value)}>
                  password
                </Typography>
                <TextField
                  value={password}
                  onChange={(e) => SetPassword(e.target.value)}
                  className="input"
                  sx={{ paddingBottom: "5%" }}
                  placeholder="password"
                ></TextField>
                <Typography
                  className="link"
                  onClick={handleSign}
                  style={{ fontSize: "1.6vmin" }}
                >
                  dont have an account?
                </Typography>
                <Button
                  sx={{ marginTop: "20%" }}
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => {
                    handleLogin();
                    navigate("/");
                    handleCloseLog();
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
