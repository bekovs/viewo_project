import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            width: "30vw",
            height: "30vw",
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
          <Typography>username</Typography>
          <TextField
            sx={{ paddingBottom: "5%" }}
            placeholder="login"
          ></TextField>
          <Typography>password</Typography>
          <TextField
            sx={{ paddingBottom: "5%" }}
            placeholder="password"
          ></TextField>
          <Typography>forget password?</Typography>

          <Button sx={{ marginTop: "20%" }} style={{ backgroundColor: "red" }}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
