import React, { useState, useEffect, useRef } from "react";

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

    const [seconds, setSeconds] = useState(0); 

    const formRef = useRef(null); 

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

    useEffect(() => {
        const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval); 
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const formData = new FormData(formRef.current);
        const name = formData.get("name");
        const email = formData.get("email");
        const contact = formData.get("contact");
        const profession = formData.get("profession");

        setData({
            name,
            email,
            contact: Number(contact), 
            Profession: profession
        });
    };

    return (
        <div>
            {/* <h2>{text}</h2> */}
            <p>
                Name: {datas.name}, Email: {datas.email}, Contact: {datas.contact}, Profession: {datas.Profession}
            </p>
            <h3>Timer: {seconds} seconds</h3> 
            <button onClick={handleClick}>Click Me</button>

            <form ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" defaultValue={datas.name} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" defaultValue={datas.email} />
                </div>
                <div>
                    <label>Contact: </label>
                    <input type="text" name="contact" defaultValue={datas.contact} />
                </div>
                <div>
                    <label>Profession: </label>
                    <input type="text" name="profession" defaultValue={datas.Profession} />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default App;
