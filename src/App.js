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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--h9xmd52lw246.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Chargement Logo={Logo} />
  ) : (
    <div className="app">
      <Header Logo={Logo} />
      <Resto data={data} choice={choice} setChoice={setChoice} />
    </div>
  );
};

export default App;
