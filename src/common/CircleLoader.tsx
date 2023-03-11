interface CircleLoaderProps {
  show: boolean;
}

const loaderContainerStyle = {
  textAlign: "center" as "center",
  marginTop: "100px",
};

const CircleLoader = ({ show }: CircleLoaderProps) => {
  // console.log("show", show);
  if (!show) return null;
  return (
    <div data-testid="loader" style={loaderContainerStyle}>
      <div className="loader"></div>
    </div>
  );
};

export default CircleLoader;
