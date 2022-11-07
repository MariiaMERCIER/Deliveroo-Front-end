import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect =
    (() => {
      fetchData();
    },
    []);
  return isLoading ? (
    <div className="App">
      <div className="container">
        <header>
          <h1>DELIVEROO</h1>
        </header>
        <main>
          <span>En cours de chargement</span>
        </main>
      </div>
    </div>
  ) : (
    <div className="App">
      <div className="container">
        <header>
          <h1>DELIVEROO</h1>
        </header>
        <main>
          <h2>{data.restaurant.name}</h2>
        </main>
      </div>
    </div>
  );
};

export default App;
