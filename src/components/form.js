import React, { useState } from "react"
import { Button } from "react-bootstrap"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

import styled from "styled-components"

function Form() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <GlobalStyle>
        <Button className="primary" onClick={handleClickOpen}>
          Pateikti užsakymą
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Pateikti užsakymą</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Čia galėsite pateikti užsakymą, šiuo metu kūriama...
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="El. pašto adresas"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button className="primary" onClick={handleClose}>
              Atšaukti
            </Button>
            <Button className="primary" onClick={handleClose}>
              Pateikti
            </Button>
          </DialogActions>
        </Dialog>
      </GlobalStyle>
    </div>
  )
}

const GlobalStyle = styled.div`
  .primary:active,
  .primary:hover,
  .primary:focus {
    background-color: orange !important;
  }
  .primary {
    background-color: #e02424 !important;
    color: #fff;
    border: 0px;
    border-radius: 0px;
    padding: 20px;
  }
  .primary:active,
  .primary:hover,
  .primary:focus {
    background-color: #e03424 !important;
    color: #fff;
    border: 0px;
    border-radius: 0px;
    padding: 20px;
  }
  .scroll {
    padding-top: 100px;
  }
`

export default Form
