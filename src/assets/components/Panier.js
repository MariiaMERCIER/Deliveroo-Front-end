import Plus from "../images/plus.png";
import Moins from "../images/moins.png";

const Panier = ({ choice, setChoice }) => {
  let total = 0;
  return choice.length === 0 ? (
    <div className="panier vide hidden">
      <button className="validation">Valider mon panier</button>
      <span>Panier vide</span>
    </div>
  ) : (
    <div className="panier hidden">
      <button className="validation">Valider mon panier</button>
      <div className="with-sous-total">
        <div className="allElem">
          {choice.map((elem, num) => {
            total = total + elem.quantity * elem.price;

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
                  <span className="quantity">{elem.quantity}</span>
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

                <span className="titleProduct">{elem.title}</span>
                <span className="pricePanier">
                  {(elem.price * elem.quantity).toFixed(2)} €
                </span>
              </div>
            );
          })}
        </div>
        <div className="sous-total">
          <div>
            <span>Frais de livraison</span>
            <span>2.50€</span>
          </div>
          <div>
            <span>Sous-total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
        </div>
        <div className="total">
          <span>Total</span>
          <span>{(2.5 + Number(total.toFixed(2))).toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
};

export default Panier;
