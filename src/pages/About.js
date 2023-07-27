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
  const [getParsedJson, setParsedJson] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const parsedJson = JSON.parse(data.get("jsonCode"));
    setParsedJson(parsedJson);
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
            Parse JSON
          </Typography>
          <Typography component="span" variant="div">
            {getParsedJson}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  name="jsonCode"
                  required
                  fullWidth
                  id="jsonCode"
                  label="Json Code"
                  autoFocus
                  multiline
                  rows={8}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Parse
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
