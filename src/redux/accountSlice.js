import {createSlice} from '@reduxjs/toolkit';

const accountSlice = createSlice({
    name: "account",
    initialState: {
        balance: 1000,
    }, 
    reducers: {
        withdrawal: (state,{payload}) => {
            
        },
        deposit: () => {}
    }
})

export const {withdrawal, deposit} = accountSlice.actions;
export default accountSlice.reducer;