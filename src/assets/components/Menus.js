import Panier from "./Panier";
import Menu from "./Menu";

const Menus = ({ data }) => {
  return (
    <div className="containerMenu">
      <div className="description">
        <div className="menuContent">
          {data.categories.map((element, index) => {
            return <Menu data={data} index={index} />;
          })}
        </div>
        <Panier />
      </div>
    </div>
  );
};

export default Menus;
