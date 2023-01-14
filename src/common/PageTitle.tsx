const style = {
  marginBottom: "20px",
  textAlign: "center" as "center",
};

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return <div style={style}>{title}</div>;
};

export default PageTitle;
