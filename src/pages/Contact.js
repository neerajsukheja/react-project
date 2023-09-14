import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import axios from "axios";
import Fallback from "./Fallback";
import * as Sentry from "@sentry/react";

export default function Contact() {
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts-error")
      .then((response) => {
        setRows(response.data);
      });
  }, []);
  return (
    <Sentry.ErrorBoundary fallback={<Fallback />} showDialog>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => {
          throw Error("This is Sentry Error");
        }}
      >
        Don't Click Me
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell align="right">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userId}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Sentry.ErrorBoundary>
  );
}
