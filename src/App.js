import "./App.css";
import "./stylesheet.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./assets/images/logo-teal.svg";
import Chargement from "./assets/components/Chargement";
import Header from "./assets/components/Header";
import Resto from "./assets/components/Resto";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [choice, setChoice] = useState([]);
  const [counter, setCounter] = useState(0);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3200/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <Chargement Logo={Logo} />
  ) : (
    <div className="app">
      <Header Logo={Logo} />
      <Resto
        setCounter={setCounter}
        counter={counter}
        data={data}
        choice={choice}
        setChoice={setChoice}
      />
    </div>
  );
};

export default App;
