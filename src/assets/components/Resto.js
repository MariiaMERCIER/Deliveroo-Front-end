import { useState } from "react";
import Menus from "./Menus";

import Plus from "../images/plus.png";
import Moins from "../images/moins.png";

const Resto = ({ data, choice, setChoice }) => {
  const [visible, setVisible] = useState(false);
  let total = 0;
  let counter = 0;
  for (let i = 0; i < choice.length; i++) {
    total = total + choice[i].price * choice[i].quantity;
    counter = counter + choice[i].quantity;
  }
  return (
    <main>
      <div className="image-show">
        <img
          src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
          alt="restoImage"
        />
      </div>
      <div className="restoContent">
        <div className="containerResto">
          <div className="restoTitle">
            <h1>{data.restaurant.name}</h1>
            <p className="restoDesritption">{data.restaurant.description}</p>
          </div>
          <div className="imagePresentation hidden">
            <img
              className="imageResto"
              src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
              alt="restoImage"
            />
          </div>
        </div>
      </div>
      <Menus data={data} choice={choice} setChoice={setChoice} />
      {choice.length === 0 ? (
        <div className="panier-show">
          <button>Valider mon panier</button>
        </div>
      ) : (
        <div className="panier-show actif">
          <button
            onClick={() => {
              setVisible(true);
            }}
          >
            <span>{counter}</span>Valider mon panier
            <span>{(2.5 + Number(total.toFixed(2))).toFixed(2)} €</span>
          </button>
        </div>
      )}
      {visible && (
        <div className="panier-show">
          <div
            className="close"
            onClick={() => {
              setVisible(false);
            }}
          >
            <span>X</span>
          </div>
          <div className="with-sous-total-show">
            <div className="allElem-show">
              {choice.map((elem, num) => {
                total = total + elem.quantity * elem.price;

                return (
                  <div key={num}>
                    <div className="counter-show">
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
          <div className="validation-show details">
            <button>Valider mon panier</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Resto;
