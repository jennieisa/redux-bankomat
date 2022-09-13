import {createSlice} from '@reduxjs/toolkit';

const accountSlice = createSlice({
    name: "account",
    initialState: {
        balance: 1000,
    }, 
    reducers: {
        withdrawalAmount: (state,{payload}) => {
            if(payload > state.balance) {
                alert("You can not withdrawal more money than your current balance.")
            } else {
                state.balance -= payload;
            }
        },
        depositAmount: (state, {payload}) => {
            state.balance += payload;
        }
    }
})

export const {withdrawalAmount, depositAmount} = accountSlice.actions;
export default accountSlice.reducer;