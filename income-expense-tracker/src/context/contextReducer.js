// const transaction  = [
//     { id: 1, type: 'Income', category: 'Salary', amount: 5000, date: new Date().toLocaleDateString() },
//     { id: 2, type: 'Expense', category: 'Rent', amount: 1500, date: new Date().toLocaleDateString() },
//     { id: 3, type: 'Expense', category: 'Groceries', amount: 200, date: new Date().toLocaleDateString() },
//     { id: 4, type: 'Income', category: 'Freelance', amount: 1200, date: new Date().toLocaleDateString() },
// ]
// const contextReducer=(state,action) =>{
//     if(action.type === 'DELETE_TRANSACTION'){
//         return state.filter((transaction) => transaction.id !== action.payload);
//     }
//     else if(action.type === 'ADD_TRANSACTION'){
//         return [...state, action.payload];
//     }
//     return state;

// }
// export default contextReducer;





const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
      case 'DELETE_TRANSACTION':
          transactions = state.filter((transaction) => transaction.id !== action.payload);

          // ⬇️ Save the updated transactions to localStorage
          localStorage.setItem('transactions', JSON.stringify(transactions));

          return transactions;

      case 'ADD_TRANSACTION':
          transactions = [action.payload, ...state];

          // ⬇️ Save the updated transactions to localStorage
          localStorage.setItem('transactions', JSON.stringify(transactions));

          return transactions;

      default:
          return state;
  }
};

export default contextReducer;




// const contextReducer = (state, action) => {
//   let transactions;

//   // 👇 function to calculate balance
//   const calculateBalance = (transactions) => {
//     let balance = 0;
//     transactions.forEach((t) => {
//       if (t.type === 'Income') {
//         balance += Number(t.amount);
//       } else if (t.type === 'Expense') {
//         balance -= Number(t.amount);
//       }
//     });
//     return balance;
//   };

//   switch (action.type) {
//     case 'DELETE_TRANSACTION':
//       transactions = state.filter((transaction) => transaction.id !== action.payload);

//       // ⬇️ Save transactions
//       localStorage.setItem('transactions', JSON.stringify(transactions));

//       // ⬇️ Also save updated balance
//       localStorage.setItem('balance', JSON.stringify(calculateBalance(transactions)));

//       return transactions;

//     case 'ADD_TRANSACTION':
//       transactions = [action.payload, ...state];

//       // ⬇️ Save transactions
//       localStorage.setItem('transactions', JSON.stringify(transactions));

//       // ⬇️ Also save updated balance
//       localStorage.setItem('balance', JSON.stringify(calculateBalance(transactions)));

//       return transactions;

//     default:
//       return state;
//   }
// };

// export default contextReducer;
