const Header = ({ Logo }) => {
  return (
    <header>
      <div className="container">
        <img className="logo" src={Logo} alt="logo-deliveroo"></img>
      </div>
    </header>
  );
};

export default Header;
