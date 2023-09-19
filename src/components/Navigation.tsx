import { useEffect } from "react";
import axios from "axios";
import "./Navigation.css";

const Navigation = (props: any) => {
    console.log(props);
    useEffect(() => {
        function handleKeyDown(e: any) {
            if (e.keyCode === 38) {
                // up arrow
                document.getElementById("up")!.click();
            } else if (e.keyCode === 39) {
                // right arrow
                document.getElementById("right")!.click();
            } else if (e.keyCode === 40) {
                // down arrow
                document.getElementById("down")!.click();
            } else if (e.keyCode === 37) {
                // left arrow
                document.getElementById("left")!.click();
            } else if (e.keyCode === 13) {
                // enter
                document.getElementById("select")!.click();
            } else if (e.keyCode == 8 || e.keyCode == 27) {
                // backspace or escape
                document.getElementById("back")!.click();
            } else if (e.keyCode == 17) {
                // left ctrl
                document.getElementById("info")!.click();
            } else if (e.keyCode == 36) {
                // home key
                document.getElementById("home")!.click();
            } else if (e.keyCode == 32) {
                // space
                document.getElementById("play")!.click();
            }
            //console.log(e.keyCode);
            // 8 - backspace
            // 13 - Enter
        }
        document.addEventListener("keydown", handleKeyDown);
    }, []);

    const handleControl = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `http://${props.rokuip}:8060/keypress/${e.target.id}`
            );
            console.log(res);
        } catch (e) {
            console.error(e);
            //cors error here but request ow
        }
    };

    return (
        <div className="wrapper">
            <div id="dpad-container">
                <button id="left" onClick={handleControl}>
                    L
                </button>
                <button id="up" onClick={handleControl}>
                    U
                </button>
                <button id="down" onClick={handleControl}>
                    D
                </button>
                <button id="right" onClick={handleControl}>
                    R
                </button>
            </div>
            <div className="container">
                <button id="home" onClick={handleControl}>
                    home
                </button>
                <button id="enter" onClick={handleControl}>
                    enter
                </button>
                <button id="select" onClick={handleControl}>
                    select
                </button>
                <button id="back" onClick={handleControl}>
                    back
                </button>
                <button id="info" onClick={handleControl}>
                    info
                </button>
                <button id="play" onClick={handleControl}>
                    play
                </button>
            </div>
        </div>
    );
};

export default Navigation;
