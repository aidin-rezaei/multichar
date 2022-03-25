import React, { useState,useEffect  } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
function Game() {
    const [classmodlink, setclassmodlink] = useState("succopy")
    const [classopenmodpl, setclassopenmodpl] = useState("boxpleyer")
    const [valuejavab, setvaluejavab] = useState("")
    const copylinkgame = () => {
        navigator.clipboard.writeText("https://aidinr.ir/multichar?token=q213q323");
        setclassmodlink("succopy calssanimcopy")
        setTimeout(() => {
            setclassmodlink("succopy ")
        }, 1500);
    }
    const openmodpl = () => {
        if (classopenmodpl === "boxpleyer") {
            setclassopenmodpl("boxpleyer topboxpleyer")
        } else {
            setclassopenmodpl("boxpleyer")
        }
    }

    const clickkalame = (e) => {
        e.target.className = "disblep"
    }
    
    return (
        <div className="fullhome background">
            <div className={classopenmodpl} >
                <div className="btnopenbox" onClick={openmodpl}>
                    <i className="fa fa-angle-up"></i>
                    <p>pleyers</p>
                    <i className="fa fa-angle-down closeplred"></i>
                </div>
                <div className="cantentpleyer">
                    <div className="itempleyer"><i class="fa-solid fa-gamepad"></i><span>aidin</span></div>
                    <div className="itempleyer"><i class="fa-solid fa-gamepad"></i><span>amirhossin</span></div>
                    <div className="itempleyer"><i class="fa-solid fa-gamepad"></i><span>mohammad</span></div>
                </div>
            </div>
            <div className="title-game">
                <div className="titlelogo2">

                    <h1 >MULTI CHAR</h1>
                </div>

            </div>
            <div className="title-game2">
                <div className="Score"><i className="fa fa-star"></i> <span>10</span></div>
                <div className="exit" ><i className="fa fa-arrow-right-from-bracket"></i> <span>Exit</span></div>
            </div>
            <div className="copylink" onClick={copylinkgame}>
                <p className="linkgame">https://aidinr.ir/multichar?token=q213q323</p>
                <button>copy link</button>
                <p className={classmodlink}>Copy successful</p>
            </div>


            <div className="boxjvab">
                <p>{valuejavab}</p>
            </div>
            <div className="horofbox">
                <p onClick={clickkalame}>گ</p>
                <p onClick={clickkalame}>و</p>
                <p onClick={clickkalame}>ج</p>
                <p onClick={clickkalame}>ه</p>
                <p onClick={clickkalame}>گ</p>
                <p onClick={clickkalame}>و</p>
                <p onClick={clickkalame}>ج</p>
                <p onClick={clickkalame}>ه</p>
            </div>








        </div>
    );

}

export default Game;

