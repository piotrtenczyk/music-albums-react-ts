import { ReactNode } from "react";

const homePageParagraphStyle = {
  fontSize: "18px",
  fontFamily: "'Courier New', monospace",
  margin: "30px",
  display: "inline-block",
};

interface HomePageParagraphProps {
  children: ReactNode;
}

const HomePageParagraph: React.FC<HomePageParagraphProps> = ({ children }) => {
  return <p style={homePageParagraphStyle}>{children}</p>;
};

export default HomePageParagraph;
export const HPP = HomePageParagraph;
