import SmallOrangeLink from "../common/SmallOrangeLink";

const NavBar = () => {
  const style = {
    position: "fixed" as "sticky",
    top: "80px",
    left: "0px",
    width: "250px",
  };

  const listStyle = {
    listStyleType: "none",
  };

  return (
    <nav style={style}>
      <ul style={listStyle}>
        <li>
          <SmallOrangeLink to="/itunes-albums">
            iTunes Top Albums
          </SmallOrangeLink>
        </li>
        <li>
          <SmallOrangeLink to="/our-albums">
            Our Favourite Albums
          </SmallOrangeLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
