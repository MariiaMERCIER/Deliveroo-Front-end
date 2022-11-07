import "./App.css";
import "./stylesheet.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./assets/images/logo-teal.svg";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <div className="app">
      <header>
        <div className="container">
          <img className="logo" src={Logo} alt="logo-deliveroo"></img>
        </div>
      </header>
      <main>
        <div className="container">
          <span>En cours de chargement...</span>
        </div>
      </main>
    </div>
  ) : (
    <div className="app">
      <header>
        <div className="container">
          <img className="logo" src={Logo} alt="logo-deliveroo"></img>
        </div>
      </header>
      <main>
        <div className="restoContent">
          <div className="containerResto">
            <div className="restoTitle">
              <h1>{data.restaurant.name}</h1>
              <p className="restoDesritption">{data.restaurant.description}</p>
            </div>
            <div>
              <img
                className="imageResto"
                src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
                alt="restoImage"
              />
            </div>
          </div>
        </div>
        <div className="containerMenu">
          <div className="description">
            <div className="menuContent">
              {data.categories.map((element, index) => {
                // console.log(data.categories);
                return (
                  <div className="meal" key={index}>
                    {data.categories[index].meals.length !== 0 && (
                      <div>
                        <h2>{data.categories[index].name}</h2>
                        <div className="menu">
                          {data.categories[index].meals.map((element, num) => {
                            // console.log(data.categories[index].meals[num].title);
                            return (
                              <div className="plates" key={num}>
                                <div className="mealDescription">
                                  <h3>
                                    {data.categories[index].meals[num].title}
                                  </h3>
                                  <p className="plateDescription">
                                    {
                                      data.categories[index].meals[num]
                                        .description
                                    }
                                  </p>

                                  <span className="price">
                                    {data.categories[index].meals[num].price} €
                                  </span>
                                  {data.categories[index].meals[num].popular ? (
                                    <span className="populaire">Populaire</span>
                                  ) : null}
                                </div>

                                {data.categories[index].meals[num].picture ? (
                                  <div className="meal-photos">
                                    <img
                                      className="photoMeal"
                                      src={
                                        data.categories[index].meals[num]
                                          .picture
                                      }
                                      alt="meal"
                                    />
                                  </div>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="panier">
              <h1>Hello je suis panier</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
