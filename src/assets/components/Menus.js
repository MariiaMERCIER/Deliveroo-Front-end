import Panier from "./Panier";
import Menu from "./Menu";

const Menus = ({ data, choice, setChoice }) => {
  return (
    <div className="containerMenu">
      <div className="description">
        <div className="menuContent">
          {data.categories.map((element, index) => {
            return (
              <Menu
                choice={choice}
                setChoice={setChoice}
                data={data.categories[index]}
                key={index}
              />
            );
          })}
        </div>
        <Panier choice={choice} setChoice={setChoice} />
      </div>
    </div>
  );
};

export default Menus;
