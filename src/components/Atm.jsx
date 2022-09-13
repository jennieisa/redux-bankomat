import { useSelector } from "react-redux";

const Atm = () => {
    const {balance} = useSelector((state) => state.account)

    return (
        <main>
            <h1>ATM</h1>
            <p>Balance: {balance} SEK</p>
        </main>
    )
}

export default Atm;