import { Link, LinkProps } from "react-router-dom";

const style = {
  textDecoration: "none",
  color: "orange",
};

const OrangeLink = (props: LinkProps) => {
  return (
    <Link {...props} style={style}>
      {props.children}
    </Link>
  );
};
export default OrangeLink;
