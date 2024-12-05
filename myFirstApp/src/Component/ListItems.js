import React from "react";


/*
const ItemLists = (props) => {
  return <li>{props.datas}</li>;
};

const ListItems = () => {
  let items = [
    { name: "Apple" },
    { name: "Ball" },
    { name: "Car" },
    { name: "Doll" }
  ];

  return (
    <>
      <h1>All List Items</h1>

       
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
        </ul> 
      

      <ul>

        {/* 
        <li>{items[0]}</li>
        <li>{items[1]}</li>
        <li>{items[2]}</li>
        <li>{items[3]}</li>
         

         Using array map to render lists from objects 
        {items.map((item, index) => (
          <ItemLists key={index} datas={item.name} />
        ))}

      </ul>
    </>
  );
};

export default ListItems;
*/


const ItemTable = (props) => {
  return (
    <tr>
      <td>{props.item.id}</td>
      <td>{props.item.fruitname}</td>
      <td>{props.item.price}</td>
    </tr>
  );
};

const ListItems = () => {
  const items = [
    { id: 1, fruitname: "Apple", price: "रू320" },
    { id: 2, fruitname: "Banana", price: "रू130" },
    { id: 3, fruitname: "Cherry", price: "रू150" },
    { id: 4, fruitname: "Dragonfruit", price: "रू350" }
  ];

  return (
    <>
      <h2>Fruit List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fruit Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemTable key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListItems;


