import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(3, 0, 0),
  },
  input: {
    width: "65%",
  },
  button: {
    margin: theme.spacing(2, 0, 0),
    width: "65%",
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.form}
    >
      <TextField
        id="standard-basic"
        label="Email or username"
        className={classes.input}
      ></TextField>
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        className={classes.input}
      />
      <Button variant="contained" color="primary" className={classes.button}>
        Continue
      </Button>
    </Grid>
  );
};

export default LoginForm;
