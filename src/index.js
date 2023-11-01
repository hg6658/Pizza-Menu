import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import focaccia from './pizzas/focaccia.jpg';
import margherita  from './pizzas/margherita.jpg';
import spinaci from './pizzas/spinaci.jpg';
import funghi from './pizzas/funghi.jpg';
import salamino from './pizzas/salamino.jpg';
import prosocicutto from './pizzas/prosciutto.jpg';
import Cpp from './cpp';
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: focaccia,
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: margherita,
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: spinaci,
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: funghi,
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: salamino,
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: prosocicutto,
      soldOut: false,
    },
  ];
  
function App(){
    return (<div className='container'>
        <Header/>
        <Menu/>
        <Cpp/>
        <Footer/>
        </div>);
}

function Header(){
    return <header className='header'><h1>Fast React Pizza Co.</h1></header>
}

function Menu(){
   let pizzas = pizzaData.map(pizza =>{
      return <Pizza pizza={pizza}/>
    });
    return (<main className='menu'>
        <h2>Our Menu</h2>
        <ul className='pizzas'>
        {pizzas.length && pizzas}
        </ul>
        </main>);
}


function Pizza({pizza}){
  return (
    <li className = {`pizza ${pizza.soldOut ? 'sold-out' : "" }`} key={pizza.name}>
      <img src = {pizza.photoName} alt={pizza.name}/>
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price+3}</span>
      </div>
    </li>
  );
}

function Footer(){
    const openHour = 12;
    const closeHour = 22;
    const currentHour  = new Date().getHours();
    let jsx = currentHour>=openHour && currentHour<closeHour ?
     <footer className='footer'>We are currently Opened</footer> : 
     <footer className='footer'>We are currently Closed</footer>;
    return jsx;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    );