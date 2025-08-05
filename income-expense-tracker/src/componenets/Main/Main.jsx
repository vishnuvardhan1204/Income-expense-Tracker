import React,{useContext} from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from '../../styles'; // Adjust the path based on your folder structure
import Form from './Form/Form'; // Adjust the path based on your folder structure
import List from './List/List'; // Adjust the path based on your folder structure
import { expenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard'; // Adjust the path based on your folder structure
function Main() {
  const classes = useStyles();
  const {balance} = useContext(expenseTrackerContext); // Replace with actual balance logic

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker"/>
      <CardContent>
        <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
           <InfoCard /> 
        </Typography>
        <Divider className={classes.divider} />
         <Form /> 
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List /> 
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main;
