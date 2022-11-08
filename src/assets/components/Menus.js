import Panier from "./Panier";
import Menu from "./Menu";

const Menus = ({ data, choice, setChoice, counter, setCounter }) => {
  return (
    <div className="containerMenu">
      <div className="description">
        <div className="menuContent">
          {data.categories.map((element, index) => {
            return (
              <Menu
                counter={counter}
                setCounter={setCounter}
                choice={choice}
                setChoice={setChoice}
                data={data.categories[index]}
                key={index}
              />
            );
          })}
        </div>
        <Panier
          setCounter={setCounter}
          counter={counter}
          choice={choice}
          getChoice={setChoice}
        />
      </div>
    </div>
  );
};

export default Menus;
