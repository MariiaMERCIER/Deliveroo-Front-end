const Chargement = ({ Logo }) => {
  return (
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
  );
};

export default Chargement;
