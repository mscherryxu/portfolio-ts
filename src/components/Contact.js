import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextareaAutosize } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: '#002884',
    },
  },
});

function Contact() {
  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_q879twl',
        'template_4zourkh',
        e.target,
        'd6px4sSh50YtAX6w5'
      );
      Swal.fire({
        icon: 'success',
        title: 'Message sent sucessfully 👍',
      });
    } catch (error) {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong 🙃',
        text: error.text,
      });
    }
    e.target.reset();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box display="flex" justifyContent="center" textAlign="center">
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
                type="text"
                label="Message"
                required
                name="user_message"
                variant="outlined"
                placeholder="Write your message here!"
                style={{
                  width: '100%',
                  height: 125,
                  fontSize: '1rem',
                  padding: '1rem',
                  marginTop: '0.5rem',
                  marginBottom: '1rem',
                  borderColor: '#909090',
                  borderRadius: '5px',
                  borderWidth: 1.3,
                }}
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                display="flex"
                justifyContent="center"
              >
                Send
              </Button>
            </div>
          </form>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Contact;
