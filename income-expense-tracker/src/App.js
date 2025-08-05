import logo from './logo.svg';
import './App.css';
import React from 'react'; // Required for JSX
import ReactDOM from 'react-dom'; // Correct for React 16
import Details from './componenets/Details/Details';
import Main from './componenets/Main/Main';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
const App = () => {
  const classes = useStyles();
  return (
    <div >
      <Grid className={classes.grid}  container spacing={ 5} alignItems='center' style={{ height: '100vh' }}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
        <Details title="Expense" />
        </Grid>
      </Grid>
   
    </div>
  );
}

export default App;
