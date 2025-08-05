import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles';
import useTransactions from '../../useTransactions';
import { Doughnut } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Details({ title }) {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title === 'Income' ? 'Income' : 'Expense');
  

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
}

export default Details;
