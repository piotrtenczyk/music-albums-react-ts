interface RenderMessage2 {
  children: React.ReactNode;
}

const RenderMessage2: React.FC<RenderMessage2> = (props) => {
  return <div>{props.children}</div>;
};

export default RenderMessage2;
