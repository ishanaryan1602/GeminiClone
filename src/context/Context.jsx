import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord)
        }, 75 * index);
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);

    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response1;
        if (prompt != undefined) {
            response1 = await run(prompt);
            setRecentPrompt(prompt);
        }
        else {
            setPrevPrompt(prev => [...prev, input]);
            setRecentPrompt(input);
            response1 = await run(input);

        }
        let newresponseArray = response1.split(" ");
        for (let i = 0; i < newresponseArray.length; i++) {
            const nextWord = newresponseArray[i];
            delayPara(i, nextWord + " ");
        };
        setResultData(newresponseArray);
        setLoading(false);
        setInput(" ");
    }

    const contextValue = {
        input,
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
        setResultData,
        onSent,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;