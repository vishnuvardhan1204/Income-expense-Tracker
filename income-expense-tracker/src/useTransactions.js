import {useContext} from 'react';
import {expenseTrackerContext} from './context/context';
import {incomeCategories,expenseCategories,resetCategories} from './constants/categories';
import {v4 as uuidv4} from 'uuid';

const useTransactions=(title) =>{
    resetCategories();
    const {transactions}=useContext(expenseTrackerContext);
    const transactionsPerType=transactions.filter((t)=>t.type===title);
    const total=transactionsPerType.reduce((acc,currVal)=>(acc+=currVal.amount),0);
    const categories=title==='Income' ? incomeCategories : expenseCategories;
    console.log({categories,total,categories})

    transactionsPerType.forEach((t)=>{
        const category=categories.find((c)=>c.type===t.Category); // Change here to use .Category
        if(category){
            category.amount+=t.amount;
        }
    });
    const filteredCategories=categories.filter((c)=>c.amount>0);
  const chartData={
    datasets:[{
        data:filteredCategories.map((c)=>c.amount),
        backgroundColor:filteredCategories.map((c)=>c.color),
    }],
    labels:filteredCategories.map((c)=>c.type)
}
return {total,chartData};
}
export default useTransactions;
