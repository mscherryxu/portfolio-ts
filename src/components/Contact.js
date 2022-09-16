import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  let errors = [];
  function ValidateEmail(email) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const formValidation = () => {
    setErrorMessages([]);

    const isNameValid = name !== "";
    const isMessageValid = message !== "";
    const isSubjectValid = subject !== "";

    if (!isNameValid) {
      errors.push("Name is not valid, please enter your name.");
    }
    if (!ValidateEmail(email)) {
      errors.push("Email is not valid, please try again.");
    }
    if (!isMessageValid) {
      errors.push(
        "Message is not valid, please try again. I want to hear from you!"
      );
    }
    if (!isSubjectValid) {
      errors.push("Subject is not valid, please try again.");
    }
    if (errors.length > 0) {
      setShowErrors({ showErrors: true });
      setErrorMessages(errors);
    } else {
      setShowErrors({ showErrors: false });
      alert("Email Sent");
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-info-parent-container">
          <div className="contact-info-container">
            <h1 className="contact-header-2">Contact Me</h1>
            <p className="contact-info">📱 646-580-2763</p>
            <p className="contact-info">✉️ ms.cherry.xu@gmail.com</p>
          </div>
        </div>
        <div className="contact-form-container">
          <h1 className="contact-header">
            Want to say hi or work with me? Feel free to reach out!
          </h1>
          <div>
            <form className="contact-form">
              <ThemeProvider theme={theme}>
                <TextField
                  margin="dense"
                  label="Name"
                  placeholder="Jane Doe"
                  type="text"
                  size="small"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  margin="dense"
                  label="Email"
                  placeholder="janedoe@gmail.com"
                  type="email"
                  size="small"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="dense"
                  label="Subject"
                  placeholder="Help with billing"
                  type="text"
                  size="small"
                  variant="outlined"
                  onChange={(e) => setSubject(e.target.value)}
                />
                <TextField
                  margin="dense"
                  label="Message"
                  placeholder="Joe Doe"
                  type="text"
                  size="small"
                  variant="outlined"
                  multiline
                  onChange={(e) => setMessage(e.target.value)}
                />
                {showErrors
                  ? errorMessages.map((item, index) => {
                      return <ul key={index}>{item}</ul>;
                    })
                  : null}
                <Button
                  className="form-button"
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={formValidation}
                >
                  Submit
                </Button>
              </ThemeProvider>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
