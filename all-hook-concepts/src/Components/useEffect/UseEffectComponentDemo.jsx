import React, { useState, useEffect } from "react";

const UseEffectDemo = () => {
  /*
        Syntax:

useEffect(() => {
    // Side effect logic goes here
    return () => {
         // Cleanup logic (optional)
  };
}, [dependencies]);
        */

  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log("Use effect is running...");
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await api.json();

      console.table(result);
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Fetched Data</h1>

      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UseEffectDemo;
