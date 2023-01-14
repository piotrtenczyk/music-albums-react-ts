interface CircleLoaderProps {
  show: boolean;
}

const loaderContainerStyle = {
  textAlign: "center" as "center",
  marginTop: "100px",
};

const CircleLoader = ({ show }: CircleLoaderProps) => {
  if (!show) return null;
  return (
    <div style={loaderContainerStyle}>
      <div className="loader"></div>
    </div>
  );
};

export default CircleLoader;
