import React, { useState, useEffect, useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Main = () => {

    const { input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData } = useContext(Context);

    const [showSend, setShowSend] = useState(false);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {
        setShowSend(input.trim() !== '');
    }, [input]);

    const getRightPadding = (showSend) => {
        return showSend ? 20 : 5
    }

    const getTransformation = (showSend) => {
        return showSend
            ? {
                transform: 'rotateY(0deg)'
            }
            : {
                transform: 'rotateY(90deg)',
                width: 0,
                height: 0,
            };
    };




    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today ?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Look up a Linux shell command for a specific task</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Settle a debate: how should you store bread?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Suggest a Python library to solve a problem</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box" style={{ paddingRight: getRightPadding(showSend) }} >
                        <input type="text" placeholder='Enter a prompt here' onChange={handleInputChange} />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" className='sends_button' style={getTransformation(showSend)} />

                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. <span>Your privacy and Gemini Apps</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main



