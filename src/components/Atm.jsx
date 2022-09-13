import Withdrawal from "./Withdrawal";
import Deposit from "./Deposit";

import { useSelector } from "react-redux";

const Atm = () => {
    const {balance} = useSelector((state) => state.account)

    return (
        <main>
            <h1>ATM</h1>
            <p>Balance: {balance} SEK</p>
            < Withdrawal />
            < Deposit />
        </main>
    )
}

export default Atm;