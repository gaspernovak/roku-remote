import "./App.css";
import Navigation from "./components/Navigation";
import { useState } from "react";
function App() {
    const [address, setAddress] = useState("");
    const [rokuAddress, setRokuAddress] = useState(address);

    const handleClick = () => {
        setRokuAddress(address);
    };
    return (
        <>
            {rokuAddress == "" ? (
                <div>
                    <p>enter roku ip</p>
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        id="rokuip"
                    />
                    <button onClick={handleClick}>Go</button>
                </div>
            ) : (
                <Navigation rokuip={rokuAddress} />
            )}
        </>
    );
}

export default App;
