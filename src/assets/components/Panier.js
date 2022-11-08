import Plus from "../images/plus.png";
import Moins from "../images/moins.png";

const Panier = ({ choice, getChoice, counter, setCounter }) => {
  return (
    <div className="panier">
      <button className="validation">Valider mon panier</button>
      {choice.map((elem, num) => {
        // console.log(choice);
        return (
          <div className="panierElement" key={num}>
            <div className="counter">
              <img className="moins" src={Moins} alt="moins" />
              <span>{choice[num].counter}</span>
              <img className="plus" src={Plus} alt="plus" />
            </div>

            <span>{choice[num].title}</span>
            <span>{choice[num].price} €</span>
          </div>
        );
      })}
    </div>
  );
};

export default Panier;
