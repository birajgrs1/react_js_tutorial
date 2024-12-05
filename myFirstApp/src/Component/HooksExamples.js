import React, { useState, useEffect } from "react";

// const[count, setCount] = useState(0);

const App = () => {
    // let text = "Hello, World!";
    // const[text, setText] = useState("Hello, World!");

    // Working with objects
    const [datas, setData] = useState({
        name: "Ram Dahal",
        email: "dahalram21@gmail.com",
        contact: 9841000000,
        Profession: "Full Stack Developer"   
    });

    const [seconds, setSeconds] = useState(0); // Timer state

    const handleClick = () => {
        // text = "Hello, Everyone!";
        // setText("Hello, Everyone!");
        // console.log(text);

        // setData({
        //     name: "Shyam Thapa",
        //     email: "shyamthapa99@gmail.com",
        //     contact: 9802000000,
        //     Profession: "Frontend Developer"
        // });

        setData(previousState => ({
            ...previousState, // Spread the previous state
            name: "Shyam Thapa" 
        }));
    };

    // Using useEffect
    useEffect(() => {
        console.log("The 'datas' state has changed:", datas);
    }, [datas]);

    // Timer functionality using useEffect
    useEffect(() => {
        const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <div>
            {/* <h2>{text}</h2> */}
            <p>
                Name: {datas.name}, Email: {datas.email}, Contact: {datas.contact}, Profession: {datas.Profession}
            </p>
            <h3>Timer: {seconds} seconds</h3> {/* Displaying the timer */}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default App;
