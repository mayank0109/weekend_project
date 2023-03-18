import React, { useState, useEffect } from 'react';
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
import authentication from "./apis/authentication";
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function FeedView() {

  const [refereeEmail, setRefereeEmail] = useState("");
  const [referredUsers, setReferredUsers] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadReferalsData();
  }, [])

  onRefereeChange = (e) => {
    setRefereeEmail(e.target.value);
  }

  const logout = (e) => {
    authentication.logout().
      then(_ => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authEmail");
        window.location = "/"
      })
  }

  handleRefereeSubmit = (e) => {
    e.preventDefault();
    referral.create({ email: refereeEmail }).
      then(_ => {
        loadReferalsData();
        setRefereeEmail("");
      }).
      catch(({ response: { data: { error } } }) => setError(error));
  }

  loadReferalsData = () => {
    setLoading(true);
    referral.index().
      then((response) => {
        setReferredUsers(response.data.referred_users);
        setReferrals(response.data.referrals);
        setLoading(false);
      })
  }

  return (
    <>
      <Box
        m={3}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button sx={{ justifyContent: "space-between" }} type="submit" onClick={() => logout()}>Logout</Button>
      </Box>
      <Box
        m={3}
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
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
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {error && <Alert severity="error">{error}</Alert>}
      </Box>
      {loading ? <Box sx={{ display: 'flex' }} justifyContent="center">
        <CircularProgress />
      </Box> : <> <Box
        m={10}
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <TableContainer component={Paper} style={{ maxHeight: 300 }}>
          <p>Below are all the email ids that have been refered by you and their account creation is still pending</p>
          <Table sx={{ minWidth: 20 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {referrals.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.email}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        <Box
          m={10}
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <TableContainer component={Paper} style={{ maxHeight: 300 }}>
            <p>Below are all the email ids that have been refered by you and they have created the account in this app</p>
            <Table sx={{ minWidth: 20 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {referredUsers.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.email}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box></>}
    </>
  );
}