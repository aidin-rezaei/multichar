import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
function Home() {
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, true); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }

    const [user, setUser] = useState(Cookies.get('name'))
    const [classmodal, setclassmodal] = useState("modaluser")
    const [valname, setvalname] = useState("")
    const [hashroom, sethashroom] = useState("")
    const [getidroom, setgetidroom] = useState("")
    const valuename = (e) => {
        setvalname(e.target.value)
        setUser(makeid(8))
        sethashroom(makeid(8))
    }

    const login = (e) => {
        if (valname !== '') {
            Cookies.set('name', user)
            setclassmodal("modaluser hidemodal")
            httpGet("https://aidinr.ir/multichar/api.php?name=" + valname + "&hash=" + user)
        }
    }
    const loginenter = (e) => {
        if (e.key === 'Enter') {
            if (valname !== '') {
                Cookies.set('name', user)
                setclassmodal("modaluser hidemodal")
                httpGet("https://aidinr.ir/multichar/api.php?name=" + valname + "&hash=" + user)
            }
        }
    }

    const createroom = () => {
        httpGet("https://aidinr.ir/multichar/api.php?hashroom=" + hashroom + "&active=" + user)
        httpGet("https://aidinr.ir/multichar/api.php?roomid=" + hashroom + "&porsenid=" + user)
        Cookies.set('room', hashroom)
        Cookies.set('active', "yes")
    }
    const gettokenroom = (e) => {
        setgetidroom(e.target.value)
    }
    const jointhegame = () => {
        if (getidroom !== '') {
            httpGet("https://aidinr.ir/multichar/api.php?roomid=" + getidroom + "&porsenid=" + user)
            Cookies.set('room', getidroom)
            Cookies.set('active', "no")
        }
    }

    return (
        <div className="fullhome">
            <div className={classmodal}>
                <div className="titlelogo">

                    <h1 >MULTI CHAR</h1>
                    <a href="https://aidinr.ir" className="aidinr">power by Aidinr.ir</a>
                </div>
                <div className="box-join">
                    <h2 className="titleboxhome">enter your name</h2>
                    <input className="inputtokn" type="text" onChange={valuename} onKeyDown={loginenter} placeholder="Write the your name" />
                    <button onClick={login} className="btn">login</button>
                </div>
            </div>
            <div className="titlelogo">

                <h1 >MULTI CHAR</h1>
                <a href="https://aidinr.ir" className="aidinr">power by Aidinr.ir</a>
            </div>
            <div className="box-create">
                <h3 className="titleboxhome wellcome">wellcome {valname}</h3>
                <h2 className="titleboxhome">create game</h2>
                <Link to={"/game?room=" + hashroom} className="btn" onClick={createroom}>create</Link>
            </div>
            <div className="box-join">
                <h2 className="titleboxhome">join the game</h2>
                <input className="inputtokn" type="text" onChange={gettokenroom} placeholder="Write the token" />
                <Link to="/game" className="btn" onClick={jointhegame}>join</Link>
            </div>
        </div>
    );

}

export default Home;

