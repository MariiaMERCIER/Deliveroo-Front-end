import Panier from "./Panier";
import Menu from "./Menu";

const Menus = ({ data }) => {
  return (
    <div className="containerMenu">
      <div className="description">
        <div className="menuContent">
          <Menu data={data} />
        </div>
        <Panier />
      </div>
    </div>
  );
};

export default Menus;
