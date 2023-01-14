import { Link, LinkProps } from "react-router-dom";

const style = {
  textDecoration: "none",
  color: "orange",
  fontSize: "22px",
};

const SmallOrangeLink = (props: LinkProps) => {
  return (
    <Link {...props} style={style}>
      {props.children}
    </Link>
  );
};
export default SmallOrangeLink;
