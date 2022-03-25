import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
function Home() {
    const [user, setUser] = useState(Cookies.get('name'))
    const [classmodal, setclassmodal] = useState("modaluser")
    const [valname, setvalname] = useState("")
    const valuename = (e) => {
        setvalname(e.target.value)
        setUser(e.target.value)
    }
    const login = (e) => {
        if (valname != '') {
            Cookies.set('name', user)
            setclassmodal("modaluser hidemodal")
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
                    <input className="inputtokn" type="text" onChange={valuename} placeholder="Write the your name" />
                    <a onClick={login} className="btn">login</a>
                </div>
            </div>
            <div className="titlelogo">

                <h1 >MULTI CHAR</h1>
                <a href="https://aidinr.ir" className="aidinr">power by Aidinr.ir</a>
            </div>
            <div className="box-create">
                <h3 className="titleboxhome wellcome">wellcome {Cookies.get('name')}</h3>
                <h2 className="titleboxhome">create game</h2>
                <Link to="/game" className="btn">create</Link>
            </div>
            <div className="box-join">
                <h2 className="titleboxhome">join the game</h2>
                <input className="inputtokn" type="text" placeholder="Write the token" />
                <Link to="/game" className="btn">join</Link>
            </div>
        </div>
    );

}

export default Home;

