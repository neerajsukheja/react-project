import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DataObjectIcon from "@mui/icons-material/DataObject";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function About() {
  const [getQuotient, setQuotient] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const quotient =
      parseInt(data.get("dividend")) / parseInt(data.get("divisor"));
    setQuotient(quotient);
    var list;
    list.count = 0;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <DataObjectIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Find Quotient
          </Typography>
          <Typography component="span" variant="div">
            {getQuotient}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="dividend"
                  required
                  fullWidth
                  id="dividend"
                  label="Dividend"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="divisor"
                  required
                  fullWidth
                  id="divisor"
                  label="Divisor"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Calculate
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                throw Error("This is Sentry Error");
              }}
            >
              Don't Click Me
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
