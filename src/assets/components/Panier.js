import Plus from "../images/plus.png";
import Moins from "../images/moins.png";

const Panier = ({ choice, setChoice }) => {
  let total = 0;
  return choice.length === 0 ? (
    <div className="panier vide">
      <span>Panier vide</span>
    </div>
  ) : (
    <div className="panier">
      <button className="validation">Valider mon panier</button>
      <div className="with-sous-total">
        <div className="allElem">
          {choice.map((elem, num) => {
            total = choice[num].quantity * choice[num].price;
            // console.log(choice);
            return (
              <div className="panierElement" key={num}>
                <div className="counter">
                  <img
                    className="moins"
                    src={Moins}
                    alt="moins"
                    onClick={() => {
                      const newChoice = [...choice];
                      newChoice[num].quantity = newChoice[num].quantity - 1;
                      if (newChoice[num].quantity >= 1) {
                        setChoice(newChoice);
                      } else {
                        newChoice.splice(num, num + 1);
                        setChoice(newChoice);
                      }
                    }}
                  />
                  <span className="quantity">{choice[num].quantity}</span>
                  <img
                    className="plus"
                    src={Plus}
                    alt="plus"
                    onClick={() => {
                      const newChoice = [...choice];
                      newChoice[num].quantity = newChoice[num].quantity + 1;
                      setChoice(newChoice);
                    }}
                  />
                </div>

                <span className="titleProduct">{choice[num].title}</span>
                <span className="pricePanier">
                  {(choice[num].price * choice[num].quantity).toFixed(2)} €
                </span>
              </div>
            );
          })}
        </div>
        <div classname="sous-total">
          <p>
            <span>Frais de livraison</span>
            <span>2.50€</span>
          </p>
          <p>
            <span>Sous-total</span>

            <span>{total.toFixed(2)} €</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Panier;
