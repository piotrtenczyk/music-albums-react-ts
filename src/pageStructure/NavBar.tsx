import SmallOrangeLink from "../common/SmallOrangeLink";

const NavBar = () => {
  const style = {
    gridArea: "navbar",
  };

  const navLinkStyle = {
    display: "inline-block",
    margin: "10px",
    background: "rgb(53 58 69)",
    padding: "10px",
  };

  return (
    <nav style={style}>
      <div>
        <span style={navLinkStyle}>
          <SmallOrangeLink to="/itunes-albums">
            iTunes Top Albums
          </SmallOrangeLink>
        </span>
        <span style={navLinkStyle}>
          <SmallOrangeLink to="/our-albums">
            Our Favourite Albums
          </SmallOrangeLink>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
