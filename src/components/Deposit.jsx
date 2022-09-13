import { depositAmount } from "../redux/accountSlice";
import { useDispatch } from "react-redux";

const Deposit = () => {
    const dispatch = useDispatch();

    const handleSubmit = () => {
        let amountInput = document.querySelector('#depositAmountInput').value;

        amountInput = parseInt(amountInput);

        dispatch(depositAmount(amountInput));
    }

    return (
        <div>
            <label htmlFor="depositAmountInput">Amount:</label>
            <input type="text" id="depositAmountInput" />
            <button onClick={() => {dispatch(depositAmount(100))}}>+100</button>
            <button onClick={() => {dispatch(depositAmount(200))}}>+200</button>
            <button onClick={() => {dispatch(depositAmount(500))}}>+500</button>
            <button onClick={() => {dispatch(depositAmount(1000))}}>+1000</button>
            <button onClick={() => {handleSubmit()}}>Deposit amount</button>
        </div>
    )
}

export default Deposit;