import { withdrawalAmount } from "../redux/accountSlice";
import { useDispatch } from "react-redux";

const Withdrawal = () => {
    const dispatch = useDispatch();

    const handleSubmit = () => {
        let amountInput = document.querySelector('#withdrawalAmountInput').value;

        dispatch(withdrawalAmount(amountInput));
    }

    return (
        <div>
            <label htmlFor="withdrawalAmountInput">Amount:</label>
            <input type="text" id="withdrawalAmountInput" />
            <button onClick={() => {dispatch(withdrawalAmount(100))}}>-100</button>
            <button onClick={() => {dispatch(withdrawalAmount(200))}}>-200</button>
            <button onClick={() => {dispatch(withdrawalAmount(500))}}>-500</button>
            <button onClick={() => {dispatch(withdrawalAmount(1000))}}>-1000</button>
            <button onClick={() => {handleSubmit()}}>Withdrawal amount</button>
        </div>
    )
}

export default Withdrawal;