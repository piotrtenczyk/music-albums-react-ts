import OrangeLink from "../common/OrangeLink";

const NavBar = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "30px",
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
          <OrangeLink to="/">home</OrangeLink>
        </li>
        <li>
          <OrangeLink to="employees-list">employee list</OrangeLink>
        </li>
        <li>
          <OrangeLink to="layout-demo">layout demo</OrangeLink>
        </li>
        <li>
          <OrangeLink to="/contact">contact</OrangeLink>
        </li>
        <li>
          <OrangeLink to="/contact2">contact2</OrangeLink>
        </li>
        <li>
          <OrangeLink to="/itunes-albums">itunes albums</OrangeLink>
        </li>
        <li>
          <OrangeLink to="/our-albums">our albums</OrangeLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
