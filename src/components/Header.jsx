import Atm from './Atm.jsx';

import {useState} from 'react';

const Header = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <header className="App-header">
            <button onClick={() => {setShowMore(!showMore)}}>Show ATM</button>
            {showMore && 
                <Atm />
            }
        </header>
    )
}

export default Header;