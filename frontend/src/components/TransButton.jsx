import React from 'react';
import { useEffect, useState, useRef } from 'react';


const TransButton = ({ callback, cap }) => {

    const [languageOptions, setLanguageOptions] = useState([
        { code: "en", name: "English" },
        { code: "hi", name: "Hindi" },
        { code: "mr", name: "Marathi" },
        { code: "fr", name: "French" },
        { code: "zh", name: "Chinese" },
        { code: "ru", name: "Russian" },
        { code: "ja", name: "Japanese" }
    ]);
    const [to, setTo] = useState('en');
    // const [from, setFrom] = useState('en');
    // const [input, setInput] = useState('');
    // const [output, setOutput] = useState('');

    const prevTo = useRef(to);

    const handleTranslate = async () => {

        // console.log(cap);

        if (to === "en") {
            callback(cap);
        }

        else {
            // const fetch = require('node-fetch');

            const encodedParams = new URLSearchParams();
            encodedParams.set('from', 'auto');
            encodedParams.set('to', to);
            encodedParams.set('text', cap);

            const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
            const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '7853b13684mshdc75038438fbc40p1a797cjsn66b784385c19',
                'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
            },
            body: encodedParams
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                callback(result.trans);
                console.log(result.trans);
            } catch (error) {
                console.error(error);
            }
            // const url = "https://rapid-translate.p.rapidapi.com/TranslateText";
            // const fetchOptions = {
            //     method: "POST",
            //     headers: {
            //         "content-type": "application/json",
            //         "X-RapidAPI-Key":
            //             "6f6d882d6dmshb61682053181adap12ae69jsne6baf7d12825",
            //         "X-RapidAPI-Host": "rapid-translate.p.rapidapi.com"
            //     },
            //     // body: new URLSearchParams({
            //     //     from: "en",
            //     //     to: to,
            //     //     text: cap
            //     // })
            //     body: JSON.stringify({
            //         from: "en",
            //         text: cap,
            //         to: to
            //     })
            // };

            // try {
            //     const response = await fetch(url, fetchOptions);
            //     const result = await response.json();
            //     // setCap(result.translated_text);
            //     callback(result.result);
            //     console.log(result);
            // } catch (error) {
            //     console.error(error);
            // }
        }
    };

    const handleLanguageChange = (e) => {
        setTo(e.target.value);
    };

    useEffect(() => {
        if (prevTo.current !== to) {
            console.log(to);
            prevTo.current = to;
        }
    }, [to]);

    return (
        <>
            <div style={{margin:"14px 2px", marginLeft:"157px"}}>
                <select onChange={handleLanguageChange}>
                    {languageOptions.map((opt) => (
                        <option key={opt.code} value={opt.code}>
                            {opt.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <button className="translate-btn" onClick={handleTranslate}>Translate</button>
            </div>
        </>
    )
}

export default TransButton