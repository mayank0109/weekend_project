import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import referral from "./apis/referral";
import Alert from '@material-ui/lab/Alert';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function FeedView() {
  const [refereeEmail, setRefereeEmail] = useState("");
  const [error, setError] = useState(null);

  onRefereeChange = (e) => {
    setRefereeEmail(e.target.value);
  }

  handleRefereeSubmit = (e) => {
    e.preventDefault();
    referral.create({ email: refereeEmail }).
      then(({ data }) => {  
        console.log(data);
      }).
      catch(({ response: { data: { error } } }) => setError(error));
  }

  return (
    <>
      <Box
        m={3}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <form onSubmit={handleRefereeSubmit}>

          <TextField id="outlined-basic" label="Referee Email" variant="outlined" required type="email"
            value={refereeEmail} onChange={onRefereeChange} />
          <Button sx={{ justifyContent: "space-between" }} type="submit">Refer your friend</Button>
        </form>
      </Box>
      <Box
        m={3}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}