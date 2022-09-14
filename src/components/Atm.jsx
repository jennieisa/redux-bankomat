import Withdrawal from "./Withdrawal";
import Deposit from "./Deposit";
import {changeCurrency} from '../redux/accountSlice.js';

import { useSelector, useDispatch } from "react-redux";


const Atm = () => {
    const dispatch = useDispatch();
    const {balance, currency} = useSelector((state) => state.account)

    return (
        <main>
            <h1>ATM</h1>
            <p>Balance: {balance} {currency}</p>
            <button onClick={() => {dispatch(changeCurrency("SEK"))}}>SEK</button>
            <button onClick={() => {dispatch(changeCurrency("EURO"))}}>EURO</button>
            <button onClick={() => {dispatch(changeCurrency("USD"))}}>USD</button>
            < Withdrawal />
            < Deposit />
        </main>
    )
}

export default Atm;