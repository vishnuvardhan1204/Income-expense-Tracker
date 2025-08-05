import React,{useState,useContext} from 'react';
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import useStyles from './Styles';
import { Category } from '@material-ui/icons';
import { expenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories,expenseCategories} from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import CustomizedSnackbar from '../../../Snackbar/Snakbar';

const initialState = {
  amount:'',
  Category:'',
  type:'Income',
  date:formatDate(new Date()),
}

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState(initialState);
  const {addTransaction} = useContext(expenseTrackerContext);
  const [open, setOpen] = useState(false);
  const createTransaction =()=>{
    const transaction={...formData, amount:Number(formData.amount),id:uuidv4(),category: formData.Category};
    setOpen(true);
    addTransaction(transaction);
    setFormData(initialState);
  }
  console.log(formData);

  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;
    return (
    <Grid container spacing={2}>
      <CustomizedSnackbar open={open} setOpen={setOpen}/>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          Please select your type and category
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.Category} onChange={(e) => setFormData({ ...formData, Category: e.target.value })}>
          {selectedCategories.map((c) => (
            <MenuItem key={c.type} value={c.type}>
              {c.type}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField type='number' label='Amount' fullWidth value={formData.amount} onChange={(e)=> setFormData({...formData,amount:e.target.value})}/>
        </Grid>
        <Grid item xs={6}>
            <TextField type='date' label='Date' fullWidth value={formData.date} onChange={(e)=> setFormData({...formData,date:formatDate(e.target.value)})}/> 
    </Grid>
    <Grid item xs={12}>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth onClick={createTransaction}
        >
          CREATE
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
