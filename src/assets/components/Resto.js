import Menus from "./Menus";

const Resto = ({ data, choice, setChoice, counter, setCounter }) => {
  return (
    <main>
      <div className="restoContent">
        <div className="containerResto">
          <div className="restoTitle">
            <h1>{data.restaurant.name}</h1>
            <p className="restoDesritption">{data.restaurant.description}</p>
          </div>
          <div className="imagePresentation">
            <img
              className="imageResto"
              src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
              alt="restoImage"
            />
          </div>
        </div>
      </div>
      <Menus
        counter={counter}
        setCounter={setCounter}
        data={data}
        choice={choice}
        setChoice={setChoice}
      />
    </main>
  );
};

export default Resto;
