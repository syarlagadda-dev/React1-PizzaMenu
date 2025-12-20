import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <GitHubLink />
    </div>
  );
}

function Pizza(props) {
  return (
    <li
      className="pizza"
      style={{
        margin: "10px",
        padding: "10px",
        backgroundColor: "#ffcc4bff",
      }}
    >
      <img
        src={props.pizzaObj.photoName}
        alt={props.pizzaObj.name}
        style={{
          filter: props.pizzaObj.soldOut ? "grayscale(100%)" : "none",
          opacity: props.pizzaObj.soldOut ? 0.8 : 1,
        }}
      />
      <div className="pizza-info">
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
      </div>
    </li>
  );
}

function Header() {
  return (
    <div
      style={{
        textShadow:
          "-1px -1px 0 black, 1px -1px 0 black, -1px  1px 0 black, 1px  1px 0 black",
        display: "flex",
        justifyContent: "center",
        color: "#ff4a4aff",
        fontSize: "40px",
      }}
    >
      <h1>Fast React Pizza Co.</h1>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "45px",
        }}
      >
        Our Menu
      </h1>
      <>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </h2>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <footer>
        {isOpen
          ? "We are open until 10:00 PM. Come visit us or order online."
          : "We are closed. Come back later!"}
      </footer>
    </div>
  );
}

function GitHubLink() {
  return (
    <a
      href="https://github.com/syarlagadda-dev/React1-PizzaMenu"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <button
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        View on GitHub
      </button>
    </a>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
