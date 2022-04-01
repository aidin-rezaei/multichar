import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
function Game() {
    function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, true); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }
    const [classmodlink, setclassmodlink] = useState("succopy")
    const [classopenmodpl, setclassopenmodpl] = useState("boxpleyer")
    const [valuejavab, setvaluejavab] = useState("")
    const [onlinepleyerstate, setonlinepleyerstate] = useState([])
    const [classgetkalame, setclassgetkalame] = useState('')
    const [kalameste, setkalameste] = useState([])
    // const [dataroom, setdataroom] = useState([])
    // const [javabjson, setjavabjson] = useState()
    const [javaborg, setjavaborg] = useState([])
    const [soaljson, setsoaljson] = useState([])
    const onlinepleyer = () => {
        fetch("https://aidinr.ir/multichar/api.php?hashroomp=" + Cookies.get('room') + "&hashpleyer=" + Cookies.get('name'))
            .then(response => response.json())
            .then(data => {
                setonlinepleyerstate(data.online)
                // setdataroom(data.room[0])
                // setjavabjson(data.room.javabjson[0])
                setjavaborg(data.room.javaborg[0])
                setsoaljson(data.room.soaljson[0])
                if (Cookies.get('active') === 'yes') {
                    setclassgetkalame('getkalame')
                }
                if (Cookies.get('active') === 'no') {
                    setclassgetkalame('getkalame offfkalame')
                }
                console.clear()
            })
            .finally(() => setTimeout(onlinepleyer, 1000))
    }
    useEffect(onlinepleyer, [])
    // setInterval(onlinepleyer, 1000)
    const copylinkgame = () => {
        navigator.clipboard.writeText(Cookies.get('room'));
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
        setvaluejavab(valuejavab + e.target.innerText)
        let sdfdsf = valuejavab + e.target.innerText;
        setTimeout(() => {
            if (sdfdsf.length === soaljson.length) {
                setvaluejavab('')
                let element = document.querySelectorAll(".disblep");
                window.navigator.vibrate(300);
                if (sdfdsf === javaborg) {
                    Cookies.set('active', "yes")
                    setclassgetkalame('getkalame')
                }
                // window.navigator.vibrate([300, 100, 200, 50, 300]);
                for (let i = 0; element.length >= i; i++) {
                    element[i].classList.remove("disblep");
                }
            }
        }, 500)

    }
    // useEffect(clickkalame)
    const getkalamein = (e) => {
        setkalameste(e.target.value)


    }

    const subkalame = () => {
        if (kalameste !== '') {
            httpGet("https://aidinr.ir/multichar/api.php?roomkalame=" + Cookies.get('room') + "&kalames=" + kalameste)
            Cookies.set('active', "no")
            setclassgetkalame('getkalame offfkalame')
        }

    }

    const pleyersgame2 = onlinepleyerstate.map(pleyer => {

        return (<div className="itempleyer">
            <i className="fa-solid fa-gamepad"></i><span>{pleyer.name}</span><p>{(Cookies.get('name') === pleyer.hash) ? 'you' : ''}</p>
        </div>)
    })
    const soaljson2 = soaljson.map((soal) => {

        return (<p onClick={clickkalame}>{soal}</p>)
    })
    window.addEventListener("load", async function () {
        httpGet("https://aidinr.ir/multichar/api.php?stuse=online&shash=" + Cookies.get('name'))
        if (Cookies.get('name') === undefined) {
            window.location.href = '/'
        }
    })
    window.addEventListener("beforeunload", function () {
        httpGet("https://aidinr.ir/multichar/api.php?stuse=offline&shash=" + Cookies.get('name'))
        if (onlinepleyerstate.length <= 0) {
            httpGet("https://aidinr.ir/multichar/api.php?dellroome=" + Cookies.get('room'))
        }
        Cookies.remove('name')
        Cookies.remove('active')
        Cookies.remove('room')
    })

    return (
        <div className="fullhome background" >
            <div className={classgetkalame}>
                <div className="titlelogo">

                    <h1 >MULTI CHAR</h1>
                    <a href="https://aidinr.ir" className="aidinr">power by Aidinr.ir</a>
                </div>
                <div className="box-join">
                    <h2 className="titleboxhome">enter a word</h2>
                    <input className="inputtokn" type="text" onChange={getkalamein} placeholder="Write the word" />
                    <button className="btn" onClick={subkalame}>submit</button>
                </div>
            </div>
            <div className={classopenmodpl} >
                <div className="btnopenbox" onClick={() => {
                    openmodpl()
                    onlinepleyer()
                }}>
                    <i className="fa fa-angle-up"></i>
                    <p>pleyers</p>
                    <i className="fa fa-angle-down closeplred"></i>
                </div>
                <div className="cantentpleyer">
                    {pleyersgame2}
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
                <p className="linkgame">{Cookies.get('room')}</p>
                <button>copy token</button>
                <p className={classmodlink}>Copy successful</p>
            </div>

            <div className="boxjvab">
                <p>{valuejavab}</p>
            </div>
            <div className="horofbox">
                {soaljson2}
            </div>








        </div>
    );

}

export default Game;

