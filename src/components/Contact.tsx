import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { TextareaAutosize } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function Contact() {
  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_q879twl",
        "template_4zourkh",
        `${e.currentTarget}`,
        "d6px4sSh50YtAX6w5"
      );
      Swal.fire({
        icon: "success",
        title: "Message sent sucessfully 👍",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message); 
        Swal.fire({
          icon: "error",
          title: "Something went wrong 🙃",
          text: error.message,
        });
      }
    }
    e.currentTarget.reset();
 
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          justifyContent="center"
          textAlign="center"
          padding="1.6rem"
        >
          <form onSubmit={onHandleSubmit}>
            <div>
              <h1 className="contact-header">
                Want to say hi or work with me? Feel free to reach out!
              </h1>
              <TextField
                fullWidth
                type="text"
                label="Name"
                name="user_name"
                margin="dense"
                required
              />
            </div>
            <div>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="user_email"
                margin="dense"
                required
              />
            </div>
            <div>
              <TextareaAutosize
                aria-label="outlined textarea"
                required
                name="user_message"
                variant="outlined"
                placeholder="Write your message here!"
                style={{
                  width: "100%",
                  height: 125,
                  fontSize: "1rem",
                  padding: "1rem",
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  borderColor: "#909090",
                  borderRadius: "5px",
                  borderWidth: 1.3,
                }}
              />
            </div>
            <div>
              <button type="submit" className="submit-button">
                Send
              </button>
            </div>
          </form>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Contact;
